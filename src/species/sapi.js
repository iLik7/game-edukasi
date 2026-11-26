import * as THREE from 'three';
import { merge, C, setSH, ell, limb, tube, cone, rel, hairTexture, furMat, addEyes, quadSkeleton } from '../animal.js';
import { ruminantOrgans, ruminantFood } from './ruminant.js';
import { lerp } from '../util.js';

/* Spec SAPI PERAH Friesian Holstein. Satuan model ~0,42 m, tanah di y = -2.45. */
const HEAD_P = [2.2, 0.65, 0], TAIL_P = [-3.15, 1.1, 0];
const LEGS = [[1.85, -0.35, 0.62], [1.85, -0.35, -0.62], [-2.0, 0.05, 0.68], [-2.0, 0.05, -0.68]];
const NECK = [[4.95, 0.6, 0], [4.3, 0.9, 0], [3.4, 1.0, 0], [2.7, 0.85, 0]];
const X = { sx: 1, sy: 1, sz: 1, k: 1 };

let tex = null;
function holstein() {
  return tex || (tex = hairTexture('#f1ede4', (x, N, r) => {
    x.fillStyle = '#141210';
    for (let b = 0; b < 7; b++) { const cx = r() * N, cy = r() * N, R = 22 + r() * 34;
      for (let i = 0; i < 14; i++) { const a = r() * Math.PI * 2, d = r() * R * 0.8; x.beginPath(); x.ellipse(cx + Math.cos(a) * d, cy + Math.sin(a) * d, R * (0.4 + r() * 0.5), R * (0.3 + r() * 0.4), r() * 3, 0, Math.PI * 2); x.fill();
        for (const ox of [-N, 0, N]) for (const oy of [-N, 0, N]) if (ox || oy) { x.beginPath(); x.ellipse(cx + Math.cos(a) * d + ox, cy + Math.sin(a) * d + oy, R * 0.5, R * 0.35, 0, 0, Math.PI * 2); x.fill(); } } }
  }, 31, [1.5, 1.5], 4000));
}

