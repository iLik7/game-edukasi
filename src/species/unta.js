import * as THREE from 'three';
import { merge, C, setSH, ell, limb, tube, cone, rel, hairTexture, furMat, addEyes, quadSkeleton, brainGeo } from '../animal.js';
import { lerp } from '../util.js';

/* Spec UNTA ARAB (Camelus dromedarius), satu punuk. Model menghadap +x, tanah di y = -3.0. Satuan ~0,38 m. */
const HEAD_P = [1.9, 0.75, 0], TAIL_P = [-2.2, 0.6, 0];
const LEGS = [[1.35, -0.35, 0.45], [1.35, -0.35, -0.45], [-1.55, -0.25, 0.45], [-1.55, -0.25, -0.45]];
const NECK = [[3.85, 1.95, 0], [3.2, 1.9, 0], [2.7, 1.1, 0], [2.2, 0.6, 0], [1.6, 0.6, 0]];
const GUT = [[0.0, -0.45, -0.3], [-0.4, -0.55, 0.3], [-0.8, -0.45, -0.3], [-1.1, -0.5, 0.25], [-1.4, -0.3, -0.1], [-1.8, 0.0, 0], [-2.15, 0.35, 0]];

let tb = null;
const sandy = () => tb || (tb = hairTexture('#9c7444', (x, N, r) => { for (let i = 0; i < 6; i++) { x.fillStyle = 'rgba(150,110,60,0.25)'; x.beginPath(); x.ellipse(r() * N, r() * N, 40 + r() * 40, 30, r() * 3, 0, Math.PI * 2); x.fill(); } }, 51, [2, 2], 5000));

