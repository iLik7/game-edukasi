import * as THREE from 'three';
import { merge, C, setSH, ell, limb, rel, hairTexture, furMat, addEyes, quadSkeleton } from '../animal.js';
import AYAM from './ayam.js';

/* Spec ITIK/BEBEK (Anas platyrhynchos domesticus), turunan ayam: badan mendatar, paruh pipih, kaki pendek berselaput. Tanah di y = -1.85. */
const HEAD_P = [1.1, 0.5, 0], TAIL_P = [-1.5, 0.3, 0];
const LEGS = [[0.0, -0.6, 0.38], [0.0, -0.6, -0.38]];
let tex = null;
const feathers = () => tex || (tex = hairTexture('#9a7a5a', (x, N, r) => { for (let j = 0; j < 16; j++) for (let i = 0; i < 14; i++) { const cx = i * N / 14 + (j % 2) * N / 28, cy = j * N / 16; x.fillStyle = r() < 0.5 ? 'rgba(60,40,24,0.5)' : 'rgba(220,200,170,0.35)'; x.beginPath(); x.ellipse(cx, cy, N / 30, N / 22, 0, 0, Math.PI); x.fill(); } }, 71, [2, 2], 3000));

export default {
  ...AYAM, id: 'bebek', groundY: -1.85, worldScale: 0.075,
  pivots: { head: HEAD_P, tail: TAIL_P, legs: LEGS },
  walk: { speed: 0.5, step: 7, swing: 0.45, radius: 4, keep: 1.3, graze: 0.8, tailA: 0.12, tailF: 4 },
  bodyParts(sh) {
    setSH(sh);
    const body = merge([ell([1.7, 0.85, 0.95], [0, 0, 0], 28, [0, 0, 0.08]), ell([0.9, 0.8, 0.85], [0.9, 0.05, 0]), ell([1.1, 0.6, 0.85], [-0.8, -0.1, 0]),
      ell([1.2, 0.45, 0.22], [-0.1, 0.25, 0.88], 18), ell([1.2, 0.45, 0.22], [-0.1, 0.25, -0.88], 18)]);
    const head = rel(merge([limb([1.1, 0.5, 0], [1.55, 1.45, 0], 0.45, 0.28), ell([0.42, 0.36, 0.33], [1.75, 1.7, 0])]), HEAD_P);
    const tail = rel(ell([0.45, 0.15, 0.4], [-1.75, 0.45, 0], 14, [0, 0, -0.35]), TAIL_P);
    const legs = LEGS.map(() => ell([0.3, 0.35, 0.28], [0, -0.05, 0], 12));
    setSH(1);
    return { body, head, tail, legs };
  },
  skinMats() { return furMat(feathers(), [1, 0.9, 0.75], 0.85); },
  face(A, HP) {
    const mats = addEyes(A.head, HP, { p: [1.92, 1.82, 0.25], r: 0.09, scale: [1, 1, 0.8], iris: [0.15, 0.1, 0.06], pupil: 'round', side: true });
    const billM = new THREE.MeshStandardMaterial({ color: C(0.95, 0.65, 0.2), roughness: 0.4, transparent: true });
    const legM = new THREE.MeshStandardMaterial({ color: C(0.95, 0.6, 0.18), roughness: 0.5, transparent: true });
    const o = (x, y, z) => [x - HP[0], y - HP[1], z - HP[2]];
    A.head.add(new THREE.Mesh(merge([ell([0.42, 0.07, 0.17], o(2.3, 1.6, 0), 14), ell([0.38, 0.05, 0.15], o(2.28, 1.53, 0), 12)]), billM));
    A.legs.forEach((g) => {
      const parts = [limb([0, -0.2, 0], [0.05, -1.15, 0], 0.07, 0.055)];
      for (const a of [-0.5, 0, 0.5]) parts.push(limb([0.05, -1.2, 0], [0.05 + Math.cos(a) * 0.42, -1.24, Math.sin(a) * 0.42], 0.03, 0.02));
      const web = new THREE.CircleGeometry(0.42, 10, -0.5, 1.0).rotateX(-Math.PI / 2).translate(0.05, -1.23, 0); parts.push(web.index ? web.toNonIndexed() : web);
      g.add(new THREE.Mesh(merge(parts.map((p) => p.index ? p.toNonIndexed() : p)), legM));
    });
    return mats.concat([billM, legM]);
  },
  bones() {
    const keel = ell([0.85, 0.45, 0.05], [0.55, -0.5, 0], 16), wing = [];
    for (const s of [1, -1]) wing.push(limb([0.8, 0.45, s * 0.55], [0.15, 0.3, s * 0.82], 0.06, 0.05), limb([0.15, 0.3, s * 0.82], [0.6, 0.15, s * 0.88], 0.05, 0.04), limb([0.6, 0.15, s * 0.88], [-0.6, 0.25, s * 0.9], 0.035, 0.02));
    return quadSkeleton({
      skull: [[[0.33, 0.28, 0.26], [1.75, 1.72, 0], 16]], jaw: [[[1.95, 1.62, 0], [2.65, 1.58, 0], 0.08, 0.06]],
      spine: [[1.65, 1.55, 0], [1.3, 1.0, 0], [1.1, 0.5, 0], [0.3, 0.45, 0], [-0.9, 0.35, 0], [-1.6, 0.45, 0]], nV: 26, vr: 0.08,
      ribs: { n: 6, x0: 0.85, dx: 0.17, cy: -0.05, hh: 0.55, hw: 0.62, t: 0.035 },
      pelvis: [[0.8, 0.22, 0.5], [-0.6, 0.3, 0], [0, 0, 0.1]],
      front: [], hind: [[[0.0, -0.4, 0.38], [0.15, -0.75, 0.38], [0.05, -1.25, 0.38], [0.15, -1.78, 0.38]]], br: [0.08, 0.07, 0.05, 0.03],
      extra: [keel, ...wing],
    });
  },
  organs(addO, organMat) {
    /* sama seperti ayam, tetapi bebek tidak punya tembolok sejati (kerongkongannya yang melebar), dan punya kelenjar minyak besar di pangkal ekor */
    const wrap = (id, ...a) => addO(id === 'tembolok' ? 'kerongkongan' : id === 'oviduk' ? 'oviduk' : id, ...a);
    const R = AYAM.organs(wrap, organMat);
    addO('minyak', merge([ell([0.18, 0.12, 0.14], [-1.45, 0.55, 0], 12)]), organMat([0.98, 0.85, 0.5], 0.3, 0.6));
    return R;
  },
};
