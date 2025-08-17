export async function notifyCollision(runId, userWallet) {
  const res = await fetch(`https://localhost:3000/api/hc/event`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ runId, userWallet, event: 'collision' })
  });
  return res.json();
}
