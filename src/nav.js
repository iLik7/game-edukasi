import * as THREE from 'three';
import { heightAt, waterAt, WATER, pathDist, PATH_W } from './terrain.js';
import { clamp, smooth } from './util.js';
import { biomeAt, BIOMES, ISLAND_R } from './world.js';

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
  const { heroes, world, catOf, visited, onPick, onTravel } = o;
  /* batas peta dari sebaran objek */
  let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9;
  heroes.forEach((H) => { x0 = Math.min(x0, H.x); x1 = Math.max(x1, H.x); z0 = Math.min(z0, H.z); z1 = Math.max(z1, H.z); });
  const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, half = Math.max(x1 - x0, z1 - z0) / 2 + 22;
  const B = { x: cx - half, z: cz - half, s: half * 2 };
  /* warna peta per titik, mengikuti bioma */
  function colorAt(wx, wz, m, hub) {
    const h = heightAt(wx, wz), w = waterAt(wx, wz);
    if (h < w) { const dp = clamp((w - h) / 6, 0, 1); return [40 - dp * 25, 110 - dp * 55, 150 - dp * 40]; }
    const sx = heightAt(wx + m, wz) - h, sz = heightAt(wx, wz + m) - h, sh = clamp(1 - (sx + sz) * (hub ? 1.2 : 0.35), 0.55, 1.3), t = clamp((h - WATER) / 9, 0, 1);
    let c;
    if (h - w < 0.35) c = [190, 175, 130]; else c = [70 + t * 40, 120 + t * 10, 60 + t * 10];
    if (!hub || Math.hypot(wx, wz) > 110) {
      const B = biomeAt(wx, wz), mixc = (col, k) => { for (let q = 0; q < 3; q++) c[q] += (col[q] - c[q]) * clamp(k, 0, 1); };
      mixc([40, 95, 50], B.hujan); mixc([150, 170, 85], B.peternakan); mixc([226, 196, 130], smooth(0.35, 0.7, B.gurun)); mixc([226, 205, 150], B.pantai);
      mixc([120, 118, 110], B.gunung * smooth(55, 85, h)); mixc([240, 244, 250], B.gunung * smooth(90, 104, h));
    }
    if (hub && pathDist(wx, wz) < PATH_W) c = [190, 170, 125];
    return [c[0] * sh, c[1] * sh, c[2] * sh];
  }
  function bake(view, N, cv, rows) {
    const x = cv.getContext('2d'), m = view.s / N; let j = 0;
    const doRows = (n) => { const d = x.createImageData(N, n); for (let jj = 0; jj < n; jj++, j++) for (let i = 0; i < N; i++) { const c = colorAt(view.x + (i + 0.5) * m, view.z + (j + 0.5) * m, m, view.hub), k = (jj * N + i) * 4; d.data[k] = c[0]; d.data[k + 1] = c[1]; d.data[k + 2] = c[2]; d.data[k + 3] = 255; } x.putImageData(d, 0, j - n); };
    if (!rows) { doRows(N); return; }
    const tick = () => { if (j >= N) { cv.ready = true; return; } doRows(Math.min(rows, N - j)); setTimeout(tick, 16); }; tick();
  }
  const N = 360, img = document.createElement('canvas'); img.width = img.height = N; B.hub = true; bake(B, N, img);
  /* peta seluruh pulau: dipanggang bertahap setelah game jalan */
  const WR = ISLAND_R + 90, WB = { x: -WR, z: -WR, s: WR * 2, hub: false }, WN = 384, wimg = document.createElement('canvas'); wimg.width = wimg.height = WN;
  setTimeout(() => bake(WB, WN, wimg, 12), 1500);
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
    mc.fillStyle = '#1e4a5e'; mc.fillRect(0, 0, W, W); mc.imageSmoothingEnabled = true;
    const draw = (im, V, n) => { const k = W / view.s, dx = (V.x - view.x) * k, dz = (V.z - view.z) * k, ds = V.s * k; mc.drawImage(im, 0, 0, n, n, dx, dz, ds, ds); };
    if (wimg.ready) draw(wimg, WB, WN);
    draw(img, B, N);
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
  function bigMap(cv, P, yaw, mode) {
    const c = cv.getContext('2d'), W = cv.width;
    if (mode === 'pulau') {
      c.fillStyle = '#1e4a5e'; c.fillRect(0, 0, W, W);
      if (wimg.ready) c.drawImage(wimg, 0, 0, W, W); else { c.fillStyle = '#fff'; c.font = '600 22px system-ui'; c.textAlign = 'center'; c.fillText('Peta pulau sedang disiapkan…', W / 2, W / 2); }
      const [hx, hy] = toPx(B.x, B.z, cv, WB), hs = B.s / WB.s * W; c.strokeStyle = 'rgba(255,214,110,.9)'; c.lineWidth = 3; c.strokeRect(hx, hy, hs, hs);
      c.textAlign = 'center'; c.font = '800 24px system-ui'; c.lineWidth = 5; c.strokeStyle = 'rgba(0,0,0,.55)';
      BIOMES.forEach((b) => { const [x, y] = b.x != null ? toPx(b.x, b.z, cv, WB) : [hx + hs / 2, hy - 10]; c.strokeText(b.name, x, y); c.fillStyle = '#fff'; c.fillText(b.name, x, y); });
      const [px, py] = toPx(P.x, P.z, cv, WB); player(c, px, py, yaw, W / 60);
      c.font = '600 15px system-ui'; c.fillStyle = 'rgba(255,255,255,.85)'; c.fillText('Ketuk nama wilayah untuk pergi ke sana', W / 2, W - 16);
      cv.onclick = (e) => { const r = cv.getBoundingClientRect(), mx = (e.clientX - r.left) / r.width * W, my = (e.clientY - r.top) / r.height * W; let b = null, bd = W / 8;
        BIOMES.forEach((q) => { const [x, y] = q.x != null ? toPx(q.x, q.z, cv, WB) : [hx + hs / 2, hy + hs / 2], d = Math.hypot(x - mx, y - my); if (d < bd) { bd = d; b = q; } }); if (b && onTravel) onTravel(b); };
      return;
    }
    const view = B;
    c.drawImage(img, 0, 0, W, W);
    heroes.forEach((H, i) => { const [x, y] = toPx(H.x, H.z, cv, view); marker(c, x, y, H, i, W / 95); });
    const [px, py] = toPx(P.x, P.z, cv, view); player(c, px, py, yaw, W / 55);
    cv.onclick = (e) => { const r = cv.getBoundingClientRect(), mx = (e.clientX - r.left) / r.width * W, my = (e.clientY - r.top) / r.height * W; let b = -1, bd = W / 25;
      heroes.forEach((H, i) => { const [x, y] = toPx(H.x, H.z, cv, view), d = Math.hypot(x - mx, y - my); if (d < bd) { bd = d; b = i; } }); if (b >= 0) onPick(b); };
  }
  return { update, setTarget, bigMap, bounds: B, get target() { return target; } };
}
