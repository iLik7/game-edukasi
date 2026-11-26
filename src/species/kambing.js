import * as THREE from 'three';
import { merge, C, setSH, ell, limb, tube, cone, rel, hairTexture, furMat, addEyes, quadSkeleton } from '../animal.js';
import { ruminantOrgans, ruminantFood } from './ruminant.js';
import { lerp } from '../util.js';

/* Spec KAMBING Peranakan Etawa (PE): telinga panjang menggantung, hidung melengkung, berjenggot. Satuan ~0,22 m, tanah di y = -2.0. */
const HEAD_P = [1.75, 0.55, 0], TAIL_P = [-2.35, 0.85, 0];
const LEGS = [[1.4, -0.25, 0.48], [1.4, -0.25, -0.48], [-1.5, 0.0, 0.52], [-1.5, 0.0, -0.52]];
const NECK = [[3.66, 1.18, 0], [3.2, 1.45, 0], [2.6, 1.3, 0], [2.1, 0.85, 0]];
const X = { sx: 0.72, sy: 0.7, sz: 0.73, oy: 0.04, k: 0.72 };

let texB = null, texH = null;
const cream = () => texB || (texB = hairTexture('#ece3d2', (x, N, r) => { for (let i = 0; i < 4; i++) { x.fillStyle = 'rgba(150,110,70,0.25)'; x.beginPath(); x.ellipse(r() * N, r() * N, 30 + r() * 30, 20 + r() * 20, r() * 3, 0, Math.PI * 2); x.fill(); } }, 41, [2, 2], 6500));
const brown = () => texH || (texH = hairTexture('#4a3020', (x, N, r) => { for (let i = 0; i < 6; i++) { x.fillStyle = 'rgba(20,12,8,0.4)'; x.beginPath(); x.ellipse(r() * N, r() * N, 40, 25, r() * 3, 0, Math.PI * 2); x.fill(); } }, 42, [2, 2], 6000));

