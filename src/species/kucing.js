import * as THREE from 'three';
import { V3, merge, C, setSH, ell, limb, tube, cone, rel, hairTexture, furMat, addEyes, quadSkeleton, brainGeo } from '../animal.js';
import { lerp } from '../util.js';

/* Spec KUCING (Felis catus). Satuan model ~0,1 m, tanah di y = -1.6. */
const HEAD_P = [3.0, 0.85, 0], TAIL_P = [-2.6, 0.2, 0];
const LEGS = [[1.75, -0.3, 0.58], [1.75, -0.3, -0.58], [-1.7, -0.1, 0.65], [-1.7, -0.1, -0.65]];
const TAIL = [[-2.6, 0.2, 0], [-3.4, 0.45, 0.05], [-4.1, 1.1, 0.1], [-4.4, 2.0, 0], [-4.3, 2.5, -0.1]];
const GUT = [[0.0, -0.62, -0.1], [-0.45, -0.72, 0.4], [-0.9, -0.6, -0.4], [-1.2, -0.74, 0.4], [-1.5, -0.55, -0.35], [-1.7, -0.3, 0.2], [-2.0, -0.15, 0], [-2.7, -0.1, 0]];

let furTex = null;
function tabby() {
  return furTex || (furTex = hairTexture('#b4793c', (x, N, r) => {
    for (let i = 0; i < 18; i++) { const px = (i / 18) * N + r() * 8, w = 5 + r() * 9; x.fillStyle = 'rgba(48,28,14,0.55)'; x.beginPath(); x.moveTo(px, 0);
      for (let y = 0; y <= N; y += 16) x.lineTo(px + Math.sin(y * 0.06 + i) * 6, y); for (let y = N; y >= 0; y -= 16) x.lineTo(px + w + Math.sin(y * 0.06 + i) * 6, y); x.fill(); }
  }, 11));
}

