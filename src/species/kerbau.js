import * as THREE from 'three';
import { merge, C, ell, limb, hairTexture, furMat, addEyes } from '../animal.js';
import SAPI from './sapi.js';
import { lerp } from '../util.js';

/* Spec KERBAU LUMPUR (Bubalus bubalis), turunan rangka sapi: kulit abu-abu gelap berambut jarang, tanduk besar melengkung ke belakang. */
let tex = null;
const hide = () => tex || (tex = hairTexture('#3a3836', (x, N, r) => { for (let i = 0; i < 10; i++) { x.fillStyle = 'rgba(70,64,58,0.35)'; x.beginPath(); x.ellipse(r() * N, r() * N, 40 + r() * 40, 25, r() * 3, 0, Math.PI * 2); x.fill(); } for (let i = 0; i < 200; i++) { x.fillStyle = 'rgba(120,100,80,0.2)'; x.fillRect(r() * N, r() * N, 3, 2); } }, 37, [1.5, 1.5], 700));

export default {
  ...SAPI, id: 'kerbau', dist: [21, 46], hitR: 1.5,
  walk: { ...SAPI.walk, speed: 0.6, graze: 1.25 },
  vitals: (a) => ({ bpm: Math.round(lerp(40, 80, a)), rr: Math.round(lerp(18, 50, a)) }),
  skinMats() { return furMat(hide(), [0.55, 0.53, 0.52], 0.7); },
  face(A, HP) {
    const mats = addEyes(A.head, HP, { p: [3.98, 1.42, 0.47], r: 0.17, scale: [1, 1, 0.8], iris: [0.15, 0.1, 0.07], pupil: 'oval', side: true });
    const noseM = new THREE.MeshStandardMaterial({ color: C(0.15, 0.14, 0.14), roughness: 0.3, transparent: true });
    const hornM = new THREE.MeshStandardMaterial({ color: C(0.25, 0.23, 0.2), roughness: 0.5, transparent: true });
    const hoofM = new THREE.MeshStandardMaterial({ color: C(0.1, 0.09, 0.08), roughness: 0.6, transparent: true });
    A.head.add(new THREE.Mesh(ell([0.12, 0.26, 0.36], [5.24 - HP[0], 0.55 - HP[1], 0], 14), noseM));
    const o = (x, y, z) => [x - HP[0], y - HP[1], z - HP[2]];
    for (const s of [1, -1]) { const P = [[3.95, 1.95, s * 0.3], [3.8, 2.05, s * 0.95], [3.4, 2.15, s * 1.45], [2.85, 2.35, s * 1.55], [2.45, 2.7, s * 1.25]]; const parts = []; for (let i = 0; i < P.length - 1; i++) parts.push(limb(o(...P[i]), o(...P[i + 1]), 0.2 - i * 0.045, 0.2 - (i + 1) * 0.045, 8)); A.head.add(new THREE.Mesh(merge(parts), hornM)); }
    A.legs.forEach((g, i) => { const y = i < 2 ? -1.95 : -2.35, x = i < 2 ? 0.05 : -0.25; for (const z of [0.08, -0.08]) { const h = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.15, 0.17, 10), hoofM); h.position.set(x + 0.03, y - 0.07, z); g.add(h); } });
    return mats.concat([noseM, hornM, hoofM]);
  },
};
