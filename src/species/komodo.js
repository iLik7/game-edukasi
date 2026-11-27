import * as THREE from 'three';
import { merge, C, setSH, ell, limb, tube, rel, hairTexture, addEyes, quadSkeleton, brainGeo } from '../animal.js';
import { lerp } from '../util.js';

/* Spec KOMODO (Varanus komodoensis): badan panjang rendah, kaki merangkak ke samping, ekor panjang berotot, kepala pipih, lidah bercabang.
   Satuan ~0,1 m, tanah di y = -0.95. */
const HEAD_P = [2.4, 0.15, 0], TAIL_P = [-2.2, 0.0, 0];
const LEGS = [[1.4, -0.25, 0.55], [1.4, -0.25, -0.55], [-1.5, -0.25, 0.6], [-1.5, -0.25, -0.6]];
const TAIL = [[-2.2, 0.0, 0], [-3.4, -0.25, 0.1], [-4.6, -0.55, -0.1], [-5.6, -0.75, 0.15], [-6.3, -0.85, 0]];
const GUT = [[0.6, -0.3, -0.2], [0.2, -0.4, 0.2], [-0.3, -0.35, -0.2], [-0.8, -0.4, 0.15], [-1.3, -0.3, 0], [-2.1, -0.15, 0]];

let tex = null;
const scales = () => tex || (tex = hairTexture('#5a5440', (x, N, r) => {
  /* sisik kecil berbutir (di bawahnya ada keping tulang/osteoderm) */
  for (let j = 0; j < 40; j++) for (let i = 0; i < 40; i++) { x.fillStyle = r() < 0.5 ? 'rgba(40,36,24,0.35)' : 'rgba(120,110,80,0.25)'; x.beginPath(); x.ellipse(i * N / 40 + (j % 2) * N / 80, j * N / 40, N / 95, N / 110, 0, 0, Math.PI * 2); x.fill(); }
  for (let i = 0; i < 25; i++) { x.fillStyle = 'rgba(140,100,60,0.18)'; x.beginPath(); x.ellipse(r() * N, r() * N, 20 + r() * 30, 12, r() * 3, 0, Math.PI * 2); x.fill(); }
}, 91, [3, 3], 0));

/* kaki merangkak: lengan atas ke samping, lengan bawah turun, telapak berjari lima bercakar */
const leg = (s, front) => { const k = front ? 1 : 1.15, el = [front ? 0.2 : -0.1, -0.05, s * 0.55 * k], ft = [front ? 0.35 : -0.05, -0.68, s * 0.65 * k];
  return merge([limb([0, 0, 0], el, 0.22 * k, 0.16 * k), limb(el, ft, 0.15 * k, 0.11 * k), ell([0.2, 0.06, 0.16], [ft[0] + 0.1, -0.68, ft[2]], 10),
    ...[-0.6, -0.3, 0, 0.3, 0.6].map((a) => limb([ft[0] + 0.1, -0.68, ft[2]], [ft[0] + 0.1 + Math.cos(a) * 0.3, -0.7, ft[2] + Math.sin(a) * 0.25 * s], 0.035, 0.012, 5))]); };

