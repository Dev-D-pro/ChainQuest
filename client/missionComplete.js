import { Connection, Transaction } from '@solana/web3.js';

export async function completeRunAndClaim(runId, userWallet, characterAddress) {
  const res = await fetch(`https://localhost:3000/api/hc/complete`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ runId, userWallet, characterAddress, requiredDiamonds: 5 })
  });
  const j = await res.json();
  if (!j.ok) throw new Error(j.error || 'complete failed');

  if (j.honeycombRecallTxBase64) {
    const raw = atob(j.honeycombRecallTxBase64);
    const bytes = Uint8Array.from(raw.split('').map(c => c.charCodeAt(0)));
    const tx = Transaction.from(bytes);

    if (window.solana && window.solana.isPhantom) {
      // Request user to sign
      const signed = await window.solana.signTransaction(tx);
      const connection = new Connection('https://api.devnet.solana.com'); 
      const sig = await connection.sendRawTransaction(signed.serialize());
      await connection.confirmTransaction(sig);
      console.log('Honeycomb recall tx submitted:', sig);

      // After confirmed, fetch updated profile
      const profileRes = await fetch(`${API_BASE}/hc/profile/${userWallet}`);
      const profileJson = await profileRes.json();
      return { success: j.success, newXp: j.newXp, profile: profileJson.profile };
    } else {
      console.warn('Wallet not available.');
      return { success: j.success, newXp: j.newXp, profile: null };
    }
  } else {

    return { success: j.success, newXp: j.newXp };
  }
}
