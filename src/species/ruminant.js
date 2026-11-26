import * as THREE from 'three';
import { V3, merge, C, ell, limb, tube, rel, canvasTex, brainGeo } from '../animal.js';
import { rng } from '../util.js';

/* Organ ruminansia (sapi, kambing) dalam koordinat model sapi, lalu dipetakan ke spesies lain lewat transform X.
   Lambung empat ruang: rumen (kiri, terbesar), retikulum (sarang lebah), omasum (lembaran), abomasum (lambung sejati). */

let TEX = null;
function textures() {
  if (TEX) return TEX;
  /* papila rumen: tonjolan kecil rapat */
  const pap = canvasTex(256, (x, N) => { const r = rng(5); x.fillStyle = '#b89478'; x.fillRect(0, 0, N, N); for (let i = 0; i < 2600; i++) { const px = r() * N, py = r() * N, s = 1.5 + r() * 2.5; x.fillStyle = r() < 0.5 ? 'rgba(120,80,55,0.55)' : 'rgba(230,200,170,0.4)'; x.beginPath(); x.arc(px, py, s, 0, Math.PI * 2); x.fill(); } }, [3, 3]);
  /* retikulum: pola sarang lebah */
  const hon = canvasTex(256, (x, N) => { x.fillStyle = '#c49a86'; x.fillRect(0, 0, N, N); x.strokeStyle = 'rgba(90,50,40,0.75)'; x.lineWidth = 3; const s = 16, h = s * Math.sqrt(3);
    for (let row = -1; row < N / h * 2 + 2; row++) for (let col = -1; col < N / (s * 3) + 2; col++) { const cx = col * s * 3 + (row % 2 ? s * 1.5 : 0), cy = row * h / 2; x.beginPath(); for (let k = 0; k <= 6; k++) { const a = k * Math.PI / 3; x.lineTo(cx + Math.cos(a) * s, cy + Math.sin(a) * s); } x.stroke(); } }, [2, 2]);
  /* omasum: lembaran berlapis */
  const lea = canvasTex(256, (x, N) => { x.fillStyle = '#a88470'; x.fillRect(0, 0, N, N); for (let i = 0; i < 22; i++) { const px = i / 22 * N; x.fillStyle = 'rgba(70,40,30,0.55)'; x.fillRect(px, 0, 3, N); x.fillStyle = 'rgba(240,210,190,0.35)'; x.fillRect(px + 4, 0, 2, N); } }, [2, 1]);
  return (TEX = { pap, hon, lea });
}

