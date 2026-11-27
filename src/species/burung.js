import * as THREE from 'three';
import { merge, C, setSH, ell, limb, tube, cone, rel, hairTexture, furMat, canvasTex, addEyes, quadSkeleton, brainGeo } from '../animal.js';
import { lerp } from '../util.js';

/* Spec BURUNG KUTILANG (Pycnonotus aurigaster), posisi hinggap. Model menghadap +x, tanah di y = -1.6.
   Sayap: parts.wings berengsel di bahu. Di dunia sayap terlipat saat hinggap dan mengepak saat terbang. */
const HEAD_P = [0.75, 0.45, 0], TAIL_P = [-0.85, -0.15, 0];
const LEGS = [[0.05, -0.4, 0.2], [0.05, -0.4, -0.2]];
const SH_P = (s) => [0.45, 0.35, s * 0.42];
const WR = 0.5;   /* sayap terangkat di adegan bedah */
const GUT = [[0.05, -0.25, 0.12], [-0.15, -0.35, -0.1], [-0.35, -0.25, 0.1], [-0.55, -0.3, -0.05], [-0.8, -0.32, 0]];

const tx = {};
const tex = (k, f) => tx[k] || (tx[k] = f());
const backTex = () => tex('b', () => hairTexture('#6e6558', (x, N, r) => {
  for (let j = 0; j < 16; j++) for (let i = 0; i < 14; i++) { const cx = i * N / 14 + (j % 2) * N / 28, cy = j * N / 16; x.fillStyle = r() < 0.4 ? 'rgba(40,34,28,0.35)' : 'rgba(150,140,125,0.25)'; x.beginPath(); x.ellipse(cx, cy, N / 30, N / 22, 0, 0, Math.PI); x.fill(); }
}, 81, [2, 2], 2600));
/* sayap: u = sepanjang lebar (kiri = tepi belakang), v = sepanjang bentang (atas = ujung) */
const wingTex = () => tex('w', () => {
  const t = canvasTex(256, (x, N) => {
    x.clearRect(0, 0, N, N);
    const lead = (v) => N * (0.97 - 0.12 * v * v), trail = (v) => N * (0.02 + 0.55 * Math.pow(v, 1.6));
    const g = x.createLinearGradient(N, 0, 0, 0); g.addColorStop(0, '#8a8072'); g.addColorStop(0.45, '#5e564c'); g.addColorStop(1, '#2e2a26');
    x.fillStyle = g; x.beginPath();
    for (let i = 0; i <= 30; i++) { const v = i / 30; x.lineTo(lead(v), N - v * N * 0.98); }
    for (let i = 30; i >= 0; i--) { const v = i / 30; x.lineTo(trail(v), N - v * N * 0.98); }
    x.fill();
    /* bulu terbang: sekunder di pangkal, primer di ujung */
    x.lineWidth = 2; x.strokeStyle = 'rgba(20,16,12,0.7)';
    for (let k = 0; k < 18; k++) { const v = 0.04 + k / 18 * 0.92, xl = trail(v), xr = lead(v) * 0.62 + xl * 0.38; x.beginPath(); x.moveTo(xr, N - v * N * 0.98); x.lineTo(xl, N - (v + (k > 9 ? 0.08 : 0.02)) * N * 0.98); x.stroke(); }
    /* bulu penutup (kovert) lebih pucat di dekat tepi depan */
    for (let k = 0; k < 40; k++) { const v = (k % 20) / 20 * 0.6, xx = lead(v) - 10 - (k >= 20 ? 22 : 0); x.fillStyle = 'rgba(170,160,145,0.35)'; x.beginPath(); x.ellipse(xx, N - v * N, 9, 6, 0, 0, Math.PI * 2); x.fill(); }
  });
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; t.repeat.set(1, 1); return t;
});
function wingGeo(s) {
  const p = new THREE.PlaneGeometry(1.5, 2.3, 6, 10); p.translate(-0.25, 1.15, 0);
  const pos = p.attributes.position; for (let i = 0; i < pos.count; i++) { const x = pos.getX(i), y = pos.getY(i); pos.setZ(i, -0.12 * Math.sin(Math.PI * y / 2.3) - 0.05 * x); }
  p.rotateX(Math.PI / 2); if (s < 0) p.scale(1, 1, -1); p.computeVertexNormals(); return p;
}
/* titik pada sayap (relatif bahu) setelah sayap diangkat WR, dalam koordinat model */
function wp(s, x, z) { const P = SH_P(s), a = -s * WR, zz = s * z; return [P[0] + x, P[1] - zz * Math.sin(a), P[2] + zz * Math.cos(a)]; }