export default {
  id: 'sapi', groundY: -2.45, worldScale: 0.42, hitR: 1.4, hitY: 0.9, muscleShrink: 0.86,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
  walk: { speed: 0.7, step: 3.4, swing: 0.32, radius: 6, keep: 2.6, graze: 1.15, tailA: 0.15, tailF: 0.9 },
  camTarget: [0.9, -0.1, 0], camYaw: Math.PI, bg: ['#3a4a2e', '#18210f'], pedR: 6.2, dotSize: 0.2,
  vitals: (a) => ({ bpm: Math.round(lerp(48, 96, a)), rr: Math.round(lerp(26, 60, a)) }),
  bodyParts(sh) {
    setSH(sh);
    const teats = [];
    for (const dx of [0.22, -0.22]) for (const s of [1, -1]) teats.push(limb([-1.4 + dx, -1.3, s * 0.24], [-1.4 + dx, -1.62, s * 0.26], 0.09, 0.07));
    const body = merge([ell([3.0, 1.3, 1.15], [0, 0.5, 0], 30), ell([1.45, 1.4, 1.15], [1.7, 0.4, 0]), ell([1.35, 1.35, 1.18], [-2.0, 0.6, 0]), ell([2.5, 1.2, 1.25], [-0.1, 0.05, 0]),
      ell([0.9, 0.5, 0.7], [1.9, 1.55, 0]), ell([0.35, 0.3, 0.3], [-1.7, 1.75, 0.75]), ell([0.35, 0.3, 0.3], [-1.7, 1.75, -0.75]), ell([1.0, 0.6, 0.28], [2.75, 0.2, 0]), ell([0.62, 0.45, 0.58], [-1.4, -0.95, 0]), ...teats]);
    const ears = [1, -1].map((s) => ell([0.38, 0.12, 0.22], [3.72, 1.45, s * 0.78], 14, [s * 0.3, 0, 0.25]));
    const head = rel(merge([limb([2.2, 0.65, 0], [3.6, 1.2, 0], 0.95, 0.62), ell([0.7, 0.6, 0.55], [3.9, 1.3, 0]), limb([4.0, 1.2, 0], [4.85, 0.62, 0], 0.5, 0.36), ell([0.34, 0.32, 0.42], [4.98, 0.55, 0]), ell([0.35, 0.2, 0.4], [3.95, 1.85, 0]), ...ears]), HEAD_P);
    const tail = rel(merge([tube([[-3.15, 1.1, 0], [-3.35, 0.6, 0], [-3.4, -0.4, 0], [-3.35, -1.3, 0]], 0.08, 24, 6), ell([0.14, 0.38, 0.14], [-3.35, -1.6, 0], 10)]), TAIL_P);
    const legs = LEGS.map((p, i) => i < 2
      ? merge([limb([0, 0, 0], [0.08, -1.05, 0], 0.45, 0.24), limb([0.08, -1.05, 0], [0.05, -1.95, 0], 0.17, 0.15), ell([0.19, 0.17, 0.19], [0.06, -1.88, 0], 10)])
      : merge([ell([0.78, 1.15, 0.58], [0.05, -0.45, 0]), limb([0, -1.0, 0], [-0.35, -1.6, 0], 0.3, 0.18), limb([-0.35, -1.6, 0], [-0.25, -2.35, 0], 0.16, 0.15), ell([0.19, 0.17, 0.19], [-0.25, -2.27, 0], 10)]));
    setSH(1);
    return { body, head, tail, legs };
  },
  skinMats() { return furMat(holstein(), [0.45, 0.45, 0.45], 0.95); },
  face(A, HP) {
    const mats = addEyes(A.head, HP, { p: [3.98, 1.42, 0.47], r: 0.17, scale: [1, 1, 0.8], iris: [0.2, 0.12, 0.07], pupil: 'oval', side: true });
    const noseM = new THREE.MeshStandardMaterial({ color: C(0.55, 0.42, 0.42), roughness: 0.35, transparent: true });
    const hornM = new THREE.MeshStandardMaterial({ color: C(0.85, 0.8, 0.68), roughness: 0.45, transparent: true });
    const hoofM = new THREE.MeshStandardMaterial({ color: C(0.12, 0.1, 0.09), roughness: 0.6, transparent: true });
    const nose = new THREE.Mesh(ell([0.12, 0.26, 0.36], [5.24 - HP[0], 0.55 - HP[1], 0], 14), noseM); A.head.add(nose);
    for (const s of [1, -1]) A.head.add(new THREE.Mesh(merge([limb([3.95 - HP[0], 1.9 - HP[1], s * 0.32], [4.05 - HP[0], 2.15 - HP[1], s * 0.62], 0.1, 0.06), cone(0.06, 0.2, [4.08 - HP[0], 2.25 - HP[1], s * 0.68], [s * -0.6, 0, -0.3], 8)]), hornM));
    A.legs.forEach((g, i) => { const y = i < 2 ? -1.95 : -2.35, x = i < 2 ? 0.05 : -0.25; for (const z of [0.08, -0.08]) { const h = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.13, 0.17, 10), hoofM); h.position.set(x + 0.03, y - 0.07, z); g.add(h); } });
    return mats.concat([noseM, hornM, hoofM]);
  },
  bones() {
    return quadSkeleton({
      skull: [[[0.62, 0.52, 0.48], [3.9, 1.3, 0], 18]], jaw: [[[4.0, 1.25, 0], [4.95, 0.65, 0], 0.36, 0.24], [[3.75, 0.85, 0], [4.85, 0.42, 0], 0.15, 0.12]],
      spine: [[3.55, 1.1, 0], [2.6, 0.95, 0], [1.9, 1.45, 0], [0, 1.45, 0], [-2.0, 1.45, 0], [-3.1, 1.05, 0]], nV: 30, vr: 0.16,
      tail: [[-3.15, 1.05, 0], [-3.35, 0.55, 0], [-3.4, -0.4, 0], [-3.35, -1.3, 0]], nT: 18, tr: 0.1,
      ribs: { n: 13, x0: 2.3, dx: 0.21, cy: 0.3, hh: 1.05, hw: 1.0, t: 0.06 }, sternum: [[2.3, -0.75, 0], [0.4, -0.8, 0], 0.09],
      scap: [[0.15, 0.75, 0.35], [2.1, 0.95, 0.6]], pelvis: [[0.4, 0.6, 0.85], [-2.0, 1.1, 0], [0, 0, 0.25]],
      front: [[[1.85, -0.35, 0.62], [1.95, -1.4, 0.6], [1.9, -2.0, 0.58], [1.95, -2.4, 0.58]]],
      hind: [[[-2.0, 0.6, 0.68], [-1.75, -0.55, 0.66], [-2.35, -1.6, 0.62], [-2.25, -2.4, 0.6]]], br: [0.16, 0.13, 0.1, 0.08],
    });
  },
  organs(addO, organMat) {
    return ruminantOrgans(addO, organMat, X, { brain: { r: [0.32, 0.25, 0.26], cb: [[0.13, 0.11, 0.13], [-0.28, -0.08, 0]], p: [3.85, 1.42, 0] }, neck: NECK, lobedKidney: true, teats: [[0.22, 0.24], [0.22, -0.24], [-0.22, 0.24], [-0.22, -0.24]] });
  },
  food: ruminantFood(X, NECK),
};
