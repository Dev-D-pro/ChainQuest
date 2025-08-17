import { Connection, Transaction } from '@solana/web3.js';

// BASE URL of server
const API_BASE = 'http://localhost:3000/api';

export async function startRun(userWallet, missionId, characterAddress) {
  const res = await fetch(`${API_BASE}/hc/start`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ userWallet, missionId, characterAddress, duration: 60 })
  });
  const j = await res.json();
  if (!j.ok) throw new Error(j.error || 'start failed');

  if (j.honeycombSendTxBase64) {
    const raw = atob(j.honeycombSendTxBase64);
    try {
      const bytes = Uint8Array.from(raw.split('').map(c => c.charCodeAt(0)));
      const tx = Transaction.from(bytes);
      // sign with wallet
      if (window.solana && window.solana.isPhantom) {
        const signed = await window.solana.signTransaction(tx);
        const connection = new Connection('https://api.devnet.solana.com');
        const sig = await connection.sendRawTransaction(signed.serialize());
        await connection.confirmTransaction(sig);
        console.log('sendCharactersOnMission tx sent:', sig);
      } else {
        console.warn('No wallet available to sign sendCharacters tx');
      }
    } catch (e) {
      console.warn('Could not decode send tx - server may have returned JSON payload; ', e);
    }
  }

  return j.runId;
}