export default {
  id: 'komodo', dist: [10, 20], groundY: -0.95, worldScale: 0.3, hitR: 0.9, hitY: 0.2, muscleShrink: 0.86,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
  walk: { speed: 0.6, step: 3.2, swing: 0.5, radius: 16, keep: 2, tailA: 0.25, tailF: 1.6 },
  camTarget: [-0.6, -0.2, 0], camYaw: 0.5, bg: ['#4a3e2a', '#120e08'], pedR: 5.2, dotSize: 0.12,
  vitals: (a) => ({ bpm: Math.round(lerp(25, 60, a)), rr: Math.round(lerp(4, 15, a)) }),
  capText: (s) => 'Perkiraan untuk komodo: jantung ' + Math.round(lerp(25, 60, s)) + ' detak per menit. Komodo berdarah dingin (ektoterm): ia berjemur di pagi hari untuk menghangatkan tubuh sebelum aktif. ' + (s > 0.6 ? 'Saat berlari, komodo bisa mencapai sekitar 20 km per jam dalam jarak pendek.' : 'Saat diam, kebutuhan energinya sangat kecil, jadi komodo bisa tidak makan berminggu-minggu setelah makan besar.'),
  bodyParts(sh) {
    setSH(sh);
    const body = merge([ell([2.4, 0.55, 0.75], [0, 0, 0], 28), ell([1.1, 0.48, 0.62], [1.6, 0.05, 0], 20), ell([1.0, 0.45, 0.65], [-1.6, -0.05, 0], 20), limb([1.9, 0.08, 0], [2.4, 0.15, 0], 0.48, 0.4)]);
    const head = rel(merge([ell([0.55, 0.3, 0.38], [2.75, 0.2, 0], 20), ell([0.55, 0.22, 0.3], [3.25, 0.12, 0], 18), ell([0.3, 0.17, 0.24], [3.65, 0.08, 0], 14)]), HEAD_P);
    const tail = rel(merge([tube(TAIL, 0.4, 40, 12), ell([0.42, 0.38, 0.42], TAIL[0], 12)]), TAIL_P);
    /* ekor mengecil ke ujung: skala radial menurut jarak */
    { const p = tail.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i) + TAIL_P[0], t = Math.min(1, Math.max(0, (-x - 2.2) / 4.2)), k = 1 - 0.82 * t; const cy = lerp(0, -0.85, t), y = p.getY(i) + TAIL_P[1]; p.setY(i, cy + (y - cy) * k - TAIL_P[1]); p.setZ(i, p.getZ(i) * k); } tail.computeVertexNormals(); }
    const legs = LEGS.map((p, i) => leg(Math.sign(p[2]), i < 2));
    setSH(1);
    return { body, head, tail, legs };
  },
  skinMats() { return new THREE.MeshStandardMaterial({ map: scales(), bumpMap: scales(), bumpScale: 0.8, roughness: 0.85 }); },
  face(A, HP) {
    const mats = addEyes(A.head, HP, { p: [3.1, 0.32, 0.3], r: 0.08, scale: [1, 1, 0.8], iris: [0.6, 0.45, 0.2], pupil: 'round', side: true });
    const tongueM = new THREE.MeshStandardMaterial({ color: C(0.95, 0.75, 0.2), roughness: 0.4, transparent: true });
    const o = (x, y, z) => [x - HP[0], y - HP[1], z - HP[2]];
    /* lidah kuning bercabang, sesekali dijulurkan */
    const tg = new THREE.Mesh(merge([limb(o(3.7, 0.02, 0), o(4.3, 0.0, 0), 0.04, 0.03, 6), limb(o(4.3, 0, 0), o(4.6, 0.0, 0.08), 0.025, 0.008, 5), limb(o(4.3, 0, 0), o(4.6, 0.0, -0.08), 0.025, 0.008, 5)]), tongueM);
    A.head.add(tg); A.head.userData.tongue = tg;
    return mats.concat([tongueM]);
  },
  bones() {
    return quadSkeleton({
      skull: [[[0.5, 0.2, 0.3], [3.0, 0.2, 0], 18]], jaw: [[[2.7, 0.0, 0.25], [3.85, 0.0, 0.08], 0.06, 0.04], [[2.7, 0.0, -0.25], [3.85, 0.0, -0.08], 0.06, 0.04]],
      spine: [[2.5, 0.25, 0], [1.6, 0.4, 0], [0, 0.42, 0], [-1.6, 0.35, 0], [-2.2, 0.2, 0]], nV: 30, vr: 0.1,
      tail: TAIL.map((p, i) => [p[0], p[1] + 0.2 * (1 - i / 4), p[2]]), nT: 28, tr: 0.11,
      ribs: { n: 16, x0: 1.6, dx: 0.19, cy: -0.05, hh: 0.45, hw: 0.62 },
      scap: [[0.1, 0.3, 0.3], [1.5, 0.1, 0.45]], pelvis: [[0.3, 0.3, 0.45], [-1.5, 0.15, 0], [0, 0, 0.2]],
      front: [[[1.4, -0.25, 0.55], [1.6, -0.3, 1.1], [1.75, -0.93, 1.2], [1.95, -0.95, 1.25]]],
      hind: [[[-1.5, -0.25, 0.6], [-1.6, -0.3, 1.25], [-1.55, -0.93, 1.35], [-1.35, -0.95, 1.4]]], br: [0.09, 0.08, 0.06, 0.04],
    });
  },
  organs(addO, organMat) {
    addO('otak', brainGeo([0.18, 0.1, 0.12], [[0.06, 0.05, 0.06], [-0.15, -0.02, 0]]), organMat([0.88, 0.68, 0.66], 0.5, 0.3), [2.85, 0.25, 0]);
    /* organ Jacobson di langit-langit mulut: menerima bau yang dibawa ujung lidah */
    addO('lidah', merge([limb([3.0, -0.02, 0], [4.3, -0.02, 0], 0.07, 0.04, 8), limb([4.3, -0.02, 0], [4.6, -0.02, 0.1], 0.03, 0.01, 5), limb([4.3, -0.02, 0], [4.6, -0.02, -0.1], 0.03, 0.01, 5), ell([0.08, 0.04, 0.06], [3.45, 0.1, 0.06], 8), ell([0.08, 0.04, 0.06], [3.45, 0.1, -0.06], 8)]), organMat([0.95, 0.75, 0.25], 0.4, 0.5));
    /* kelenjar bisa di rahang bawah */
    addO('bisa', merge([1, -1].map((s) => ell([0.35, 0.07, 0.07], [3.25, -0.06, s * 0.2], 10))), organMat([0.6, 0.75, 0.4], 0.35, 0.6));
    const HC = [1.4, -0.15, 0];
    const heart = addO('jantung', rel(merge([ell([0.26, 0.28, 0.24], HC, 18), ell([0.18, 0.16, 0.16], [1.6, 0.0, 0.12], 12), ell([0.18, 0.16, 0.16], [1.6, 0.0, -0.12], 12)]), HC), organMat([0.6, 0.06, 0.1], 0.3, 0.8), HC);
    const lungs = [1, -1].map((s) => { const c = [0.7, 0.15, s * 0.38]; return addO('paru', rel(ell([0.9, 0.24, 0.26], c, 18), c), organMat([0.9, 0.5, 0.55], 0.45, 0.35), c); });
    addO('paru', tube([[2.6, 0.05, 0], [2.0, 0.08, 0], [1.6, 0.12, 0]], 0.06, 12, 6), organMat([0.88, 0.85, 0.8], 0.4, 0.4));
    addO('hati', merge([ell([0.6, 0.2, 0.35], [0.7, -0.3, 0.18], 16), ell([0.55, 0.18, 0.3], [0.7, -0.3, -0.2], 16)]), organMat([0.4, 0.12, 0.1], 0.35, 0.7));
    addO('lambung', merge([ell([0.7, 0.22, 0.28], [0.0, -0.25, -0.15], 18), tube([[2.6, -0.05, 0], [1.9, -0.1, -0.1], [0.7, -0.2, -0.15]], 0.09, 16, 8)]), organMat([0.9, 0.6, 0.55], 0.4, 0.5));
    addO('usus', tube(GUT, 0.08, 70, 6), organMat([0.94, 0.7, 0.64], 0.45, 0.6));
    for (const s of [1, -1]) addO('ginjal', ell([0.3, 0.07, 0.1], [-1.5, 0.15, s * 0.2], 12), organMat([0.5, 0.14, 0.1], 0.35, 0.7));
    return { heart, lungs };
  },
  food: { main: [[4.0, 0.0, 0], [2.6, -0.05, 0], [1.9, -0.1, -0.1], [0.7, -0.2, -0.15], [0.0, -0.25, -0.15], ...GUT], n: 34 },
};
