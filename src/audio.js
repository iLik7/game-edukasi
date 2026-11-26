/* Suara lingkungan prosedural (Web Audio, tanpa file aset): angin, burung, jangkrik malam, dan meong kucing.
   AudioContext baru dibuat setelah interaksi pertama pemain (aturan autoplay browser). */
export function createAudio() {
  let ctx = null, master = null, windG = null, windF = null, leafG = null, cricG = null, purrG = null, noiseBuf = null;
  let on = true, vol = 0.8, nextBird = 3, birdFlock = 0, nextMeow = 6, t = 0;

  function init() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    ctx = new AC(); master = ctx.createGain(); master.gain.value = on ? vol : 0; master.connect(ctx.destination);
    const n = ctx.sampleRate * 3; noiseBuf = ctx.createBuffer(1, n, ctx.sampleRate); const d = noiseBuf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0; for (let i = 0; i < n; i++) { const w = Math.random() * 2 - 1; b0 = 0.99765 * b0 + w * 0.099; b1 = 0.963 * b1 + w * 0.2965; b2 = 0.57 * b2 + w * 1.0526; d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.2; }
    const src = (type, f, q) => { const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true; s.loopStart = Math.random() * 2; const fl = ctx.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; const g = ctx.createGain(); g.gain.value = 0; s.connect(fl); fl.connect(g); g.connect(master); s.start(); return { g, fl }; };
    const w = src('bandpass', 380, 0.5); windG = w.g; windF = w.fl;
    const l = src('highpass', 2500, 0.4); leafG = l.g;
    /* jangkrik: osilator tinggi dengan modulasi amplitudo */
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 4300; const am = ctx.createGain(); am.gain.value = 0;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 16; const lg = ctx.createGain(); lg.gain.value = 0.5; const base = ctx.createGain(); base.gain.value = 0.5;
    cricG = ctx.createGain(); cricG.gain.value = 0; lfo.connect(lg); lg.connect(am.gain); o.connect(am); am.connect(cricG); cricG.connect(master); o.start(); lfo.start();
    /* dengkur kucing (hanya saat bedah kucing) */
    const ps = ctx.createBufferSource(); ps.buffer = noiseBuf; ps.loop = true; const pf = ctx.createBiquadFilter(); pf.type = 'lowpass'; pf.frequency.value = 190; pf.Q.value = 0.8;
    const pam = ctx.createGain(); pam.gain.value = 0.55; const pl = ctx.createOscillator(); pl.frequency.value = 25; const pg = ctx.createGain(); pg.gain.value = 0.45; pl.connect(pg); pg.connect(pam.gain);
    purrG = ctx.createGain(); purrG.gain.value = 0; ps.connect(pf); pf.connect(pam); pam.connect(purrG); purrG.connect(master); ps.start(); pl.start();
  }

  function pan(p) { if (ctx.createStereoPanner) { const s = ctx.createStereoPanner(); s.pan.value = Math.max(-1, Math.min(1, p)); return s; } return ctx.createGain(); }

  function chirp(at, f0, f1, dur, vl, pn) {
    const o = ctx.createOscillator(), g = ctx.createGain(), p = pan(pn); o.type = 'sine';
    o.frequency.setValueAtTime(f0, at); o.frequency.exponentialRampToValueAtTime(f1, at + dur);
    g.gain.setValueAtTime(0.0001, at); g.gain.exponentialRampToValueAtTime(vl, at + dur * 0.2); g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    o.connect(g); g.connect(p); p.connect(master); o.start(at); o.stop(at + dur + 0.02);
  }
  function bird(vl) {
    const at = ctx.currentTime + 0.02, pn = Math.random() * 2 - 1, kind = Math.floor(Math.random() * 3), base = 2300 + Math.random() * 1800;
    if (kind === 0) { const n = 2 + Math.floor(Math.random() * 4); for (let i = 0; i < n; i++) chirp(at + i * 0.13, base * (1 + Math.random() * 0.1), base * 1.5, 0.09, vl, pn); }
    else if (kind === 1) { for (let i = 0; i < 3; i++) { chirp(at + i * 0.22, base * 0.8, base * 1.4, 0.16, vl, pn); chirp(at + i * 0.22 + 0.1, base * 1.5, base * 1.0, 0.1, vl * 0.8, pn); } }
    else { chirp(at, base, base * 1.8, 0.28, vl, pn); chirp(at + 0.3, base * 1.7, base * 0.9, 0.22, vl * 0.9, pn); }
  }

  /* meong: gelombang gigi gergaji lewat dua formant, nada naik lalu turun */
  function meow(vl, pn) {
    if (!ctx || !on) return; const at = ctx.currentTime + 0.02, dur = 0.75 + Math.random() * 0.25, f = 420 + Math.random() * 120;
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(f, at); o.frequency.linearRampToValueAtTime(f * 1.65, at + dur * 0.35); o.frequency.linearRampToValueAtTime(f * 1.05, at + dur);
    const f1 = ctx.createBiquadFilter(), f2 = ctx.createBiquadFilter(); f1.type = f2.type = 'bandpass'; f1.Q.value = f2.Q.value = 5;
    f1.frequency.setValueAtTime(700, at); f1.frequency.linearRampToValueAtTime(1100, at + dur * 0.4); f1.frequency.linearRampToValueAtTime(800, at + dur);
    f2.frequency.setValueAtTime(1900, at); f2.frequency.linearRampToValueAtTime(2600, at + dur * 0.4); f2.frequency.linearRampToValueAtTime(2000, at + dur);
    const g = ctx.createGain(), p = pan(pn); g.gain.setValueAtTime(0.0001, at); g.gain.exponentialRampToValueAtTime(vl, at + 0.09); g.gain.setValueAtTime(vl, at + dur * 0.55); g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    const vib = ctx.createOscillator(); vib.frequency.value = 6; const vg = ctx.createGain(); vg.gain.value = 8; vib.connect(vg); vg.connect(o.frequency); vib.start(at); vib.stop(at + dur + 0.05);
    o.connect(f1); o.connect(f2); const mix = ctx.createGain(); mix.gain.value = 0.55; f1.connect(mix); f2.connect(mix); mix.connect(g); g.connect(p); p.connect(master); o.start(at); o.stop(at + dur + 0.05);
  }

  function ramp(g, v, tc = 0.6) { g.gain.setTargetAtTime(v, ctx.currentTime, tc); }

  return {
    init,
    get enabled() { return on; },
    setEnabled(v) { on = v; if (ctx) master.gain.setTargetAtTime(on ? vol : 0, ctx.currentTime, 0.1); },
    meow,
    /* s: {day 0..1, world bool, catSub bool, catDist m, catPan -1..1} */
    update(dt, s) {
      if (!ctx || !on) return; t += dt;
      const inW = s.world ? 1 : 0.25;
      const gust = 0.5 + 0.5 * Math.sin(t * 0.23) * Math.sin(t * 0.071 + 1.3);
      ramp(windG, (0.05 + 0.1 * gust) * inW); windF.frequency.setTargetAtTime(260 + 420 * gust, ctx.currentTime, 0.8);
      ramp(leafG, (0.004 + 0.02 * gust * gust) * inW * (0.4 + 0.6 * s.day));
      ramp(cricG, 0.012 * Math.max(0, 1 - s.day * 2.2) * inW);
      ramp(purrG, s.catSub ? 0.22 : 0, 0.4);
      if (s.world && s.day > 0.35) {
        nextBird -= dt;
        if (nextBird <= 0) { bird(0.035 + Math.random() * 0.03); if (birdFlock > 0) { birdFlock--; nextBird = 0.4 + Math.random() * 0.9; } else { birdFlock = Math.random() < 0.3 ? 2 + Math.floor(Math.random() * 3) : 0; nextBird = 3 + Math.random() * 7; } }
      }
      if (s.world && s.catDist < 9) {
        nextMeow -= dt;
        if (nextMeow <= 0) { meow(0.16 * Math.max(0.15, 1 - s.catDist / 10), s.catPan); nextMeow = 9 + Math.random() * 14; }
      }
    },
  };
}
