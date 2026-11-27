import * as THREE from 'three';
import { merge, C, setSH, ell, limb, tube, cone, rel, hairTexture, furMat, canvasTex, addEyes, quadSkeleton, brainGeo } from '../animal.js';
import { lerp } from '../util.js';

/* PABRIK BURUNG. makeBird(P) membuat spec burung dengan proporsi, sayap, ekor, kaki, dan pola bulu sendiri,
   sehingga kutilang, elang, enggang, cendrawasih, raja udang, dll. tidak lagi berbentuk sama.
   Model menghadap +x. Ukuran dasar = kutilang (Pycnonotus aurigaster). Sayap berengsel di bahu. */
const DEF = {
  id: 'burung', len: 1, girth: 1, head: 1, headShape: [1, 1, 1], neck: [0, 0],
  tailL: 1, tailW: 1, tailDroop: 0.42, tailFork: 0, tailFan: 0,
  wingL: 1, wingW: 1, fingers: 0, legL: 1, legR: 1, thigh: null, talon: false, legCol: [0.18, 0.17, 0.17], beak: 'cone', beakCol: [0.1, 0.09, 0.08], beakL: 1,
  back: { base: '#6e6558', dark: 'rgba(40,34,28,0.35)', light: 'rgba(150,140,125,0.25)' },
  wing: { lead: '#8a8072', mid: '#5e564c', trail: '#2e2a26', quill: 'rgba(20,16,12,0.7)', covert: 'rgba(170,160,145,0.35)', bars: 0, barCol: 'rgba(30,20,10,0.55)', patch: null, tipCol: null },
  cheek: [0.62, 0.62, 0.6], eye: { r: 0.085, iris: [0.25, 0.14, 0.08] },
};
function mk(P0) {
  const P = { ...DEF, ...P0, back: { ...DEF.back, ...(P0.back || {}) }, wing: { ...DEF.wing, ...(P0.wing || {}) }, eye: { ...DEF.eye, ...(P0.eye || {}) } };
  const L = P.len, G = P.girth, legY = -0.4 * G;
  const HEAD_P = [0.75 * L + P.neck[0], 0.45 * G + P.neck[1], 0], TAIL_P = [-0.85 * L, -0.15 * G, 0];
  const LEGS = [[0.05, legY, 0.2 * G], [0.05, legY, -0.2 * G]];
  const SH_P = (s) => [0.45 * L, 0.35 * G, s * 0.42 * G];
  const legLen = 0.82 * P.legL, groundY = legY - legLen;
  return { P, L, G, HEAD_P, TAIL_P, LEGS, SH_P, legLen, groundY };
}
const WR = 0.5;   /* sayap terangkat di adegan bedah */
const GUT = [[0.05, -0.25, 0.12], [-0.15, -0.35, -0.1], [-0.35, -0.25, 0.1], [-0.55, -0.3, -0.05], [-0.8, -0.32, 0]];

