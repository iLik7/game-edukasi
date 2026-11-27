import * as THREE from 'three';
import { heightAt, waterAt, WATER, pathDist, PATH_W } from './terrain.js';
import { clamp } from './util.js';

/* NAVIGASI: minimap (utara di atas), peta besar di jurnal, dan penunjuk arah (waypoint)
   berupa panah di layar plus tiang cahaya di dunia. */
export const CATS = [
  { id: 'pohon', name: 'Pohon', col: '#7fd36b' },
  { id: 'hewan', name: 'Hewan', col: '#ffb052' },
  { id: 'ikan', name: 'Ikan', col: '#5cc8ff' },
  { id: 'tumbuhan', name: 'Tumbuhan', col: '#e86ad0' },
  { id: 'bumi', name: 'Bumi dan ekosistem', col: '#d8b27a' },
];

export function createNav(o) {
  const { heroes, world, catOf, visited, onPick } = o;
  /* batas peta dari sebaran objek */
  let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
  heroes.forEach((H) => { x0 = Math.min(x0, H.x); x1 = Math.max(x1, H.x); z0 = Math.min(z0, H.z); z1 = Math.max(z1, H.z); });
  const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, half = Math.max(x1 - x0, z1 - z0) / 2 + 22;
  const B = { x: cx - half, z: cz - half, s: half * 2 };
  const N = 360, img = document.createElement('canvas'); img.width = img.height = N;
  { const x = img.getContext('2d'), d = x.createImageData(N, N), m = B.s / N;
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const wx = B.x + (i + 0.5) * m, wz = B.z + (j + 0.5) * m, h = heightAt(wx, wz), w = waterAt(wx, wz), k = (j * N + i) * 4;
      let r, g, b;
      if (h < w) { const dp = clamp((w - h) / 3, 0, 1); r = 40 - dp * 20; g = 110 - dp * 40; b = 150 - dp * 30; }
      else {
        const sx = heightAt(wx + m, wz) - h, sz = heightAt(wx, wz + m) - h, sh = clamp(1 - (sx + sz) * 1.2, 0.6, 1.25), t = clamp((h - WATER) / 9, 0, 1);
        if (h - w < 0.35) { r = 170; g = 160; b = 120; } else { r = 70 + t * 40; g = 120 + t * 10; b = 60 + t * 10; }
        if (pathDist(wx, wz) < PATH_W) { r = 190; g = 170; b = 125; }
        r *= sh; g *= sh; b *= sh;
      }
      d.data[k] = r; d.data[k + 1] = g; d.data[k + 2] = b; d.data[k + 3] = 255;
    }
    x.putImageData(d, 0, 0); }
  const toPx = (wx, wz, cv, view) => [(wx - view.x) / view.s * cv.width, (wz - view.z) / view.s * cv.height];

  /* ---------- minimap ---------- */
  const mm = document.getElementById('mini'), mc = mm.getContext('2d');
  const DPR = Math.min(2, window.devicePixelRatio || 1);
  function sizeMini() { const r = mm.getBoundingClientRect(); mm.width = Math.round(r.width * DPR) || 150; mm.height = mm.width; }
  sizeMini(); window.addEventListener('resize', sizeMini);
  let target = -1;
  function marker(c, x, y, H, i, r) {
    const cat = CATS.find((q) => q.id === catOf(i)), v = visited(i);
    c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2);
    if (v) { c.fillStyle = cat.col; c.fill(); } else { c.fillStyle = 'rgba(10,20,16,0.75)'; c.fill(); c.lineWidth = r * 0.45; c.strokeStyle = cat.col; c.stroke(); }
    if (i === target) { c.beginPath(); c.arc(x, y, r * 2, 0, Math.PI * 2); c.lineWidth = Math.max(2, r * 0.4); c.strokeStyle = '#fff'; c.stroke(); }
  }
  function player(c, x, y, yaw, s) {
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw), a = Math.atan2(fz, fx);
    c.save(); c.translate(x, y); c.rotate(a); c.beginPath(); c.moveTo(s * 1.3, 0); c.lineTo(-s * 0.8, s * 0.75); c.lineTo(-s * 0.4, 0); c.lineTo(-s * 0.8, -s * 0.75); c.closePath();
    c.fillStyle = '#fff'; c.strokeStyle = 'rgba(0,0,0,0.6)'; c.lineWidth = 2; c.fill(); c.stroke(); c.restore();
  }
  let acc = 0;
  function drawMini(P, yaw) {
    const W = mm.width, R = 34, view = { x: P.x - R, z: P.z - R, s: R * 2 };
    mc.clearRect(0, 0, W, W); mc.save(); mc.beginPath(); mc.arc(W / 2, W / 2, W / 2 - 1, 0, Math.PI * 2); mc.clip();
    mc.fillStyle = '#3c5a30'; mc.fillRect(0, 0, W, W);
    const sx = (view.x - B.x) / B.s * N, sz = (view.z - B.z) / B.s * N, ss = view.s / B.s * N;
    mc.imageSmoothingEnabled = true; mc.drawImage(img, sx, sz, ss, ss, 0, 0, W, W);
    heroes.forEach((H, i) => { let [x, y] = toPx(H.x, H.z, mm, view); const dx = x - W / 2, dy = y - W / 2, d = Math.hypot(dx, dy), lim = W / 2 - 8 * DPR;
      if (d > lim) { if (i !== target) return; x = W / 2 + dx / d * lim; y = W / 2 + dy / d * lim; } marker(mc, x, y, H, i, 4.2 * DPR); });
    player(mc, W / 2, W / 2, yaw, 7 * DPR);
    mc.restore(); mc.beginPath(); mc.arc(W / 2, W / 2, W / 2 - 1, 0, Math.PI * 2); mc.lineWidth = 2 * DPR; mc.strokeStyle = 'rgba(255,255,255,0.35)'; mc.stroke();
    mc.fillStyle = '#fff'; mc.font = `700 ${11 * DPR}px system-ui`; mc.textAlign = 'center'; mc.fillText('U', W / 2, 13 * DPR);
  }

  /* ---------- tiang cahaya + panah ---------- */
  const beamM = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 2.0, 0.8), transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 40, 12, 1, true).translate(0, 20, 0), beamM); beam.visible = false; beam.userData.noAO = true; beam.frustumCulled = false; world.add(beam);
  /* penunjuk arah: di desktop di bawah kartu profil */
  const wp = document.getElementById('wp'), wpA = document.getElementById('wpA'), wpT = document.getElementById('wpT');
  wp.addEventListener('click', () => setTarget(-1));
  function setTarget(i) {
    target = i; wp.classList.toggle('on', i >= 0); beam.visible = i >= 0;
    if (i >= 0) { const H = heroes[i]; beam.position.set(H.x, heightAt(H.x, H.z), H.z); }
  }
  function update(dt, P, yaw, T) {
    acc += Math.max(0, dt); if (acc > 0.1) { acc = 0; drawMini(P, yaw); }
    if (target < 0) return;
    const H = heroes[target], dx = H.x - P.x, dz = H.z - P.z, d = Math.hypot(dx, dz);
    if (d < 5 || visited(target) && d < 9) { setTarget(-1); return; }
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw), rel = Math.atan2(dx * -fz + dz * fx, dx * fx + dz * fz);
    wpA.style.transform = `rotate(${rel}rad)`; wpT.innerHTML = `<b>${H.name}</b> ${Math.round(d)} m`;
    beamM.opacity = 0.22 + 0.12 * Math.sin(T * 3) + clamp((d - 15) / 60, 0, 0.25);
  }

  /* ---------- peta besar untuk jurnal ---------- */
  function bigMap(cv, P, yaw) {
    const c = cv.getContext('2d'), W = cv.width, view = B;
    c.drawImage(img, 0, 0, W, W);
    heroes.forEach((H, i) => { const [x, y] = toPx(H.x, H.z, cv, view); marker(c, x, y, H, i, W / 95); });
    const [px, py] = toPx(P.x, P.z, cv, view); player(c, px, py, yaw, W / 55);
    cv.onclick = (e) => { const r = cv.getBoundingClientRect(), mx = (e.clientX - r.left) / r.width * W, my = (e.clientY - r.top) / r.height * W; let b = -1, bd = W / 25;
      heroes.forEach((H, i) => { const [x, y] = toPx(H.x, H.z, cv, view), d = Math.hypot(x - mx, y - my); if (d < bd) { bd = d; b = i; } }); if (b >= 0) onPick(b); };
  }
  return { update, setTarget, bigMap, bounds: B, get target() { return target; } };
}
