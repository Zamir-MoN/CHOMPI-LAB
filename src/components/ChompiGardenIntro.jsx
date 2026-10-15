import React, { useEffect, useRef } from 'react';

/**
 * Procedural Botanical Type Garden Engine for CHOMPI.LAB
 * Stems, vines, thorns, leaves, and blooming white roses grow out of "CHOMPI.LAB"
 * Built with vanilla HTML5 Canvas + procedural math from Type Garden
 */
export const ChompiGardenIntro = ({
  text = 'CHOMPI.LAB',
  onBloomReady,
  opacity = 1,
}) => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const stateRef = useRef({
    t0: 0,
    letters: [],
    perch: [],
    mx: null,
    my: null,
    W: 0,
    H: 0,
    dpr: 1,
    Sd: 0,
    St: 0,
    cache: {},
    readyTriggered: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const F = '"Playfair Display", Georgia, serif';

    // Monochrome Palette matching Image 2
    const C = {
      bg: '#000000',
      red: '#F2F2F2',    // Petals
      blue: '#787878',   // Stems & leaves
      line: '#1E1E1E',   // Flower highlights
      text: '#FFFFFF',   // Typography
      vein: '#000000',   // Leaf central veins
    };

    // Math & procedural utilities
    const h = (n) => {
      const x = Math.sin(n) * 43758.5453;
      return x - Math.floor(x);
    };
    const spr = (t, k = 7, w = 16) => {
      if (t <= 0) return 0;
      return 1 - Math.exp(-t * k) * Math.cos(t * w);
    };
    const eo = (t) => {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      return 1 - Math.pow(1 - t, 3);
    };
    const rng = (seed) => {
      let s = seed | 0;
      return () => {
        s = (s + 0x6d2b79f5) | 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    };
    const bez = (a, b, c, d, n) => {
      const P = [];
      for (let i = 0; i <= n; i++) {
        const t = i / n,
          u = 1 - t;
        P.push([
          u * u * u * a[0] + 3 * u * u * t * b[0] + 3 * u * t * t * c[0] + t * t * t * d[0],
          u * u * u * a[1] + 3 * u * u * t * b[1] + 3 * u * t * t * c[1] + t * t * t * d[1],
        ]);
      }
      return P;
    };
    const at = (P, u) => {
      const n = P.length;
      const i = Math.min(n - 2, Math.max(1, Math.round(u * (n - 1))));
      return [P[i], Math.atan2(P[i + 1][1] - P[i - 1][1], P[i + 1][0] - P[i - 1][0])];
    };
    const jit = (id, f, amp) => {
      if (!amp) return [0, 0, 0];
      return [
        (h(id * 1.37 + f * 7.13) * 2 - 1) * amp,
        (h(id * 2.71 + f * 3.11) * 2 - 1) * amp,
        (h(id * 5.3 + f * 1.7) * 2 - 1) * 0.035,
      ];
    };
    const path = (c, p, closed) => {
      const n = p.length;
      if (n < 2) return;
      const m = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      if (closed) {
        const s = m(p[n - 1], p[0]);
        c.moveTo(s[0], s[1]);
        for (let i = 0; i < n; i++) {
          const q = m(p[i], p[(i + 1) % n]);
          c.quadraticCurveTo(p[i][0], p[i][1], q[0], q[1]);
        }
        c.closePath();
      } else {
        c.moveTo(p[0][0], p[0][1]);
        for (let i = 1; i < n - 1; i++) {
          const q = m(p[i], p[i + 1]);
          c.quadraticCurveTo(p[i][0], p[i][1], q[0], q[1]);
        }
        c.lineTo(p[n - 1][0], p[n - 1][1]);
      }
    };
    const vine = (base, dir, len, amp, waves, ph, bend, n = 40) => {
      const P = [[base[0], base[1]]],
        step = len / n;
      let x = base[0],
        y = base[1];
      for (let i = 1; i <= n; i++) {
        const u = i / n;
        const a = dir + bend * u + amp * Math.sin(u * Math.PI * waves + ph) * Math.min(1, u * 3);
        x += Math.cos(a) * step;
        y += Math.sin(a) * step;
        P.push([x, y]);
      }
      return P;
    };
    const curl = (P, sign, rad) => {
      const n = P.length,
        e = P[n - 1],
        a = Math.atan2(e[1] - P[n - 2][1], e[0] - P[n - 2][0]);
      const c = [e[0] - Math.sin(a) * sign * rad, e[1] + Math.cos(a) * sign * rad];
      const a0 = Math.atan2(e[1] - c[1], e[0] - c[0]);
      for (let i = 1; i <= 14; i++) {
        const u = i / 14,
          t = a0 + sign * u * Math.PI * 1.6,
          rr = rad * (1 - 0.5 * u);
        P.push([c[0] + Math.cos(t) * rr, c[1] + Math.sin(t) * rr]);
      }
      return P;
    };
    const weave = (r, startLayer) => {
      const cuts = [];
      const nc = 1 + Math.floor(r() * 3);
      for (let i = 0; i < nc; i++) cuts.push(0.15 + r() * 0.7);
      cuts.sort((a, b) => a - b);
      const segs = [];
      let u0 = 0,
        layer = startLayer;
      for (const c of cuts) {
        if (c <= u0) continue;
        segs.push({ u0, u1: c, layer });
        if (r() < 0.3) {
          const g = 0.02 + r() * 0.03;
          u0 = Math.min(0.98, c + g);
        } else u0 = c;
        layer = 1 - layer;
      }
      segs.push({ u0, u1: 1, layer });
      return segs;
    };
    const layerAt = (segs, u) => {
      for (const s of segs) if (u >= s.u0 && u <= s.u1) return s.layer;
      return segs[segs.length - 1].layer;
    };

    const backend = (g) => ({
      fill: (p, col) => {
        g.beginPath();
        path(g, p, true);
        g.fillStyle = col;
        g.fill();
      },
      stroke: (p, col, w) => {
        g.beginPath();
        path(g, p, false);
        g.strokeStyle = col;
        g.lineWidth = w;
        g.lineCap = 'round';
        g.lineJoin = 'round';
        g.stroke();
      },
      rect: (x, y, w, h, col) => {
        g.fillStyle = col;
        g.fillRect(x, y, w, h);
      },
      text: (ch, x, y, S, col) => {
        g.font = `700 ${S}px ${F}`;
        g.textAlign = 'center';
        g.textBaseline = 'alphabetic';
        g.fillStyle = col;
        g.fillText(ch, x, y);
      },
    });

    const mw = (ch) => {
      if (stateRef.current.cache[ch] != null) return stateRef.current.cache[ch];
      ctx.font = `700 100px ${F}`;
      let w = ctx.measureText(ch).width / 100;
      if (ch === ' ' || ch === '.') w *= 1.1;
      return (stateRef.current.cache[ch] = w);
    };

    const wordParams = (ws) => {
      const r = rng(ws * 7 + 13);
      return {
        roseP: 0.38 + r() * 0.25,
        leafy: 0.85 + r() * 0.5,
        dens: 1.1,
        lean: (r() - 0.5) * 0.4,
        big: 0.95 + r() * 0.35,
        curvy: 0.85 + r() * 0.5,
        bridgeP: 0.75,
        w: 0.5,
      };
    };

    const grow = (r, E, nid, p, o) => {
      const tip = o.tip || (r() < p.roseP ? 'rose' : r() < 0.45 ? 'fan' : r() < 0.6 ? 'leaf' : 'curl');
      let P =
        o.pts ||
        vine(
          o.base,
          o.dir,
          o.len,
          (0.35 + r() * 0.45) * p.curvy,
          1 + r() * 1.6,
          r() * 6.28,
          (r() - 0.5) * 1.2,
          40
        );
      if (tip === 'curl') P = curl(P, r() < 0.5 ? -1 : 1, 0.05 + r() * 0.05);
      const segs = weave(r, o.layer0 != null ? o.layer0 : r() < 0.5 ? 0 : 1);
      const dur = Math.max(320, (o.len || 0.8) * 620);
      const thorns = [];
      const nt = Math.floor(r() * 2.5);
      for (let i = 0; i < nt; i++) thorns.push({ u: 0.15 + r() * 0.65, s: r() < 0.5 ? -1 : 1 });
      E.push({ t: 'stem', id: nid(), pts: P, segs, d0: o.d0, dur, w: o.depth ? 0.82 : 1, thorns });

      const nl = Math.floor(r() * 2.8 * p.leafy);
      let sd = r() < 0.5 ? -1 : 1;
      for (let i = 0; i < nl; i++) {
        const u = 0.25 + r() * 0.6,
          [q, a] = at(P, u);
        sd = -sd;
        E.push({
          t: 'leaf',
          id: nid(),
          x: q[0],
          y: q[1],
          a: a + sd * (0.55 + r() * 0.5),
          L: (0.14 + r() * 0.2) * (o.depth ? 0.8 : 1),
          bend: (r() - 0.5) * 1.2,
          layer: layerAt(segs, u),
          d0: o.d0 + dur * u,
        });
      }

      const [tp, ta] = at(P, 1),
        td = o.d0 + dur * 0.8,
        tl = layerAt(segs, 1);
      if (tip === 'rose') {
        const R = (0.14 + r() * 0.16) * p.big * (o.depth ? 0.75 : 1);
        const over = tp[1] > -0.78 && tp[1] < 0.05 && Math.abs(tp[0]) < p.w * 0.5;
        const layer = over ? (r() < 0.22 ? 1 : 0) : r() < 0.6 ? 1 : tl;
        E.push({
          t: 'rose',
          id: nid(),
          x: tp[0],
          y: tp[1],
          R,
          rot: (r() - 0.5) * 1.0,
          ph1: r() * 6.28,
          ph2: r() * 6.28,
          turns: 1.8 + r() * 1,
          layer,
          d0: td,
        });
        if (r() < 0.25) {
          const oo = ta + (r() < 0.5 ? 1 : -1) * 1.3;
          E.push({
            t: 'rose',
            id: nid(),
            x: tp[0] + Math.cos(oo) * R * 1.4,
            y: tp[1] + Math.sin(oo) * R * 1.4,
            R: R * (0.6 + r() * 0.3),
            rot: (r() - 0.5) * 1.2,
            ph1: r() * 6.28,
            ph2: r() * 6.28,
            turns: 1.8 + r(),
            layer,
            d0: td + 120,
          });
        }
      } else if (tip === 'fan') {
        const spread = 0.6 + r() * 0.3;
        for (let j = 0; j < 2; j++) {
          E.push({
            t: 'leaf',
            id: nid(),
            x: tp[0],
            y: tp[1],
            a: ta + (j - 0.5) * spread,
            L: 0.2 + r() * 0.2,
            bend: (j - 0.5) * 0.8,
            layer: tl,
            d0: td + j * 60,
          });
        }
      } else if (tip === 'leaf') {
        E.push({
          t: 'leaf',
          id: nid(),
          x: tp[0],
          y: tp[1],
          a: ta + (r() - 0.5) * 0.3,
          L: 0.16 + r() * 0.16,
          bend: r() - 0.5,
          layer: tl,
          d0: td,
        });
      }

      if (!o.depth && r() < 0.3) {
        const u = 0.35 + r() * 0.35,
          [q, a] = at(P, u);
        grow(r, E, nid, p, {
          base: q,
          dir: a + (r() < 0.5 ? -1 : 1) * (0.7 + r() * 0.4),
          len: (o.len || 0.8) * (0.35 + r() * 0.2),
          d0: o.d0 + dur * u,
          depth: 1,
          layer0: layerAt(segs, u),
        });
      }
      return P;
    };

    const gen = (l) => {
      const r = rng((l.ws ^ Math.imul(l.wi + 1, 2654435761)) + 42);
      const p = wordParams(l.ws),
        E = [];
      let k0 = 0;
      const nid = () => l.id * 100 + k0++;
      const w = mw(l.ch),
        inX = () => (r() - 0.5) * w * 0.7;
      p.w = w;

      const nUp = 1 + (r() < 0.5 * p.dens ? 1 : 0);
      for (let i = 0; i < nUp; i++) {
        grow(r, E, nid, p, {
          base: [inX(), -r() * 0.3],
          dir: -Math.PI / 2 + p.lean * 0.5 + (r() - 0.5) * 0.7,
          len: 0.6 + r() * 0.5,
          d0: 40 + i * 130,
          tip: l.wi === 0 && i === 0 ? 'rose' : null,
        });
      }

      if (r() < 0.4 * p.dens) {
        grow(r, E, nid, p, {
          base: [inX(), -0.1 - r() * 0.35],
          dir: Math.PI / 2 + (r() - 0.5) * 0.8,
          len: 0.35 + r() * 0.35,
          d0: 160,
        });
      }

      if (l.prev && r() < p.bridgeP) {
        const px = -(mw(l.prev.ch) + w) / 2;
        const a = [inX(), -0.05 - r() * 0.55],
          b = [px + (r() - 0.5) * 0.25, -0.05 - r() * 0.55];
        const bulge = (r() < 0.55 ? -1 : 1) * (0.4 + r() * 0.4),
          dx = b[0] - a[0];
        let P = bez(a, [a[0] + dx * 0.15, a[1] + bulge], [b[0] - dx * 0.15, b[1] + bulge * 0.9], b, 40);
        if (r() < 0.45) P = P.slice(0, Math.floor(P.length * (0.7 + r() * 0.2)));
        grow(r, E, nid, p, {
          pts: P,
          len: Math.abs(dx) + Math.abs(bulge),
          d0: 90,
          tip: r() < 0.5 ? 'curl' : r() < 0.5 ? 'leaf' : 'rose',
        });
      }

      if (l.wi === 0) {
        grow(r, E, nid, p, {
          base: [-w * 0.3, -0.15 - r() * 0.4],
          dir: Math.PI + (r() - 0.5) * 1.2,
          len: 0.45 + r() * 0.3,
          d0: 120,
          tip: 'curl',
        });
      }

      l.els = E;
      l.endEls = null;

      const T = [],
        tr = rng(l.id * 977 + 101);
      grow(tr, T, () => l.id * 100 + 90 + T.length, p, {
        base: [w * 0.25, -0.1 - tr() * 0.45],
        dir: (tr() - 0.5) * 1.4,
        len: 0.45 + tr() * 0.25,
        d0: 0,
        tip: 'curl',
        depth: 1,
      });
      l.tend = T.filter((e) => e.t === 'stem').slice(0, 1);
    };

    const strokeRange = (B, P, a, b, col, w) => {
      const n = P.length - 1,
        ia = a * n,
        ib = b * n;
      const lerp = (t) => {
        const i = Math.min(n - 1, Math.floor(t)),
          f = t - i;
        return [P[i][0] + (P[i + 1][0] - P[i][0]) * f, P[i + 1][1] + (P[i + 1][1] - P[i][1]) * f];
      };
      const pts = [lerp(ia)];
      for (let i = Math.floor(ia) + 1; i < ib; i++) pts.push(P[i]);
      pts.push(lerp(ib));
      if (pts.length >= 2) B.stroke(pts, col, w);
    };

    const thorn = (B, P, u, s, S) => {
      const [p, a] = at(P, u),
        d = a + s * 2.3,
        L = S * 0.045;
      B.stroke([p, [p[0] + Math.cos(d) * L, p[1] + Math.sin(d) * L]], C.blue, S * 0.022);
    };

    const leaf = (B, bx, by, a, L, bend) => {
      if (L < 0.5) return;
      const ca = Math.cos(a),
        sa = Math.sin(a),
        px = -sa,
        py = ca;
      const ax = (u) => {
        const b = Math.sin(Math.PI * u) * bend * 0.15 * L;
        return [bx + ca * u * L + px * b, by + sa * u * L + py * b];
      };
      const hw = (u) => L * 0.18 * Math.sin(Math.PI * Math.pow(u, 0.8));
      const N = 12,
        s1 = [],
        s2 = [];
      for (let i = 0; i <= N; i++) {
        const u = i / N,
          c = ax(u),
          w = hw(u);
        s1.push([c[0] + px * w, c[1] + py * w]);
        s2.push([c[0] - px * w, c[1] - py * w]);
      }
      const tip = ax(1),
        base = ax(0);
      B.fill([base, ...s1.slice(1, N), tip, tip, ...s2.slice(1, N).reverse(), base], C.blue);
      if (L > 6) {
        const v = [];
        for (let i = 0; i <= 8; i++) v.push(ax(0.08 + (0.72 * i) / 8));
        B.stroke(v, C.vein, Math.max(0.8, L * 0.03));
      }
    };

    const rose = (B, cx, cy, R, rot, e, a) => {
      const cr = Math.cos(rot),
        sr = Math.sin(rot);
      const T = (x, y) => [cx + x * cr - y * sr, cy + x * sr + y * cr];
      const P = [
        [0, -0.36, 0.56, 0.54, 0, 0, 0],
        [-0.5, -0.06, 0.6, 0.6, -0.35, 0, 0],
        [0.52, -0.06, 0.6, 0.6, 0.35, 0, 0],
        [-0.42, 0.3, 0.62, 0.48, 0.2, 0.12, 1],
        [0.47, 0.3, 0.62, 0.48, -0.2, 0.12, 1],
        [0.05, 0.42, 0.56, 0.38, 0, 0.14, 0],
      ];
      const ax0 = 0,
        ay0 = 0.5,
        lw = Math.max(0.8, R * 0.045),
        st = 85;
      P.forEach((q, i) => {
        const s = spr((a - i * st) / 1000, 8, 14);
        if (s <= 0.001) return;
        const open = (1 - Math.min(1, s)) * (q[0] < 0 ? 0.5 : -0.5),
          ang = q[4] + open,
          ca = Math.cos(ang),
          sa = Math.sin(ang);
        const pt = (th) => {
          const rr = 1 + 0.08 * Math.sin(3 * th + e.ph1 + i) + 0.04 * Math.sin(5 * th + e.ph2);
          const lx = Math.cos(th) * q[2] * rr,
            ly = Math.sin(th) * q[3] * rr;
          const px = q[0] + lx * ca - ly * sa,
            py = q[1] + lx * sa + ly * ca;
          return T((ax0 + (px - ax0) * s) * R, (ay0 + (py - ay0) * s) * R);
        };
        const pts = [];
        for (let k = 0; k < 26; k++) pts.push(pt((k / 26) * Math.PI * 2));
        B.fill(pts, C.red);
        if (q[6] && R >= 12 && s > 0.4) {
          const arc = [];
          for (let k = 0; k <= 14; k++) arc.push(pt(Math.PI * (1.18 + (0.64 * k) / 14)));
          strokeRange(B, arc, 0, Math.min(1, (s - 0.4) / 0.5), C.line, lw * 0.8);
        }
      });
      const fr = eo((a - P.length * st - 80) / 520);
      if (fr > 0 && R > 3) {
        const sp = [],
          scl = [];
        const turns = R < 20 ? Math.min(e.turns, 1.3) : R < 32 ? e.turns * 0.8 : e.turns;
        for (let i = 0; i <= 70; i++) {
          const u = i / 70,
            th = e.ph1 + u * turns * Math.PI * 2,
            rr = R * (0.08 + 0.57 * u);
          sp.push(T(Math.cos(th) * rr * 1.05, Math.sin(th) * rr * 0.72 - 0.12 * R));
        }
        strokeRange(B, sp, 0, fr, C.line, lw);
        if (R >= 14) {
          for (let i = 0; i <= 36; i++) {
            const u = i / 36;
            scl.push(T((-0.72 + 1.5 * u) * R, 0.36 * R + 0.16 * R * Math.abs(Math.sin(u * Math.PI * 3))));
          }
          strokeRange(B, scl, 0, fr, C.line, lw);
        }
      }
    };

    // Layout builder
    const buildLayout = () => {
      const rect = canvas.getBoundingClientRect();
      const d = window.devicePixelRatio || 1;
      const W = rect.width;
      const H = rect.height;
      stateRef.current.W = W;
      stateRef.current.H = H;
      stateRef.current.dpr = d;
      canvas.width = Math.round(W * d);
      canvas.height = Math.round(H * d);

      const L = [];
      let prev = null,
        uid = 1;
      const wordSeed = 998244353;
      for (const ch of text) {
        if (ch === ' ') {
          const sp = { ch: ' ', id: uid++, els: [] };
          L.push(sp);
          prev = sp;
          continue;
        }
        const same = prev && prev.ch !== ' ';
        const l = {
          ch,
          id: uid++,
          ws: same ? prev.ws : wordSeed,
          wi: same ? prev.wi + 1 : 0,
          prev: same ? prev : null,
        };
        gen(l);
        L.push(l);
        prev = l;
      }

      // 1. Initial responsive typography scale
      const ws = L.map((l) => mw(l.ch));
      const totalUnits = ws.reduce((a, b) => a + b, 0);
      let S = Math.min(H * 0.44, (W * 0.84) / Math.max(1, totalUnits));
      if (W < 640) S = Math.min(H * 0.32, (W * 0.88) / Math.max(1, totalUnits));

      let totalWidth = totalUnits * S;
      let startX = W / 2 - totalWidth / 2;
      const baselineY = H / 2 + S * 0.32;

      L.forEach((l, i) => {
        const w = ws[i] * S;
        l.tx = startX + w / 2;
        l.ty = baselineY;
        l.tw = w;
        l.birth = 200 + i * 40;
        startX += w;
      });

      // 2. Measure true visual bounds of all typography, stems, leaves and roses
      let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
      const addP = (l, x, y, r = 0) => {
        const X = l.tx + x * S,
          Y = l.ty + y * S,
          R = r * S;
        x0 = Math.min(x0, X - R);
        x1 = Math.max(x1, X + R);
        y0 = Math.min(y0, Y - R);
        y1 = Math.max(y1, Y + R);
      };

      for (const l of L) {
        if (l.ch === ' ') continue;
        addP(l, -l.tw / S / 2, -0.75);
        addP(l, l.tw / S / 2, 0.1);
        const all = [...(l.els || []), ...(l.endEls || [])];
        for (const e of all) {
          if (e.t === 'stem') e.pts.forEach((q) => addP(l, q[0], q[1], 0.03));
          else if (e.t === 'leaf') addP(l, e.x, e.y, e.L);
          else if (e.t === 'rose') addP(l, e.x, e.y, e.R * 1.35);
        }
      }

      // 3. Compute scale & positioning to guarantee 100% visibility with zero edge clipping
      const padX = Math.max(16, W * 0.035);
      const padTop = Math.max(14, H * 0.06);
      const padBottom = Math.max(10, H * 0.04);
      const availW = Math.max(10, W - 2 * padX);
      const availH = Math.max(10, H - padTop - padBottom);

      const gw = Math.max(1, x1 - x0);
      const gh = Math.max(1, y1 - y0);
      const gcx = (x0 + x1) / 2;

      // Fit completely within canvas bounds
      const k = Math.min(availW / gw, availH / gh);
      S = S * k;

      // Center horizontally and anchor baseline near the bottom so letters sit comfortably right above subtext
      const extraH = Math.max(0, availH - gh * k);
      const shiftX = W / 2 - gcx * k;
      const shiftY = (H - padBottom - extraH * 0.35) - y1 * k;

      L.forEach((l) => {
        l.tx = l.tx * k + shiftX;
        l.ty = l.ty * k + shiftY;
        l.tw = l.tw * k;
        l.x = l.tx;
        l.y = l.ty;
      });

      stateRef.current.letters = L;
      stateRef.current.Sd = S;
    };

    // Resize listener
    const onResize = () => buildLayout();
    window.addEventListener('resize', onResize);

    // Initial setup after font check
    if (document.fonts) {
      document.fonts.load(`700 100px ${F}`).then(() => {
        stateRef.current.cache = {};
        buildLayout();
      }).catch(() => buildLayout());
    } else {
      buildLayout();
    }

    stateRef.current.t0 = performance.now();

    // Render loop
    const renderFrame = () => {
      animRef.current = requestAnimationFrame(renderFrame);
      const now = performance.now();
      const elapsed = now - stateRef.current.t0;
      const { W, H, dpr, Sd, letters } = stateRef.current;
      if (!W || !H || !Sd) return;

      if (!stateRef.current.readyTriggered && elapsed > 2400) {
        stateRef.current.readyTriggered = true;
        if (onBloomReady) onBloomReady();
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      const B = backend(ctx);
      const f = Math.floor(now / 120);
      const amp = Math.max(0.7, Sd * 0.008);

      // Subtle breathing organic sway
      const ph = (now / 3200) * Math.PI * 2;
      const warp = (x, y, l) => {
        const h = Math.max(0, (l.y - y) / Sd);
        return [
          x + Math.sin(ph + l.x * 0.004 + h * 1.1) * Sd * 0.02 * h,
          y + Math.cos(ph + x * 0.003) * Sd * 0.006 * h,
        ];
      };

      const drawLayer = (layer) => {
        for (const l of letters) {
          if (l.ch === ' ' || !l.els) continue;
          const age = now - (stateRef.current.t0 + l.birth);
          if (age < 0) continue;

          for (const e of l.els) {
            const j = jit(e.id, f, amp);
            if (e.t === 'stem') {
              const fr = eo((age - e.d0) / e.dur);
              if (fr <= 0) continue;
              const P = e.pts.map((p) => warp(l.x + p[0] * Sd + j[0], l.y + p[1] * Sd + j[1], l));
              for (const sg of e.segs) {
                if (sg.layer !== layer) continue;
                const b = Math.min(sg.u1, fr);
                if (b <= sg.u0) continue;
                strokeRange(B, P, sg.u0, b, C.blue, Sd * 0.022 * (e.w || 1));
              }
              for (const th of e.thorns) {
                if (fr > th.u && layerAt(e.segs, th.u) === layer) thorn(B, P, th.u, th.s, Sd);
              }
            } else if (e.layer === layer) {
              const p = warp(l.x + e.x * Sd + j[0], l.y + e.y * Sd + j[1], l);
              if (e.t === 'leaf') {
                const sc = spr((age - e.d0) / 1000, 7, 15);
                if (sc > 0) leaf(B, p[0], p[1], e.a + j[2], e.L * Sd * sc, e.bend);
              } else if (e.t === 'rose') {
                const a = age - e.d0;
                if (a > 0) rose(B, p[0], p[1], e.R * Sd, e.rot + j[2], e, a);
              }
            }
          }
        }
      };

      // Layer 0: Stems & petals behind typography
      drawLayer(0);

      // Foreground typography "CHOMPI.LAB"
      for (const l of letters) {
        if (l.ch !== ' ') {
          const age = now - (stateRef.current.t0 + l.birth);
          if (age > -80) {
            const letterAlpha = Math.min(1, Math.max(0, (age + 80) / 400));
            ctx.globalAlpha = letterAlpha;
            B.text(l.ch, l.x, l.y, Sd, C.text);
            ctx.globalAlpha = 1;
          }
        }
      }

      // Layer 1: Stems & petals intertwining in front of typography
      drawLayer(1);
    };

    renderFrame();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [text, onBloomReady]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
        pointerEvents: 'none',
        transition: 'opacity 0.35s ease',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};

export default ChompiGardenIntro;