const tx = {};
const tex = (k, f) => tx[k] || (tx[k] = f());
const backTex = (P) => tex('b' + P.id, () => hairTexture(P.back.base, (x, N, r) => {
  for (let j = 0; j < 16; j++) for (let i = 0; i < 14; i++) { const cx = i * N / 14 + (j % 2) * N / 28, cy = j * N / 16; x.fillStyle = r() < 0.4 ? P.back.dark : P.back.light; x.beginPath(); x.ellipse(cx, cy, N / 30, N / 22, 0, 0, Math.PI); x.fill(); }
}, 81, [2, 2], 2600));
/* sayap: u = sepanjang lebar (kiri = tepi belakang), v = sepanjang bentang (atas = ujung) */
const wingTex = (P) => tex('w' + P.id, () => {
  const W = P.wing, t = canvasTex(256, (x, N) => {
    x.clearRect(0, 0, N, N);
    const lead = (v) => N * (0.97 - 0.12 * v * v), trail = (v) => N * (0.02 + (P.fingers ? 0.3 : 0.55) * Math.pow(v, P.fingers ? 2.2 : 1.6));
    const g = x.createLinearGradient(N, 0, 0, 0); g.addColorStop(0, W.lead); g.addColorStop(0.45, W.mid); g.addColorStop(1, W.trail);
    x.fillStyle = g; x.beginPath();
    for (let i = 0; i <= 30; i++) { const v = i / 30; x.lineTo(lead(v), N - v * N * 0.98); }
    for (let i = 30; i >= 0; i--) { const v = i / 30; x.lineTo(trail(v), N - v * N * 0.98); }
    x.fill();
    if (W.tipCol) { x.globalCompositeOperation = 'source-atop'; x.fillStyle = W.tipCol; x.fillRect(0, 0, N, N * 0.22); x.globalCompositeOperation = 'source-over'; }
    if (W.patch) { x.globalCompositeOperation = 'source-atop'; x.fillStyle = W.patch[0]; x.fillRect(N * W.patch[1], N * (1 - W.patch[3]), N * (W.patch[2] - W.patch[1]), N * (W.patch[3] - W.patch[4])); x.globalCompositeOperation = 'source-over'; }
    /* garis-garis melintang (pola elang) */
    if (W.bars) { x.globalCompositeOperation = 'source-atop'; x.strokeStyle = W.barCol; x.lineWidth = N / (W.bars * 4); for (let k = 0; k < W.bars; k++) { const xx = N * (0.08 + k / W.bars * 0.6); x.beginPath(); x.moveTo(xx, 0); x.lineTo(xx + N * 0.05, N); x.stroke(); } x.globalCompositeOperation = 'source-over'; }
    /* bulu terbang: sekunder di pangkal, primer di ujung */
    x.lineWidth = 2; x.strokeStyle = W.quill;
    for (let k = 0; k < 18; k++) { const v = 0.04 + k / 18 * 0.92, xl = trail(v), xr = lead(v) * 0.62 + xl * 0.38; x.beginPath(); x.moveTo(xr, N - v * N * 0.98); x.lineTo(xl, N - (v + (k > 9 ? 0.08 : 0.02)) * N * 0.98); x.stroke(); }
    /* bulu penutup (kovert) lebih pucat di dekat tepi depan */
    for (let k = 0; k < 40; k++) { const v = (k % 20) / 20 * 0.6, xx = lead(v) - 10 - (k >= 20 ? 22 : 0); x.fillStyle = W.covert; x.beginPath(); x.ellipse(xx, N - v * N, 9, 6, 0, 0, Math.PI * 2); x.fill(); }
    /* "jari" bulu primer terpisah di ujung (burung pelayang: elang, enggang) */
    if (P.fingers) { x.globalCompositeOperation = 'destination-out'; for (let k = 0; k < P.fingers; k++) { const xx = N * (0.25 + k / P.fingers * 0.6); x.beginPath(); x.moveTo(xx, 0); x.lineTo(xx + N * 0.035, 0); x.lineTo(xx + N * 0.012, N * 0.2); x.closePath(); x.fill(); } x.globalCompositeOperation = 'source-over'; }
  });
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; t.repeat.set(1, 1); return t;
});
function wingGeo(K, s) {
  const P = K.P, wl = 2.3 * P.wingL, ww = 1.5 * P.wingW;
  const p = new THREE.PlaneGeometry(ww, wl, 6, 10); p.translate(-0.25 * P.wingW, wl / 2, 0);
  const pos = p.attributes.position; for (let i = 0; i < pos.count; i++) { const x = pos.getX(i), y = pos.getY(i); pos.setZ(i, -0.12 * Math.sin(Math.PI * y / wl) - 0.05 * x); }
  p.rotateX(Math.PI / 2); if (s < 0) p.scale(1, 1, -1); p.computeVertexNormals(); return p;
}
/* titik pada sayap (relatif bahu) setelah sayap diangkat WR, dalam koordinat model */
function wp(K, s, x, z) { const P = K.SH_P(s), a = -s * WR, zz = s * z * K.P.wingL; return [P[0] + x, P[1] - zz * Math.sin(a), P[2] + zz * Math.cos(a)]; }