export default {
  id: 'unta', dist: [14, 27], groundY: -3.0, worldScale: 0.38, hitR: 1.1, hitY: 0.8,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
  walk: { speed: 0.9, step: 3.2, swing: 0.4, radius: 7, keep: 3, graze: 0.4, tailA: 0.3, tailF: 2 },
  camTarget: [0.5, 0, 0], camYaw: 0.9, bg: ['#7a5a34', '#22180c'], pedR: 6.2, dotSize: 0.16,
  vitals: (a) => ({ bpm: Math.round(lerp(40, 90, a)), rr: Math.round(lerp(8, 25, a)) }),
  capText: (s) => 'Suhu tubuh unta dibiarkan naik turun sekitar 34 sampai 41 °C dalam sehari, jadi unta tidak perlu banyak berkeringat untuk mendinginkan badan. ' + (s > 0.6 ? 'Saat berjalan jauh di siang terik, napas dan detak jantung naik.' : 'Saat beristirahat, napasnya lambat dan hemat air.'),
  bodyParts(sh) {
    setSH(sh);
    const body = merge([ell([2.2, 0.95, 0.85], [0, 0.35, 0], 28), ell([1.1, 0.95, 0.8], [1.2, 0.3, 0]), ell([0.95, 0.9, 0.8], [-1.5, 0.4, 0]), ell([1.0, 0.95, 0.72], [-0.15, 1.35, 0], 22)]);
    const head = rel(merge([tube(NECK.slice().reverse().map((p) => p), 0.34, 24, 10), ell([0.62, 0.32, 0.3], [4.15, 1.95, 0], 18), ell([0.28, 0.25, 0.24], [4.65, 1.85, 0], 12), ...[1, -1].map((s) => ell([0.08, 0.16, 0.06], [3.75, 2.25, s * 0.25], 8))]), HEAD_P);
    const tail = rel(merge([tube([[-2.2, 0.6, 0], [-2.4, 0.0, 0], [-2.45, -0.7, 0]], 0.07, 12, 6), ell([0.09, 0.25, 0.09], [-2.45, -0.85, 0], 8)]), TAIL_P);
    const legs = LEGS.map((p, i) => i < 2
      ? merge([limb([0, 0, 0], [0.05, -1.2, 0], 0.32, 0.16), limb([0.05, -1.2, 0], [0.05, -2.55, 0], 0.13, 0.11), ell([0.35, 0.12, 0.3], [0.12, -2.6, 0], 12)])
      : merge([ell([0.5, 0.8, 0.38], [0.05, -0.4, 0]), limb([0, -0.8, 0], [-0.25, -1.55, 0], 0.22, 0.13), limb([-0.25, -1.55, 0], [-0.15, -2.7, 0], 0.12, 0.1), ell([0.35, 0.12, 0.3], [-0.08, -2.72, 0], 12)]));
    setSH(1);
    return { body, head, tail, legs };
  },
  skinMats() { const m = furMat(sandy(), [0.85, 0.72, 0.55], 0.95); return { body: m, head: m, tail: m, legs: m }; },
  face(A, HP) {
    const mats = addEyes(A.head, HP, { p: [4.05, 2.12, 0.27], r: 0.12, scale: [1, 0.9, 0.8], iris: [0.25, 0.15, 0.08], pupil: 'bar', side: true });
    const lashM = new THREE.MeshStandardMaterial({ color: C(0.15, 0.1, 0.06), roughness: 0.8, transparent: true });
    for (const s of [1, -1]) A.head.add(new THREE.Mesh(merge([ell([0.12, 0.025, 0.03], [4.07 - HP[0], 2.24 - HP[1], s * 0.33], 6), ell([0.03, 0.02, 0.05], [4.85 - HP[0], 1.92 - HP[1], s * 0.1], 6)]), lashM));
    return mats.concat([lashM]);
  },
  bones() {
    return quadSkeleton({
      skull: [[[0.6, 0.3, 0.27], [4.15, 1.95, 0], 18]], jaw: [[[4.0, 1.75, 0], [4.8, 1.75, 0], 0.15, 0.1]],
      spine: [...NECK.slice(0, 4), [1.5, 1.15, 0], [0, 1.2, 0], [-1.5, 1.1, 0], [-2.2, 0.6, 0]], nV: 30, vr: 0.12,
      tail: [[-2.2, 0.6, 0], [-2.4, 0.0, 0], [-2.45, -0.7, 0]], nT: 8, tr: 0.06,
      ribs: { n: 12, x0: 1.6, dx: 0.2, cy: 0.25, hh: 0.8, hw: 0.75, t: 0.05 }, sternum: [[1.6, -0.55, 0], [-0.4, -0.6, 0], 0.07],
      scap: [[0.1, 0.5, 0.25], [1.45, 0.7, 0.45]], pelvis: [[0.3, 0.45, 0.55], [-1.6, 0.8, 0], [0, 0, 0.25]],
      front: [[[1.35, -0.35, 0.45], [1.4, -1.55, 0.45], [1.4, -2.55, 0.45], [1.5, -2.95, 0.45]]],
      hind: [[[-1.55, 0.4, 0.45], [-1.4, -0.9, 0.45], [-1.8, -1.85, 0.45], [-1.7, -2.95, 0.45]]], br: [0.12, 0.1, 0.08, 0.06],
    });
  },
  organs(addO, organMat) {
    addO('otak', brainGeo([0.24, 0.17, 0.18], [[0.09, 0.08, 0.09], [-0.2, -0.05, 0]]), organMat([0.88, 0.7, 0.68], 0.5, 0.3), [4.0, 2.05, 0]);
    addO('punuk', ell([0.85, 0.75, 0.6], [-0.15, 1.35, 0], 22), organMat([0.98, 0.9, 0.62], 0.6, 0.2));
    const HC = [1.2, -0.25, 0];
    const heart = addO('jantung', rel(merge([ell([0.32, 0.38, 0.3], HC, 18), limb([1.25, 0.1, 0], [1.4, 0.75, 0], 0.08, 0.07)]), HC), organMat([0.6, 0.06, 0.1], 0.3, 0.8), HC);
    const lungs = [1, -1].map((s) => { const c = [0.9, 0.2, s * 0.42]; return addO('paru', rel(ell([0.85, 0.55, 0.32], c, 18), c), organMat([0.9, 0.5, 0.55], 0.5, 0.3), c); });
    addO('lambung', merge([ell([0.85, 0.6, 0.55], [-0.35, -0.15, -0.3], 18), ell([0.32, 0.3, 0.3], [0.45, -0.35, -0.35], 12), limb([0.55, -0.45, 0.05], [-0.2, -0.55, 0.35], 0.2, 0.16)]), organMat([0.9, 0.65, 0.55], 0.4, 0.5));
    addO('hati', ell([0.6, 0.35, 0.4], [0.55, -0.1, 0.45], 16), organMat([0.42, 0.12, 0.1], 0.35, 0.7));
    addO('usus', tube(GUT, 0.09, 60, 6), organMat([0.94, 0.72, 0.64], 0.45, 0.6));
    for (const s of [1, -1]) addO('ginjal', ell([0.25, 0.15, 0.15], [-0.9, 0.6, s * 0.3], 12), organMat([0.5, 0.14, 0.1], 0.35, 0.7));
    return { heart, lungs };
  },
  food: { main: [[4.85, 1.85, 0], ...NECK.slice(0, 4), [1.2, 0.3, 0], [0.45, -0.35, -0.35], [-0.35, -0.15, -0.3], ...GUT], n: 34 },
};
