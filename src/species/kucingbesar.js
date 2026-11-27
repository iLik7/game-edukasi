import * as THREE from 'three';
import { hairTexture, merge } from '../animal.js';
import { makeCat } from './kucing.js';
import { lerp } from '../util.js';

/* Harimau Sumatra dan macan tutul Jawa dari pabrik kucing. Satuan model kucing ~0,1 m; worldScale menyesuaikan ukuran asli. */
const T = {};
const tigerTex = () => T.t || (T.t = hairTexture('#e0701c', (x, N, r) => {
  /* loreng hitam vertikal yang bercabang dan tipis di ujung */
  for (let i = 0; i < 22; i++) { const px = (i / 22) * N + r() * 6, w = 4 + r() * 7, y0 = r() * N * 0.15, y1 = N - r() * N * 0.25; x.fillStyle = 'rgba(8,5,3,1)'; x.beginPath(); x.moveTo(px, y0);
    for (let y = y0; y <= y1; y += 10) x.lineTo(px + Math.sin(y * 0.05 + i) * 7, y); for (let y = y1; y >= y0; y -= 10) x.lineTo(px + w * Math.sin(Math.PI * (y - y0) / (y1 - y0)) + Math.sin(y * 0.05 + i) * 7, y); x.fill();
    if (r() < 0.5) { const yb = y0 + (y1 - y0) * (0.3 + r() * 0.4); x.beginPath(); x.moveTo(px, yb); x.lineTo(px + 18 + r() * 10, yb + 14); x.lineTo(px + 3, yb + 8); x.fill(); } }
}, 23, [2, 2], 3500));
const leoTex = () => T.l || (T.l = hairTexture('#c88a3a', (x, N, r) => {
  /* roset: cincin bintik hitam dengan tengah lebih gelap dari dasar */
  for (let i = 0; i < 90; i++) { const cx = r() * N, cy = r() * N, R = 8 + r() * 7; x.fillStyle = 'rgba(150,100,40,0.5)'; x.beginPath(); x.arc(cx, cy, R * 0.8, 0, Math.PI * 2); x.fill();
    x.fillStyle = 'rgba(10,7,4,1)'; for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2 + r() * 0.6; x.beginPath(); x.ellipse(cx + Math.cos(a) * R, cy + Math.sin(a) * R, 4 + r() * 2.5, 2.8 + r() * 1.5, a, 0, Math.PI * 2); x.fill(); } }
}, 29, [2, 2], 3500));
/* ekor menjuntai lalu melengkung sedikit di ujung (kucing besar berjalan dengan ekor rendah) */
/* kalung pemancar GPS di leher: dipakai peneliti untuk melacak pergerakan */
const collar = (B) => ({ organs(addO, organMat) { const R = B.organs(addO, organMat); addO('konservasi', merge([new THREE.TorusGeometry(0.72, 0.08, 8, 24).rotateY(Math.PI / 2).rotateZ(0.6).translate(2.55, 0.75, 0), new THREE.BoxGeometry(0.3, 0.25, 0.35).translate(2.25, 0.05, 0)].map((g) => g.index ? g.toNonIndexed() : g)), organMat([0.2, 0.25, 0.2], 0.5, 0.3)); return R; } });
const LOW_TAIL = [[-2.6, 0.2, 0], [-3.4, -0.2, 0.05], [-4.0, -0.8, 0.1], [-4.4, -1.1, 0], [-4.8, -1.0, -0.1]];

const HB = makeCat({ tex: tigerTex, tail: LOW_TAIL, roundEars: true, belly: [0.95, 0.92, 0.85], iris: [0.9, 0.7, 0.2], pupil: 'round' }), MB = makeCat({ tex: leoTex, tail: LOW_TAIL, roundEars: true, belly: [0.93, 0.9, 0.8], iris: [0.75, 0.75, 0.3], pupil: 'round' });
export const SP_HARIMAU = {
  ...HB, ...collar(HB), capText: (s) => 'Perkiraan untuk harimau: jantung ' + Math.round(lerp(55, 120, s)) + ' detak per menit, napas ' + Math.round(lerp(10, 30, s)) + ' kali per menit. ' + (s > 0.6 ? 'Saat menyergap mangsa, harimau berlari sangat cepat tetapi hanya dalam jarak pendek.' : 'Harimau banyak beristirahat untuk menghemat tenaga.') + ' Angka ini kisaran umum.', id: 'harimau', worldScale: 0.36, hitR: 0.8, dist: [12, 22],
  walk: { speed: 0.9, step: 4.2, swing: 0.55, radius: 18, keep: 2.2, tailA: 0.18 },
  vitals: (a) => ({ bpm: Math.round(lerp(55, 120, a)), rr: Math.round(lerp(10, 30, a)) }),
};
export const SP_MACAN = {
  ...MB, ...collar(MB), capText: (s) => 'Perkiraan untuk macan tutul: jantung ' + Math.round(lerp(60, 140, s)) + ' detak per menit, napas ' + Math.round(lerp(12, 34, s)) + ' kali per menit. ' + (s > 0.6 ? 'Saat memanjat sambil membawa mangsa, otot bahu dan kaki depan bekerja paling keras.' : 'Macan tutul sering beristirahat di dahan pohon.') + ' Angka ini kisaran umum.', id: 'macan', worldScale: 0.26, hitR: 0.7, dist: [11, 20],
  walk: { speed: 1.0, step: 4.8, swing: 0.55, radius: 16, keep: 2.0, tailA: 0.2 },
  vitals: (a) => ({ bpm: Math.round(lerp(60, 140, a)), rr: Math.round(lerp(12, 34, a)) }),
};
