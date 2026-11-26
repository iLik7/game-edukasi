import * as THREE from 'three';
import { TAU } from './util.js';

/* Partikel cipratan (gravitasi) dan gelembung (naik) dengan kolam tetap: tanpa alokasi saat main. */
function dotTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.5, 'rgba(255,255,255,0.75)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.beginPath(); x.arc(32, 32, 30, 0, TAU); x.fill(); return new THREE.CanvasTexture(c);
}
function pool(scene, N, color, size, tex) {
  const pos = new Float32Array(N * 3).fill(-999), geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: tex, color, size, sizeAttenuation: true, transparent: true, depthWrite: false, opacity: 0.85 }));
  pts.frustumCulled = false; pts.userData.noAO = true; scene.add(pts);
  return { pts, pos, vel: new Float32Array(N * 3), life: new Float32Array(N), N, next: 0 };
}
export function createSplash(scene, waterY) {
  const tex = dotTex();
  const S = pool(scene, 180, new THREE.Color(0.9, 0.97, 1.0), 0.075, tex);
  const B = pool(scene, 70, new THREE.Color(0.8, 0.95, 1.0), 0.028, tex);
  const take = (P) => { const i = P.next; P.next = (P.next + 1) % P.N; return i; };
  return {
    /* n partikel, kekuatan p (0..2) */
    splash(x, z, n, p) {
      for (let k = 0; k < n; k++) {
        const i = take(S), a = Math.random() * TAU, r = Math.random() * 0.18, h = (0.4 + Math.random()) * p;
        S.pos[i * 3] = x + Math.cos(a) * r; S.pos[i * 3 + 1] = waterY + 0.02; S.pos[i * 3 + 2] = z + Math.sin(a) * r;
        const out = (0.4 + Math.random() * 1.1) * p;
        S.vel[i * 3] = Math.cos(a) * out; S.vel[i * 3 + 1] = 1.4 + h * 2.4; S.vel[i * 3 + 2] = Math.sin(a) * out; S.life[i] = 1.6;
      }
    },
    bubbles(x, y, z, n) {
      for (let k = 0; k < n; k++) {
        const i = take(B); B.pos[i * 3] = x + (Math.random() - 0.5) * 0.3; B.pos[i * 3 + 1] = y; B.pos[i * 3 + 2] = z + (Math.random() - 0.5) * 0.3;
        B.vel[i * 3] = Math.random() * TAU; B.vel[i * 3 + 1] = 0.5 + Math.random() * 0.5; B.life[i] = 4;
      }
    },
    update(dt, T) {
      for (let i = 0; i < S.N; i++) {
        if (S.life[i] <= 0) continue;
        S.life[i] -= dt; S.vel[i * 3 + 1] -= 9.8 * dt;
        S.pos[i * 3] += S.vel[i * 3] * dt; S.pos[i * 3 + 1] += S.vel[i * 3 + 1] * dt; S.pos[i * 3 + 2] += S.vel[i * 3 + 2] * dt;
        if ((S.pos[i * 3 + 1] < waterY && S.vel[i * 3 + 1] < 0) || S.life[i] <= 0) { S.life[i] = 0; S.pos[i * 3 + 1] = -999; }
      }
      for (let i = 0; i < B.N; i++) {
        if (B.life[i] <= 0) continue;
        B.life[i] -= dt; const ph = B.vel[i * 3];
        B.pos[i * 3] += Math.sin(T * 6 + ph) * 0.15 * dt; B.pos[i * 3 + 1] += B.vel[i * 3 + 1] * dt; B.pos[i * 3 + 2] += Math.cos(T * 5 + ph) * 0.15 * dt;
        if (B.pos[i * 3 + 1] > waterY - 0.02 || B.life[i] <= 0) { B.life[i] = 0; B.pos[i * 3 + 1] = -999; }
      }
      S.pts.geometry.attributes.position.needsUpdate = true; B.pts.geometry.attributes.position.needsUpdate = true;
    },
  };
}