export function makeBird(P0 = {}) {
  const K = mk(P0), P = K.P, { L, G, HEAD_P, TAIL_P, LEGS, SH_P } = K;
  const hs = P.head, HS = P.headShape, hx = HEAD_P[0] - 0.75, hy = HEAD_P[1] - 0.45;
  return {
  id: P.id, dist: [9, 17], groundY: K.groundY, worldScale: 0.1, hitR: 0.35, hitY: 0.15, muscleShrink: 0.86, birdK: K,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
  walk: { speed: 3.2, step: 6, swing: 0, radius: 7, keep: 1.0, fly: 1.7, perch: true, fold: 1.45, wingRest: 1.25, flapF: 22, graze: 0.5, tailA: 0.08, tailF: 3 },
  wingRest: WR, camTarget: [0, 0.1, 0], camYaw: 0.25, bg: ['#3a4a52', '#11181c'], pedR: 3.2, dotSize: 0.08,
  vitals: (a) => ({ bpm: Math.round(lerp(400, 900, a)), rr: Math.round(lerp(50, 140, a)) }),
  capText: (s) => 'Perkiraan kasar untuk burung kecil: jantung ' + Math.round(lerp(400, 900, s)) + ' detak per menit, napas ' + Math.round(lerp(50, 140, s)) + ' kali per menit. ' + (s > 0.6 ? 'Saat terbang, otot dada bekerja keras sehingga butuh oksigen sangat banyak.' : 'Saat hinggap, detak jantung jauh lebih lambat.') + ' Titik biru: udara mengalir satu arah lewat kantong udara dan paru-paru.',
  bodyParts(sh) {
    setSH(sh);
    const body = merge([ell([0.95 * L, 0.55 * G, 0.52 * G], [0, 0, 0], 26, [0, 0, 0.35]), ell([0.45 * L, 0.42 * G, 0.42 * G], [0.5 * L, 0.2 * G, 0], 18),
      /* leher: menyambung badan ke kepala bila kepala digeser maju/naik */
      limb([0.55 * L, 0.3 * G, 0], [0.62 + hx, 0.42 + hy, 0], 0.3 * G, 0.24 * hs, 12)]);
    const head = rel(merge([ell([0.42 * hs * HS[0], 0.38 * hs * HS[1], 0.36 * hs * HS[2]], [1.0 + hx, 0.72 + hy, 0], 22), ell([0.3 * hs, 0.3 * hs, 0.28 * hs], [0.7 + hx, 0.45 + hy, 0], 16)]), HEAD_P);
    /* ekor: panjang/lebar, bisa bercabang (layang-layang) atau mengembang (kipas) */
    const tl = 0.75 * P.tailL, tw = 0.26 * P.tailW, tparts = [ell([0.3 * L, 0.12 * G, 0.22 * G], [-0.85 * L, -0.2 * G, 0], 12, [0, 0, P.tailDroop])];
    if (P.tailFork) for (const s of [1, -1]) tparts.push(ell([tl, 0.05, tw * 0.55], [-0.85 * L - tl * 0.8, -0.2 * G - tl * 0.8 * Math.sin(P.tailDroop), s * tw * 0.5], 14, [0, s * P.tailFork, P.tailDroop]));
    else tparts.push(ell([tl, 0.05, tw * (1 + P.tailFan)], [-0.85 * L - tl * 0.8, -0.2 * G - tl * 0.8 * Math.sin(P.tailDroop), 0], 16, [0, 0, P.tailDroop]));
    const tail = rel(merge(tparts), TAIL_P);
    const legs = LEGS.map(() => ell([0.2 * G, 0.25 * G, 0.15 * G], [0, 0.05, 0], 12));
    const extra = [[ell([0.75 * L, 0.4 * G, 0.46 * G], [0.1 * L, -0.18 * G, 0], 22, [0, 0, 0.35]), 'belly'], [ell([0.3 * L, 0.16 * G, 0.2 * G], [-0.72 * L, -0.4 * G, 0], 12, [0, 0, 0.4]), 'vent']];
    const wings = sh === 1 ? [1, -1].map((s) => ({ geo: wingGeo(K, s), piv: SH_P(s), side: s })) : null;
    setSH(1);
    return { body, head, tail, legs, extra, wings };
  },
  skinMats() {
    const body = furMat(backTex(P), [0.8, 0.78, 0.72], 0.8);
    const head = new THREE.MeshPhysicalMaterial({ color: C(0.08, 0.07, 0.07), roughness: 0.6, sheen: 0.3, sheenColor: new THREE.Color(0.12, 0.12, 0.14) });
    const belly = new THREE.MeshPhysicalMaterial({ color: C(0.86, 0.84, 0.8), roughness: 0.85, sheen: 1, sheenColor: new THREE.Color(1, 1, 1) });
    const vent = new THREE.MeshStandardMaterial({ color: C(0.98, 0.72, 0.15), roughness: 0.8 });
    const tail = new THREE.MeshStandardMaterial({ color: C(0.16, 0.14, 0.13), roughness: 0.75 });
    const wings = new THREE.MeshStandardMaterial({ map: wingTex(P), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.8 });
    return { body, head, tail, legs: body, belly, vent, wings };
  },
  face(A, HP) {
    const ex = 1.16 + hx + (hs - 1) * 0.3, ey = 0.8 + hy + (hs - 1) * 0.2, ez = 0.27 * hs * HS[2];
    const mats = addEyes(A.head, HP, { p: [ex, ey, ez], r: P.eye.r * hs, scale: [1, 1, 0.8], iris: P.eye.iris, pupil: 'round', side: true });
    const beakM = new THREE.MeshStandardMaterial({ color: C(...P.beakCol), roughness: 0.35, transparent: true });
    const legM = new THREE.MeshStandardMaterial({ color: C(...P.legCol), roughness: 0.5, transparent: true });
    const rump = new THREE.MeshStandardMaterial({ color: C(...(P.cheek || [0.6, 0.6, 0.6])), roughness: 0.85, transparent: true });
    const o = (x, y, z) => [x - HP[0], y - HP[1], z - HP[2]];
    const bx = 1.2 + hx + (hs - 1) * 0.42, by = 0.68 + hy, bl = 0.32 * P.beakL;
    if (P.beak === 'cone') A.head.add(new THREE.Mesh(cone(0.08 * hs, bl, o(bx + bl, by, 0), [0, 0, -Math.PI / 2 - 0.12], 10), beakM));
    else if (P.beak === 'dagger') A.head.add(new THREE.Mesh(cone(0.1 * hs, bl, o(bx + bl * 0.5, by, 0), [0, 0, -Math.PI / 2 - 0.04], 10), beakM));
    else if (P.beak === 'curved') A.head.add(new THREE.Mesh(merge([limb(o(bx - 0.05, by + 0.02, 0), o(bx + bl * 0.6, by - 0.04, 0), 0.07 * hs, 0.045 * hs, 8), limb(o(bx + bl * 0.6, by - 0.04, 0), o(bx + bl, by - 0.2 * P.beakL, 0), 0.045 * hs, 0.01, 8)]), beakM));
    if (P.cheek) A.head.add(new THREE.Mesh(ell([0.12 * hs, 0.08 * hs, 0.14 * hs], o(0.95 + hx, 0.66 + hy, 0.29 * hs * HS[2]), 10), rump), new THREE.Mesh(ell([0.12 * hs, 0.08 * hs, 0.14 * hs], o(0.95 + hx, 0.66 + hy, -0.29 * hs * HS[2]), 10), rump));
    /* kaki: tiga jari ke depan, satu ke belakang. Pemangsa: kaki tebal, cakar hitam melengkung, paha berbulu (celana) */
    const lk = P.legL, lr = P.legR, clawM = new THREE.MeshStandardMaterial({ color: C(0.05, 0.05, 0.05), roughness: 0.3, transparent: true });
    const thighM = P.thigh ? new THREE.MeshStandardMaterial({ color: C(...P.thigh), roughness: 0.9, transparent: true }) : null;
    A.legs.forEach((g) => {
      const parts = [limb([0, -0.05, 0], [0.08, -0.38 * lk, 0], 0.07 * lr, 0.05 * lr), limb([0.08, -0.38 * lk, 0], [0, -0.76 * lk, 0], 0.035 * lr, 0.03 * lr)], fy = -0.78 * lk, ty = -0.81 * lk;
      for (const a of [-0.35, 0, 0.35]) parts.push(limb([0, fy, 0], [Math.cos(a) * 0.3 * lr, ty, Math.sin(a) * 0.3 * lr], 0.025 * lr, 0.018 * lr));
      parts.push(limb([0, fy, 0], [-0.24 * lr, ty, 0], 0.025 * lr, 0.018 * lr));
      g.add(new THREE.Mesh(merge(parts), legM));
      if (P.talon) g.add(new THREE.Mesh(merge([-0.35, 0, 0.35, Math.PI].map((a) => { const r0 = (a === Math.PI ? 0.24 : 0.3) * lr, x0 = Math.cos(a) * r0, z0 = Math.sin(a) * r0; return limb([x0, ty, z0], [x0 + Math.cos(a) * 0.1, ty - 0.06, z0 + Math.sin(a) * 0.1], 0.02 * lr, 0.004, 6); })), clawM));
      if (thighM) g.add(new THREE.Mesh(ell([0.14 * lr, 0.3 * lk, 0.13 * lr], [0.04, -0.2 * lk, 0], 12), thighM));
    });
    return mats.concat([beakM, legM, rump, clawM].concat(thighM ? [thighM] : []));
  },
  bones() {
    const wing = [];
    for (const s of [1, -1]) {
      const sh = wp(K, s, 0, 0), el = wp(K, s, -0.15, 0.6), wr = wp(K, s, 0.05, 1.25), tip = wp(K, s, -0.1, 2.15);
      wing.push(limb(sh, el, 0.05, 0.045), limb(el, wr, 0.035, 0.03), limb(el.map((v, i) => v + (i === 0 ? 0.04 : 0)), wr.map((v, i) => v + (i === 0 ? 0.04 : 0)), 0.02, 0.02), limb(wr, tip, 0.03, 0.015));
      wing.push(limb([0.55, 0.2, s * 0.15], sh, 0.035, 0.035), limb([0.55, -0.25, s * 0.1], sh, 0.04, 0.035));   /* tulang garpu dan korakoid */
    }
    const keel = merge([ell([0.55, 0.32, 0.04], [0.25, -0.5, 0], 16), ell([0.5, 0.06, 0.3], [0.25, -0.3, 0], 14)]);
    return quadSkeleton({
      skull: [[[0.33 * hs, 0.3 * hs, 0.28 * hs], [1.02 + hx, 0.74 + hy, 0], 16]], jaw: [[[1.25 + hx, 0.66 + hy, 0], [1.66 + hx, 0.66 + hy, 0], 0.07, 0.02]],
      spine: [[0.95 + hx, 0.6 + hy, 0], [0.75 + hx * 0.6, 0.4 + hy * 0.6, 0], [0.55, 0.32, 0], [0.1, 0.28, 0], [-0.4, 0.1, 0], [-0.8 * L, -0.18, 0]], nV: 22, vr: 0.05,
      ribs: { n: 5, x0: 0.45, dx: 0.14, cy: -0.02, hh: 0.4, hw: 0.4, t: 0.022 },
      pelvis: [[0.55, 0.12, 0.3], [-0.35, 0.05, 0], [0, 0, 0.4]],
      front: [], hind: [[[0.05, -0.3 * G, 0.2 * G], [0.13, -0.4 * G - 0.06 * P.legL, 0.2 * G], [0.12, -0.4 * G - 0.4 * P.legL, 0.2 * G], [0.05, K.groundY + 0.05, 0.2 * G]]], br: [0.05 * P.legR, 0.04 * P.legR, 0.03 * P.legR, 0.02 * P.legR],
      extra: [keel, ...wing, ell([0.08, 0.14, 0.1], [-0.9, -0.25, 0], 10)],
    });
  },
  organs(addO, organMat) {
    addO('otak', brainGeo([0.2 * hs, 0.16 * hs, 0.17 * hs], [[0.08, 0.08, 0.1], [-0.17, -0.05, 0]]), organMat([0.88, 0.68, 0.68], 0.5, 0.3), [1.0 + hx, 0.8 + hy, 0]);
    const HC = [0.5, -0.08, 0];
    const heart = addO('jantung', rel(merge([ell([0.16, 0.2, 0.15], HC, 20), limb([0.52, 0.1, 0], [0.62, 0.32, 0], 0.045, 0.04)]), HC), organMat([0.6, 0.06, 0.1], 0.3, 0.8), HC);
    const lungs = [1, -1].map((s) => { const c = [0.12, 0.25, s * 0.2]; return addO('paru', rel(ell([0.3, 0.1, 0.12], c, 16), c), organMat([0.9, 0.42, 0.48], 0.55, 0.2), c); });
    /* trakea, siring di percabangan, lalu dua bronkus */
    addO('paru', merge([tube([[1.45 + hx, 0.66 + hy, 0], [1.0 + hx, 0.55 + hy, 0], [0.75 + hx * 0.5, 0.42 + hy * 0.5, 0], [0.55, 0.3, 0]], 0.03, 20, 6), tube([[0.5, 0.28, 0], [0.3, 0.26, 0.12], [0.15, 0.25, 0.2]], 0.022, 10, 5), tube([[0.5, 0.28, 0], [0.3, 0.26, -0.12], [0.15, 0.25, -0.2]], 0.022, 10, 5)]), organMat([0.88, 0.85, 0.8], 0.4, 0.4));
    addO('siring', ell([0.07, 0.06, 0.08], [0.52, 0.28, 0], 12), organMat([0.95, 0.78, 0.4], 0.35, 0.6));
    const sacM = new THREE.MeshPhysicalMaterial({ color: C(0.85, 0.92, 1.0), roughness: 0.1, transparent: true, opacity: 0.4, clearcoat: 1, depthWrite: false });
    addO('kantong', merge([ell([0.12, 0.12, 0.12], [0.7, 0.3, 0], 12), ...[1, -1].flatMap((s) => [ell([0.22, 0.16, 0.14], [0.25, 0.0, s * 0.3], 12), ell([0.35, 0.2, 0.18], [-0.35, -0.05, s * 0.28], 14)])]), sacM);
    addO('dada', merge([1, -1].map((s) => ell([0.48, 0.24, 0.16], [0.3, -0.36, s * 0.17], 18, [0, 0, 0.3]))), organMat([0.5, 0.08, 0.08], 0.45, 0.5));
    addO('ampela', merge([tube([[1.0 + hx, 0.55 + hy, 0.05], [0.7 + hx * 0.5, 0.35 + hy * 0.5, 0.08], [0.45, 0.12, 0.1], [0.15, -0.05, 0.12]], 0.025, 20, 5), ell([0.14, 0.12, 0.11], [0.05, -0.15, 0.12], 14)]), organMat([0.6, 0.2, 0.15], 0.4, 0.6));
    addO('hati', merge([ell([0.2, 0.12, 0.12], [0.3, -0.12, 0.17], 14), ell([0.2, 0.12, 0.12], [0.3, -0.12, -0.17], 14)]), organMat([0.4, 0.1, 0.08], 0.35, 0.7));
    addO('usus', tube(GUT, 0.035, 50, 6), organMat([0.94, 0.7, 0.64], 0.45, 0.6));
    for (const s of [1, -1]) addO('ginjal', ell([0.22, 0.05, 0.07], [-0.4, 0.12, s * 0.11], 12), organMat([0.5, 0.14, 0.1], 0.35, 0.7));
    return { heart, lungs };
  },
  food: { main: [[1.6 + hx, 0.66 + hy, 0], [1.0 + hx, 0.55 + hy, 0.05], [0.7 + hx * 0.5, 0.35 + hy * 0.5, 0.08], [0.45, 0.12, 0.1], [0.05, -0.15, 0.12], ...GUT], n: 30 },
  flows: [{ pts: [[1.55 + hx, 0.66 + hy, 0], [1.0 + hx, 0.55 + hy, 0], [0.55, 0.3, 0], [-0.35, -0.05, 0.28], [0.12, 0.25, 0.2], [0.7, 0.3, 0.05], [1.0 + hx, 0.55 + hy, 0], [1.55 + hx, 0.66 + hy, 0]], color: new THREE.Color(0.5, 1.5, 2.6), n: 30, speed: 1.4, jit: 0.06 }],
  };
}

/* kutilang: kepala hitam, pipi pucat, tungging kuning */
export default makeBird({ id: 'burung' });