/* X = {sx, sy, sz, ox, oy, k}; H = {brain:{r, cb, p}, neck:[...titik mulut->leher, koordinat spesies], lobedKidney, teats} */
export function ruminantOrgans(addO, organMat, X, H) {
  const T = (p) => [p[0] * X.sx + (X.ox || 0), p[1] * X.sy + (X.oy || 0), p[2] * X.sz];
  const k = X.k, E = (r, p, seg, rot) => ell(r.map((v) => v * k), T(p), seg, rot);
  const L = (a, b, r1, r2) => limb(T(a), T(b), r1 * k, r2 * k);
  const TB = (pts, r, seg, rad) => tube(pts.map(T), r * k, seg, rad);
  const tx = textures();

  addO('otak', brainGeo(H.brain.r, H.brain.cb), organMat([0.86, 0.64, 0.66], 0.5, 0.3), H.brain.p);
  const HC = T([1.75, -0.15, 0.1]);
  const heart = addO('jantung', rel(merge([E([0.45, 0.55, 0.4], [1.75, -0.15, 0.1], 24), E([0.35, 0.4, 0.34], [1.95, 0.0, -0.12], 20), L([1.85, 0.3, 0], [1.9, 0.95, 0], 0.13, 0.11), L([1.7, 0.3, 0.12], [1.5, 0.85, 0.15], 0.1, 0.09)]), HC), organMat([0.62, 0.07, 0.1], 0.3, 0.8), HC);
  const lungs = [1, -1].map((s) => { const c = T([1.6, 0.8, s * 0.6]); return addO('paru', rel(merge([E([1.0, 0.6, 0.42], [1.6, 0.8, s * 0.6], 24, [0, 0, 0.1]), E([0.5, 0.45, 0.35], [0.9, 0.6, s * 0.55], 16)]), c), organMat([0.88, 0.45, 0.5], 0.55, 0.2), c); });
  const neckT = H.neck.map((p) => [p[0], p[1] - 0.14 * k, p[2]]);
  addO('paru', merge([tube(neckT.concat([T([2.6, 0.95, 0]), T([2.1, 0.9, 0])]), 0.09 * k, 24, 8), L([2.1, 0.9, 0], [1.8, 0.85, 0.6], 0.08, 0.06), L([2.1, 0.9, 0], [1.8, 0.85, -0.6], 0.08, 0.06)]), organMat([0.88, 0.86, 0.82], 0.4, 0.4));
  addO('hati', merge([E([0.62, 0.55, 0.36], [1.05, 0.45, 0.55], 22), E([0.42, 0.38, 0.28], [0.8, 0.12, 0.5], 18)]), organMat([0.4, 0.1, 0.08], 0.35, 0.7));
  const RC = T([-0.55, 0.25, -0.42]);
  const rumen = addO('rumen', rel(merge([E([1.6, 0.62, 0.72], [-0.5, 0.75, -0.42], 26), E([1.55, 0.68, 0.75], [-0.6, -0.25, -0.42], 26)]), RC), organMat([0.85, 0.7, 0.6], 0.6, 0.2, tx.pap), RC);
  addO('rumen', tube(H.neck.concat([T([2.6, 0.75, 0]), T([1.7, 0.55, -0.15]), T([1.0, 0.5, -0.3])]), 0.075 * k, 30, 8), organMat([0.9, 0.55, 0.5], 0.4, 0.5));  /* kerongkongan */
  addO('retikulum', E([0.52, 0.5, 0.45], [1.15, -0.5, -0.15], 22), organMat([0.9, 0.75, 0.7], 0.55, 0.25, tx.hon));
  addO('omasum', E([0.48, 0.46, 0.42], [0.72, -0.4, 0.6], 22), organMat([0.85, 0.7, 0.62], 0.55, 0.25, tx.lea));
  addO('abomasum', E([0.9, 0.33, 0.35], [0.05, -0.95, 0.45], 22, [0, 0, -0.25]), organMat([0.88, 0.5, 0.48], 0.4, 0.6));
  addO('usus', TB(GUT, 0.13, 200, 8), organMat([0.94, 0.68, 0.64], 0.45, 0.6));
  for (const s of [1, -1]) {
    if (H.lobedKidney) { const parts = []; const r = rng(s > 0 ? 7 : 8); for (let i = 0; i < 9; i++) parts.push(E([0.14, 0.11, 0.11], [-0.9 + (r() - 0.5) * 0.45, 1.05 + (r() - 0.5) * 0.25, s * 0.42 + (r() - 0.5) * 0.15], 10)); addO('ginjal', merge(parts), organMat([0.5, 0.14, 0.1], 0.35, 0.7)); }
    else addO('ginjal', E([0.34, 0.2, 0.22], [-0.9, 1.05, s * 0.42], 16, [0, 0, 0.3]), organMat([0.5, 0.14, 0.1], 0.35, 0.7));
  }
  addO('kandung', E([0.3, 0.28, 0.28], [-2.5, -0.35, 0], 18), organMat([0.95, 0.85, 0.5], 0.25, 0.9));
  const am = [E([0.55, 0.36, 0.5], [-1.4, -0.95, 0], 20)];
  for (const t of H.teats) am.push(L([-1.4 + t[0], -1.05, t[1]], [-1.4 + t[0], -1.5, t[1] * 1.1], 0.06, 0.05));
  addO('ambing', merge(am), organMat([0.96, 0.78, 0.74], 0.5, 0.3));
  return { heart, lungs, pulse: [{ mesh: rumen, rate: (a) => 1.5 + 1.5 * a, amp: 0.07 }] };
}

const GUT = [[-0.8, -0.75, 0.5], [-1.2, -0.95, 0.75], [-1.6, -0.6, 0.3], [-1.2, -0.35, 0.75], [-1.8, -0.1, 0.4], [-1.4, 0.2, 0.75], [-2.1, 0.3, 0.45], [-2.5, 0.6, 0.15], [-3.1, 0.95, 0]];
/* jalur makanan: utama (mulut -> rumen -> retikulum -> omasum -> abomasum -> usus) dan memamah biak (retikulum -> mulut -> rumen) */
export function ruminantFood(X, neck) {
  const T = (p) => [p[0] * X.sx + (X.ox || 0), p[1] * X.sy + (X.oy || 0), p[2] * X.sz];
  const eso = [[2.6, 0.75, 0], [1.7, 0.55, -0.15], [1.0, 0.5, -0.3]].map(T);
  const rum = [[0.2, 0.9, -0.5], [-1.2, 0.9, -0.45], [-1.6, 0.1, -0.4], [-0.8, -0.5, -0.45], [0.4, -0.4, -0.4]].map(T);
  const ret = T([1.15, -0.45, -0.15]);
  const main = neck.concat(eso, rum, [ret, T([0.72, -0.4, 0.6]), T([0.6, -0.8, 0.45]), T([-0.6, -0.95, 0.45])], GUT.map(T));
  const up = eso.slice().reverse(), nk = neck.slice().reverse();
  const cud = [ret].concat(up, nk, [neck[0], neck[0]], neck, eso, [rum[0], T([0.5, 0.2, -0.4]), ret]);
  return { main, cud, n: 80 };
}