export default {
  id: 'burung', dist: [9, 17], groundY: -1.22, worldScale: 0.1, hitR: 0.35, hitY: 0.15, muscleShrink: 0.86,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
  walk: { speed: 3.2, step: 6, swing: 0, radius: 7, keep: 1.0, fly: 1.7, perch: true, fold: 1.45, wingRest: 1.25, flapF: 22, graze: 0.5, tailA: 0.08, tailF: 3 },
  wingRest: WR, camTarget: [0, 0.1, 0], camYaw: 0.25, bg: ['#3a4a52', '#11181c'], pedR: 3.2, dotSize: 0.08,
  vitals: (a) => ({ bpm: Math.round(lerp(400, 900, a)), rr: Math.round(lerp(50, 140, a)) }),
  capText: (s) => 'Perkiraan kasar untuk burung kecil: jantung ' + Math.round(lerp(400, 900, s)) + ' detak per menit, napas ' + Math.round(lerp(50, 140, s)) + ' kali per menit. ' + (s > 0.6 ? 'Saat terbang, otot dada bekerja keras sehingga butuh oksigen sangat banyak.' : 'Saat hinggap, detak jantung jauh lebih lambat.') + ' Titik biru: udara mengalir satu arah lewat kantong udara dan paru-paru.',
  bodyParts(sh) {
    setSH(sh);
    const body = merge([ell([0.95, 0.55, 0.52], [0, 0, 0], 26, [0, 0, 0.35]), ell([0.45, 0.42, 0.42], [0.5, 0.2, 0], 18)]);
    const head = rel(merge([ell([0.42, 0.38, 0.36], [1.0, 0.72, 0], 22), ell([0.3, 0.3, 0.28], [0.7, 0.45, 0], 16)]), HEAD_P);
    const tail = rel(merge([ell([0.75, 0.05, 0.26], [-1.45, -0.55, 0], 16, [0, 0, 0.42]), ell([0.3, 0.12, 0.22], [-0.85, -0.2, 0], 12, [0, 0, 0.42])]), TAIL_P);
    const legs = LEGS.map(() => ell([0.2, 0.25, 0.15], [0, 0.05, 0], 12));
    const extra = [[ell([0.75, 0.4, 0.46], [0.1, -0.18, 0], 22, [0, 0, 0.35]), 'belly'], [ell([0.3, 0.16, 0.2], [-0.72, -0.4, 0], 12, [0, 0, 0.4]), 'vent']];
    const wings = sh === 1 ? [1, -1].map((s) => ({ geo: wingGeo(s), piv: SH_P(s), side: s })) : null;
    setSH(1);
    return { body, head, tail, legs, extra, wings };
  },
  skinMats() {
    const body = furMat(backTex(), [0.8, 0.78, 0.72], 0.8);
    const head = new THREE.MeshPhysicalMaterial({ color: C(0.08, 0.07, 0.07), roughness: 0.6, sheen: 0.3, sheenColor: new THREE.Color(0.12, 0.12, 0.14) });
    const belly = new THREE.MeshPhysicalMaterial({ color: C(0.86, 0.84, 0.8), roughness: 0.85, sheen: 1, sheenColor: new THREE.Color(1, 1, 1) });
    const vent = new THREE.MeshStandardMaterial({ color: C(0.98, 0.72, 0.15), roughness: 0.8 });
    const tail = new THREE.MeshStandardMaterial({ color: C(0.16, 0.14, 0.13), roughness: 0.75 });
    const wings = new THREE.MeshStandardMaterial({ map: wingTex(), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.8 });
    return { body, head, tail, legs: body, belly, vent, wings };
  },
  face(A, HP) {
    const mats = addEyes(A.head, HP, { p: [1.16, 0.8, 0.27], r: 0.085, scale: [1, 1, 0.8], iris: [0.25, 0.14, 0.08], pupil: 'round', side: true });
    const beakM = new THREE.MeshStandardMaterial({ color: C(0.1, 0.09, 0.08), roughness: 0.35, transparent: true });
    const legM = new THREE.MeshStandardMaterial({ color: C(0.18, 0.17, 0.17), roughness: 0.5, transparent: true });
    const rump = new THREE.MeshStandardMaterial({ color: C(0.62, 0.62, 0.6), roughness: 0.85, transparent: true });
    const o = (x, y, z) => [x - HP[0], y - HP[1], z - HP[2]];
    A.head.add(new THREE.Mesh(cone(0.08, 0.32, o(1.52, 0.68, 0), [0, 0, -Math.PI / 2 - 0.12], 10), beakM));
    A.head.add(new THREE.Mesh(ell([0.12, 0.08, 0.14], o(0.95, 0.66, 0.29), 10), rump), new THREE.Mesh(ell([0.12, 0.08, 0.14], o(0.95, 0.66, -0.29), 10), rump));
    /* kaki bertengger: tiga jari ke depan, satu ke belakang */
    A.legs.forEach((g) => {
      const parts = [limb([0, -0.05, 0], [0.08, -0.38, 0], 0.07, 0.05), limb([0.08, -0.38, 0], [0, -0.76, 0], 0.035, 0.03)];
      for (const a of [-0.35, 0, 0.35]) parts.push(limb([0, -0.78, 0], [Math.cos(a) * 0.3, -0.81, Math.sin(a) * 0.3], 0.025, 0.018));
      parts.push(limb([0, -0.78, 0], [-0.24, -0.81, 0], 0.025, 0.018));
      g.add(new THREE.Mesh(merge(parts), legM));
    });
    return mats.concat([beakM, legM, rump]);
  },
  bones() {
    const wing = [];
    for (const s of [1, -1]) {
      const sh = wp(s, 0, 0), el = wp(s, -0.15, 0.6), wr = wp(s, 0.05, 1.25), tip = wp(s, -0.1, 2.15);
      wing.push(limb(sh, el, 0.05, 0.045), limb(el, wr, 0.035, 0.03), limb(el.map((v, i) => v + (i === 0 ? 0.04 : 0)), wr.map((v, i) => v + (i === 0 ? 0.04 : 0)), 0.02, 0.02), limb(wr, tip, 0.03, 0.015));
      wing.push(limb([0.55, 0.2, s * 0.15], sh, 0.035, 0.035), limb([0.55, -0.25, s * 0.1], sh, 0.04, 0.035));   /* tulang garpu dan korakoid */
    }
    const keel = merge([ell([0.55, 0.32, 0.04], [0.25, -0.5, 0], 16), ell([0.5, 0.06, 0.3], [0.25, -0.3, 0], 14)]);
    return quadSkeleton({
      skull: [[[0.33, 0.3, 0.28], [1.02, 0.74, 0], 16]], jaw: [[[1.25, 0.66, 0], [1.66, 0.66, 0], 0.07, 0.02]],
      spine: [[0.95, 0.6, 0], [0.75, 0.4, 0], [0.55, 0.32, 0], [0.1, 0.28, 0], [-0.4, 0.1, 0], [-0.8, -0.18, 0]], nV: 22, vr: 0.05,
      ribs: { n: 5, x0: 0.45, dx: 0.14, cy: -0.02, hh: 0.4, hw: 0.4, t: 0.022 },
      pelvis: [[0.55, 0.12, 0.3], [-0.35, 0.05, 0], [0, 0, 0.4]],
      front: [], hind: [[[0.05, -0.3, 0.2], [0.13, -0.45, 0.2], [0.12, -0.8, 0.2], [0.05, -1.17, 0.2]]], br: [0.05, 0.04, 0.03, 0.02],
      extra: [keel, ...wing, ell([0.08, 0.14, 0.1], [-0.9, -0.25, 0], 10)],
    });
  },
  organs(addO, organMat) {
    addO('otak', brainGeo([0.2, 0.16, 0.17], [[0.08, 0.08, 0.1], [-0.17, -0.05, 0]]), organMat([0.88, 0.68, 0.68], 0.5, 0.3), [1.0, 0.8, 0]);
    const HC = [0.5, -0.08, 0];
    const heart = addO('jantung', rel(merge([ell([0.16, 0.2, 0.15], HC, 20), limb([0.52, 0.1, 0], [0.62, 0.32, 0], 0.045, 0.04)]), HC), organMat([0.6, 0.06, 0.1], 0.3, 0.8), HC);
    const lungs = [1, -1].map((s) => { const c = [0.12, 0.25, s * 0.2]; return addO('paru', rel(ell([0.3, 0.1, 0.12], c, 16), c), organMat([0.9, 0.42, 0.48], 0.55, 0.2), c); });
    /* trakea, siring di percabangan, lalu dua bronkus */
    addO('paru', merge([tube([[1.45, 0.66, 0], [1.0, 0.55, 0], [0.75, 0.42, 0], [0.55, 0.3, 0]], 0.03, 20, 6), tube([[0.5, 0.28, 0], [0.3, 0.26, 0.12], [0.15, 0.25, 0.2]], 0.022, 10, 5), tube([[0.5, 0.28, 0], [0.3, 0.26, -0.12], [0.15, 0.25, -0.2]], 0.022, 10, 5)]), organMat([0.88, 0.85, 0.8], 0.4, 0.4));
    addO('siring', ell([0.07, 0.06, 0.08], [0.52, 0.28, 0], 12), organMat([0.95, 0.78, 0.4], 0.35, 0.6));
    const sacM = new THREE.MeshPhysicalMaterial({ color: C(0.85, 0.92, 1.0), roughness: 0.1, transparent: true, opacity: 0.4, clearcoat: 1, depthWrite: false });
    addO('kantong', merge([ell([0.12, 0.12, 0.12], [0.7, 0.3, 0], 12), ...[1, -1].flatMap((s) => [ell([0.22, 0.16, 0.14], [0.25, 0.0, s * 0.3], 12), ell([0.35, 0.2, 0.18], [-0.35, -0.05, s * 0.28], 14)])]), sacM);
    addO('dada', merge([1, -1].map((s) => ell([0.48, 0.24, 0.16], [0.3, -0.36, s * 0.17], 18, [0, 0, 0.3]))), organMat([0.5, 0.08, 0.08], 0.45, 0.5));
    addO('ampela', merge([tube([[1.0, 0.55, 0.05], [0.7, 0.35, 0.08], [0.45, 0.12, 0.1], [0.15, -0.05, 0.12]], 0.025, 20, 5), ell([0.14, 0.12, 0.11], [0.05, -0.15, 0.12], 14)]), organMat([0.6, 0.2, 0.15], 0.4, 0.6));
    addO('hati', merge([ell([0.2, 0.12, 0.12], [0.3, -0.12, 0.17], 14), ell([0.2, 0.12, 0.12], [0.3, -0.12, -0.17], 14)]), organMat([0.4, 0.1, 0.08], 0.35, 0.7));
    addO('usus', tube(GUT, 0.035, 50, 6), organMat([0.94, 0.7, 0.64], 0.45, 0.6));
    for (const s of [1, -1]) addO('ginjal', ell([0.22, 0.05, 0.07], [-0.4, 0.12, s * 0.11], 12), organMat([0.5, 0.14, 0.1], 0.35, 0.7));
    return { heart, lungs };
  },
  food: { main: [[1.6, 0.66, 0], [1.0, 0.55, 0.05], [0.7, 0.35, 0.08], [0.45, 0.12, 0.1], [0.05, -0.15, 0.12], ...GUT], n: 30 },
  flows: [{ pts: [[1.55, 0.66, 0], [1.0, 0.55, 0], [0.55, 0.3, 0], [-0.35, -0.05, 0.28], [0.12, 0.25, 0.2], [0.7, 0.3, 0.05], [1.0, 0.55, 0], [1.55, 0.66, 0]], color: new THREE.Color(0.5, 1.5, 2.6), n: 30, speed: 1.4, jit: 0.06 }],
};