export default {
  id: 'kucing', groundY: -1.6, worldScale: 0.1, hitR: 0.75, hitY: 0.35,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
  walk: { speed: 0.9, step: 5.5, swing: 0.6, radius: 6, keep: 1.6, tailA: 0.28 },
  camTarget: [0.2, 0.1, 0], bg: ['#2a3f52', '#121f2b'],
  vitals: (a) => ({ bpm: Math.round(lerp(140, 220, a)), rr: Math.round(lerp(24, 48, a)) }),
  bodyParts(sh) {
    setSH(sh);
    const body = merge([ell([2.55, 1.12, 0.95], [0, 0, 0], 28), ell([1.3, 1.15, 0.95], [1.35, -0.05, 0]), ell([1.2, 1.15, 1.02], [-1.55, -0.05, 0]), ell([2.1, 0.9, 0.9], [0, -0.3, 0]), limb([2.2, 0.3, 0], [3.0, 0.85, 0], 0.78, 0.62)]);
    const ears = [1, -1].map((s) => cone(0.36, 0.7, [3.4, 1.85, s * 0.52], [s * 0.28, Math.PI / 4, 0], 4));
    const head = rel(merge([ell([0.85, 0.78, 0.82], [3.55, 1.1, 0]), ell([0.42, 0.3, 0.42], [4.3, 0.88, 0]), ell([0.45, 0.38, 0.7], [3.8, 0.85, 0]), ...ears]), HEAD_P);
    const tail = rel(merge([tube(TAIL, 0.2, 28, 8), ell([0.2, 0.2, 0.2], TAIL[4], 10)]), TAIL_P);
    const legs = LEGS.map((p, i) => i < 2
      ? merge([limb([0, 0, 0], [0.1, -0.7, 0], 0.36, 0.27), limb([0.1, -0.7, 0], [0.05, -1.28, 0], 0.25, 0.2), ell([0.34, 0.17, 0.26], [0.2, -1.34, 0], 14)])
      : merge([ell([0.6, 0.85, 0.52], [0, -0.45, 0]), limb([0, -0.8, 0], [-0.2, -1.28, 0], 0.3, 0.2), ell([0.36, 0.17, 0.27], [-0.05, -1.42, 0], 14)]));
    setSH(1);
    return { body, head, tail, legs };
  },
  skinMats() { return furMat(tabby()); },
  face(A, HP) {
    const mats = addEyes(A.head, HP, { p: [4.18, 1.27, 0.4], r: 0.2, scale: [0.7, 1, 1], iris: [0.5, 0.72, 0.18], pupil: 'slit' });
    const noseM = new THREE.MeshStandardMaterial({ color: 0xd98a8a, roughness: 0.5, transparent: true });
    const wM = new THREE.LineBasicMaterial({ color: 0xf5efe6, transparent: true, opacity: 0.9 });
    const n = new THREE.Mesh(ell([0.09, 0.07, 0.12], [4.7 - HP[0], 0.98 - HP[1], 0], 10), noseM); A.head.add(n);
    for (const s of [1, -1]) {
      const pts = []; for (let i = 0; i < 3; i++) { const a = (i - 1) * 0.22; pts.push(V3([4.25 - HP[0], 0.9 - HP[1], s * 0.25]), V3([4.45 - HP[0], 0.92 - HP[1] + a, s * 1.2])); }
      A.head.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), wM));
    }
    return mats.concat([noseM, wM]);
  },
  bones() {
    return quadSkeleton({
      skull: [[[0.7, 0.58, 0.6], [3.55, 1.1, 0], 20]], jaw: [[[3.9, 1.0, 0], [4.3, 0.88, 0], 0.3, 0.2], [[3.7, 0.66, 0], [4.25, 0.68, 0], 0.16, 0.12]],
      spine: [[3.0, 0.85, 0], [2.0, 0.78, 0], [0, 0.7, 0], [-1.8, 0.55, 0], [-2.6, 0.25, 0]], nV: 26, vr: 0.13,
      tail: TAIL, nT: 19, tr: 0.14,
      ribs: { n: 13, x0: 2.1, dx: 0.2, cy: -0.08, hh: 0.87, hw: 0.85 }, sternum: [[2.0, -0.95, 0], [0.1, -0.95, 0], 0.07],
      scap: [[0.12, 0.5, 0.26], [1.95, 0.3, 0.4]], pelvis: [[0.28, 0.5, 0.75], [-1.85, 0.3, 0], [0, 0, 0.2]],
      front: [[[1.75, -0.3, 0.58], [1.85, -0.95, 0.55], [1.8, -1.4, 0.5], [2.0, -1.62, 0.48]]],
      hind: [[[-1.7, -0.1, 0.65], [-1.45, -0.8, 0.62], [-1.85, -1.3, 0.58], [-1.7, -1.62, 0.56]]],
    });
  },
  organs(addO, organMat) {
    addO('otak', brainGeo([0.5, 0.38, 0.4], [[0.2, 0.17, 0.2], [-0.42, -0.14, 0]]), organMat([0.86, 0.64, 0.66], 0.5, 0.3), [3.5, 1.3, 0]);
    const HC = [1.35, -0.3, 0.05];
    const heart = addO('jantung', rel(merge([ell([0.34, 0.42, 0.3], HC, 24), ell([0.27, 0.3, 0.26], [1.47, -0.18, -0.1], 20), limb([1.42, 0, 0], [1.55, 0.4, 0], 0.1, 0.08), limb([1.3, 0, 0.1], [1.15, 0.38, 0.12], 0.08, 0.07)]), HC), organMat([0.62, 0.07, 0.1], 0.3, 0.8), HC);
    const lungs = [1, -1].map((s) => { const c = [1.3, 0.42, s * 0.5]; return addO('paru', rel(merge([ell([0.72, 0.5, 0.32], c, 24, [0, 0, 0.12]), ell([0.36, 0.34, 0.28], [0.85, 0.3, s * 0.46], 16)]), c), organMat([0.88, 0.45, 0.5], 0.55, 0.2), c); });
    addO('paru', merge([tube([[3.0, 0.72, 0], [2.1, 0.5, 0], [1.6, 0.3, 0]], 0.09, 16, 8), limb([1.6, 0.3, 0], [1.4, 0.25, 0.5], 0.07, 0.05), limb([1.6, 0.3, 0], [1.4, 0.25, -0.5], 0.07, 0.05)]), organMat([0.88, 0.86, 0.82], 0.4, 0.4));
    addO('hati', merge([ell([0.45, 0.42, 0.58], [0.72, -0.42, 0.12], 22), ell([0.35, 0.3, 0.4], [0.5, -0.58, -0.22], 18)]), organMat([0.4, 0.1, 0.08], 0.35, 0.7));
    addO('lambung', merge([ell([0.5, 0.36, 0.34], [0.05, -0.5, -0.32], 22, [0, 0, 0.5]), tube([[2.9, 0.7, 0], [1.9, 0.18, -0.05], [0.9, -0.3, -0.25], [0.3, -0.4, -0.3]], 0.07, 24, 8)]), organMat([0.9, 0.52, 0.48], 0.4, 0.6));
    addO('usus', merge([tube(GUT.slice(0, 6), 0.14, 150, 8), tube(GUT.slice(5), 0.17, 30, 8)]), organMat([0.94, 0.68, 0.64], 0.45, 0.6));
    for (const s of [1, -1]) addO('ginjal', ell([0.3, 0.19, 0.2], [-0.65, 0.4, s * 0.28], 16, [0, 0, 0.3]), organMat([0.5, 0.14, 0.1], 0.35, 0.7));
    addO('kandung', ell([0.3, 0.28, 0.28], [-1.78, -0.62, 0], 18), organMat([0.95, 0.85, 0.5], 0.25, 0.9));
    return { heart, lungs };
  },
  food: { main: [[4.35, 0.82, 0], [3.4, 0.6, 0], [2.3, 0.25, 0], [1.0, -0.3, -0.15], [0.1, -0.5, -0.3], ...GUT] },
};