export default {
  id: 'kambing', groundY: -2.0, worldScale: 0.24, hitR: 0.75, hitY: 0.5,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
  walk: { speed: 0.8, step: 4.6, swing: 0.42, radius: 5, keep: 2.0, graze: 1.0, tailA: 0.35, tailF: 3 },
  camTarget: [0.4, 0.3, 0], camYaw: Math.PI, bg: ['#40382a', '#1c1810'], pedR: 5.2, dotSize: 0.15,
  vitals: (a) => ({ bpm: Math.round(lerp(70, 120, a)), rr: Math.round(lerp(15, 40, a)) }),
  bodyParts(sh) {
    setSH(sh);
    const body = merge([ell([2.2, 1.0, 0.82], [0, 0.35, 0], 28), ell([1.1, 1.05, 0.85], [1.25, 0.25, 0]), ell([1.0, 1.0, 0.86], [-1.45, 0.4, 0]), ell([1.8, 0.9, 0.92], [0, 0.05, 0]),
      ell([0.42, 0.32, 0.4], [-1.05, -0.6, 0]), limb([-1.05, -0.8, 0.17], [-1.0, -1.05, 0.2], 0.07, 0.05), limb([-1.05, -0.8, -0.17], [-1.0, -1.05, -0.2], 0.07, 0.05)]);
    const ears = [1, -1].map((s) => ell([0.13, 0.58, 0.07], [2.88, 1.32, s * 0.5], 16, [s * 0.35, 0, 0.2]));
    const head = rel(merge([limb([1.75, 0.55, 0], [2.65, 1.5, 0], 0.62, 0.4), ell([0.5, 0.45, 0.4], [2.95, 1.75, 0]), limb([3.05, 1.7, 0], [3.62, 1.2, 0], 0.32, 0.22), ell([0.25, 0.18, 0.24], [3.25, 1.62, 0]), ell([0.2, 0.18, 0.22], [3.68, 1.12, 0]),
      cone(0.13, 0.55, [3.42, 0.72, 0], [0, 0, Math.PI]), ...ears]), HEAD_P);
    const tail = rel(merge([tube([[-2.35, 0.85, 0], [-2.6, 1.1, 0], [-2.7, 1.35, 0]], 0.09, 12, 6), ell([0.1, 0.16, 0.1], [-2.72, 1.42, 0], 8)]), TAIL_P);
    const legs = LEGS.map((p, i) => i < 2
      ? merge([limb([0, 0, 0], [0.05, -0.75, 0], 0.3, 0.15), limb([0.05, -0.75, 0], [0.05, -1.6, 0], 0.11, 0.09), ell([0.12, 0.11, 0.12], [0.05, -1.55, 0], 10)])
      : merge([ell([0.5, 0.75, 0.4], [0.02, -0.35, 0]), limb([0, -0.7, 0], [-0.3, -1.2, 0], 0.2, 0.12), limb([-0.3, -1.2, 0], [-0.2, -1.85, 0], 0.1, 0.09), ell([0.12, 0.11, 0.12], [-0.2, -1.8, 0], 10)]));
    setSH(1);
    return { body, head, tail, legs };
  },
  skinMats() { return { body: furMat(cream(), [1, 0.95, 0.85], 0.95), head: furMat(brown(), [0.9, 0.7, 0.5], 0.9), tail: furMat(cream()), legs: furMat(cream()) }; },
  face(A, HP) {
    const mats = addEyes(A.head, HP, { p: [3.04, 1.86, 0.35], r: 0.13, scale: [1, 1, 0.8], iris: [0.85, 0.62, 0.15], pupil: 'bar', side: true });
    const hornM = new THREE.MeshStandardMaterial({ color: C(0.32, 0.27, 0.22), roughness: 0.5, transparent: true });
    const hoofM = new THREE.MeshStandardMaterial({ color: C(0.15, 0.12, 0.1), roughness: 0.6, transparent: true });
    const noseM = new THREE.MeshStandardMaterial({ color: C(0.2, 0.15, 0.13), roughness: 0.4, transparent: true });
    for (const s of [1, -1]) A.head.add(new THREE.Mesh(merge([tube([[2.85 - HP[0], 2.05 - HP[1], s * 0.15], [2.65 - HP[0], 2.5 - HP[1], s * 0.22], [2.3 - HP[0], 2.62 - HP[1], s * 0.3], [2.1 - HP[0], 2.45 - HP[1], s * 0.33]], 0.07, 16, 8), ell([0.075, 0.075, 0.075], [2.85 - HP[0], 2.05 - HP[1], s * 0.15], 8)]), hornM));
    A.head.add(new THREE.Mesh(ell([0.06, 0.12, 0.17], [3.86 - HP[0], 1.13 - HP[1], 0], 10), noseM));
    A.legs.forEach((g, i) => { const y = i < 2 ? -1.6 : -1.85, x = i < 2 ? 0.05 : -0.2; for (const z of [0.05, -0.05]) { const h = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.15, 8), hoofM); h.position.set(x + 0.02, y - 0.08, z); g.add(h); } });
    return mats.concat([hornM, hoofM, noseM]);
  },
  bones() {
    return quadSkeleton({
      skull: [[[0.45, 0.4, 0.35], [2.95, 1.75, 0], 18]], jaw: [[[3.0, 1.65, 0], [3.62, 1.15, 0], 0.24, 0.15], [[2.85, 1.35, 0], [3.55, 1.0, 0], 0.1, 0.08]],
      spine: [[2.8, 1.6, 0], [2.2, 1.1, 0], [1.5, 1.15, 0], [0, 1.15, 0], [-1.5, 1.15, 0], [-2.35, 0.85, 0]], nV: 28, vr: 0.11,
      tail: [[-2.35, 0.85, 0], [-2.6, 1.1, 0], [-2.7, 1.35, 0]], nT: 6, tr: 0.07,
      ribs: { n: 13, x0: 1.75, dx: 0.16, cy: 0.25, hh: 0.82, hw: 0.78, t: 0.045 }, sternum: [[1.75, -0.55, 0], [0.2, -0.6, 0], 0.06],
      scap: [[0.1, 0.55, 0.25], [1.55, 0.75, 0.45]], pelvis: [[0.3, 0.45, 0.6], [-1.5, 0.85, 0], [0, 0, 0.25]],
      front: [[[1.4, -0.25, 0.48], [1.5, -0.95, 0.47], [1.45, -1.5, 0.46], [1.5, -1.95, 0.46]]],
      hind: [[[-1.5, 0.45, 0.52], [-1.3, -0.4, 0.5], [-1.8, -1.25, 0.48], [-1.7, -1.95, 0.47]]], br: [0.11, 0.09, 0.07, 0.055],
    });
  },
  organs(addO, organMat) {
    return ruminantOrgans(addO, organMat, X, { brain: { r: [0.26, 0.2, 0.21], cb: [[0.1, 0.09, 0.1], [-0.22, -0.06, 0]], p: [2.92, 1.82, 0] }, neck: NECK, lobedKidney: false, teats: [[0, 0.24], [0, -0.24]] });
  },
  food: ruminantFood(X, NECK),
};
