
import express from 'express';
import dotenv from 'dotenv';
import { EdgeClient } from '@honeycomb-protocol/edge-client';

dotenv.config();

const router = express.Router();

// Config
const HONEYCOMB_EDGE_URL = process.env.HONEYCOMB_EDGE_URL || undefined;
const VERXIO_API_KEY = process.env.VERXIO_API_KEY || undefined; 

// Initialize EdgeClient (Honeycomb)
const honeyClient = new EdgeClient({
  baseUrl: HONEYCOMB_EDGE_URL,
});


const store = {
  runs: new Map(),
  profiles: new Map()
};

// Helper: ensure profile exists
function ensureProfile(pubkey) {
  if (!store.profiles.has(pubkey)) store.profiles.set(pubkey, { xp: 0, points: 0 });
  return store.profiles.get(pubkey);
}


router.post('/hc/start', async (req, res) => {
  try {
    const { userWallet, missionId, characterAddress, duration = 60 } = req.body;
    if (!userWallet) return res.status(400).json({ ok: false, error: 'userWallet required' });

    const runId = `${userWallet}:${Date.now()}`;
    store.runs.set(runId, { userWallet, missionId, characterAddress, diamonds: 0, startTs: Date.now(), duration });

    if (!missionId || !characterAddress) {
      ensureProfile(userWallet);
      return res.json({ ok: true, runId });
    }

    try {
      const payload = await honeyClient.createSendCharactersOnMissionTransaction({
        data: {
          mission: missionId.toString(),
          characterAddresses: [characterAddress.toString()],
          authority: userWallet.toString(),
          payer: userWallet.toString()
        }
      });

      const txObj = payload.createSendCharactersOnMissionTransaction;
      // Best-effort: if txObj has .tx or .serialized, adapt here
      const serialized = txObj?.tx || txObj?.serialized || txObj;
      // If serialized is Buffer / Uint8Array, convert to base64; if object, JSON stringify
      let txBase64;
      if (serialized instanceof Uint8Array || Buffer.isBuffer(serialized)) {
        txBase64 = Buffer.from(serialized).toString('base64');
      } else {
        txBase64 = Buffer.from(JSON.stringify(serialized)).toString('base64');
      }

      ensureProfile(userWallet);
      return res.json({ ok: true, runId, honeycombSendTxBase64: txBase64 });
    } catch (e) {
      console.error('Honeycomb send tx creation failed:', e?.message || e);
    
      ensureProfile(userWallet);
      return res.json({ ok: true, runId, warning: 'Honeycomb tx creation failed, running in fallback mode' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

/*
  Endpoint: progress (diamond picked)
  - Award Verxio loyalty points server-side (requires server authority).
  - Update in-memory run/profiles for demo.
*/
router.post('/hc/progress', async (req, res) => {
  try {
    const { runId, userWallet, count = 1 } = req.body;
    const run = store.runs.get(runId);
    if (!run) return res.status(404).json({ ok: false, error: 'run not found' });

    run.diamonds = (run.diamonds || 0) + Number(count);

    if (MOCK_MODE || !VERXIO_API_KEY) {
      // Demo: just update profile points
      const p = ensureProfile(userWallet);
      p.points = (p.points || 0) + Number(count) * 10;
      store.profiles.set(userWallet, p);
      return res.json({ ok: true, diamonds: run.diamonds, points: p.points });
    }

    try {
      const p = ensureProfile(userWallet);
      p.points = (p.points || 0) + Number(count) * 10;
      store.profiles.set(userWallet, p);
      return res.json({ ok: true, diamonds: run.diamonds, points: p.points, note: 'verxio placeholder used' });
    } catch (err) {
      console.error('Verxio award failed:', err);
      const p = ensureProfile(userWallet);
      p.points = (p.points || 0) + Number(count) * 10;
      store.profiles.set(userWallet, p);
      return res.json({ ok: true, diamonds: run.diamonds, points: p.points, warning: 'verxio call failed, used fallback' });
    }

  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

/*
  Endpoint: event (collision)
  - Penalize: revoke Verxio points and reduce diamonds locally
*/
router.post('/hc/event', async (req, res) => {
  try {
    const { runId, userWallet, event = 'collision' } = req.body;
    const run = store.runs.get(runId);
    if (!run) return res.status(404).json({ ok: false, error: 'run not found' });

    if (event === 'collision') {
      if (run.diamonds > 0) run.diamonds -= 1;

      if (MOCK_MODE || !VERXIO_API_KEY) {
        const p = ensureProfile(userWallet);
        p.points = Math.max(0, (p.points || 0) - 5);
        store.profiles.set(userWallet, p);
        return res.json({ ok: true, diamonds: run.diamonds, points: p.points });
      }

    
      try {
         await verxio.revokeLoyaltyPoints({ from: userWallet, points: 5, memo: `collision for ${runId}` });
        const p = ensureProfile(userWallet);
        p.points = Math.max(0, (p.points || 0) - 5);
        store.profiles.set(userWallet, p);
        return res.json({ ok: true, diamonds: run.diamonds, points: p.points, note: 'verxio placeholder used' });
      } catch (err) {
        console.error('Verxio revoke failed:', err);
        const p = ensureProfile(userWallet);
        p.points = Math.max(0, (p.points || 0) - 5);
        store.profiles.set(userWallet, p);
        return res.json({ ok: true, diamonds: run.diamonds, points: p.points, warning: 'verxio revoke failed' });
      }
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

/*
  Endpoint: complete run
  - If success, create Honeycomb recall (claim) transaction via EdgeClient
  - Return unsigned tx (base64) to client so they can sign & submit
*/
router.post('/hc/complete', async (req, res) => {
  try {
    const { runId, userWallet, characterAddress, requiredDiamonds = 5 } = req.body;
    const run = store.runs.get(runId);
    if (!run) return res.status(404).json({ ok: false, error: 'run not found' });

    const success = run.diamonds >= Number(requiredDiamonds);

    if (!success) {
      // failed: no Honeycomb tx, no XP
      return res.json({ ok: true, success: false, diamonds: run.diamonds });
    }

    const profile = ensureProfile(userWallet);
    profile.xp = (profile.xp || 0) + 100;

    if (MOCK_MODE || !characterAddress) {
      return res.json({
        ok: true,
        success: true,
        diamonds: run.diamonds,
        newXp: profile.xp,
        honeycombRecallTxBase64: Buffer.from(JSON.stringify({ mock: 'recall' })).toString('base64')
      });
    }
 
    try {
      const recallResp = await honeyClient.createRecallCharactersTransaction({
        data: {
          mission: run.missionId.toString(),
          characterAddresses: [characterAddress.toString()],
          authority: userWallet.toString(),
          payer: userWallet.toString()
        }
      });

      const txObj = recallResp.createRecallCharactersTransaction;
      const serialized = txObj?.tx || txObj?.serialized || txObj; // adapt to actual shape
      let txBase64;
      if (serialized instanceof Uint8Array || Buffer.isBuffer(serialized)) {
        txBase64 = Buffer.from(serialized).toString('base64');
      } else {
        txBase64 = Buffer.from(JSON.stringify(serialized)).toString('base64');
      }

      // Return new xp and the unsigned tx (base64) for client to sign & send
      return res.json({
        ok: true,
        success: true,
        diamonds: run.diamonds,
        newXp: profile.xp,
        honeycombRecallTxBase64: txBase64
      });

    } catch (err) {
      console.error('Honeycomb recall creation failed:', err);
      // fallback: return success and new xp, but no tx
      return res.json({
        ok: true,
        success: true,
        diamonds: run.diamonds,
        newXp: profile.xp,
        warning: 'honeycomb recall tx creation failed; check server logs'
      });
    }

  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

/*
  Endpoint: fetch profile
*/
router.get('/hc/profile/:pubkey', (req, res) => {
  const p = store.profiles.get(req.params.pubkey) || { xp: 0, points: 0 };
  res.json({ ok: true, profile: p });
});

export default router;
