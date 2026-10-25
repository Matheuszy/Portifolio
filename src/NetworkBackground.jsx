import { useEffect, useRef } from "react";

const RED = [255, 31, 61];
const CYAN = [34, 211, 238];
const WHITE = [245, 242, 247];
const TONES = { red: RED, ai: CYAN };

const LINK_DIST = 130;
const MOUSE_R = 170;
const FOCUS_R = 240;

const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

/**
 * Fundo em rede de nós (canvas). Sutil por padrão; reage a:
 *  - ponteiro: nós próximos se ligam ao cursor e se afastam levemente
 *  - hover em [data-bg="red|ai"]: nós se agrupam em volta do elemento
 *  - clique: onda de pulso (do ponto clicado, ou do centro do elemento [data-bg])
 */
export default function NetworkBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let nodes = [];
    let raf = 0;
    let last = 0;
    let focusEl = null;
    const mouse = { x: -9999, y: -9999, active: false };
    const pulses = [];

    const makeNodes = () => {
      const count = Math.min(w < 700 ? 28 : 70, Math.round((w * h) / 20000));
      nodes = Array.from({ length: count }, () => {
        const r = Math.random();
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          color: r < 0.22 ? CYAN : r < 0.5 ? RED : WHITE,
          glow: 0,
          glowColor: RED,
        };
      });
    };

    const resize = () => {
      const widthChanged = innerWidth !== w;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = innerWidth;
      h = innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (widthChanged || !nodes.length) makeNodes();
      if (reduce) draw(0);
    };

    const focusInfo = () => {
      if (!focusEl || !focusEl.isConnected) return null;
      const r = focusEl.getBoundingClientRect();
      if (r.bottom < 0 || r.top > h) return null;
      return {
        rect: r,
        cx: r.left + r.width / 2,
        cy: r.top + r.height / 2,
        color: TONES[focusEl.dataset.bg] || RED,
      };
    };

    const clampToRect = (r, x, y, pad) => ({
      x: Math.max(r.left - pad, Math.min(x, r.right + pad)),
      y: Math.max(r.top - pad, Math.min(y, r.bottom + pad)),
    });

    function draw(dt) {
      ctx.clearRect(0, 0, w, h);
      const focus = focusInfo();

      for (let i = pulses.length - 1; i >= 0; i--) {
        pulses[i].r += pulses[i].speed * dt;
        if (pulses[i].r > pulses[i].max) pulses.splice(i, 1);
      }

      for (const n of nodes) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < -20) n.x = w + 20;
        else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        else if (n.y > h + 20) n.y = -20;
        n.glow *= Math.pow(0.94, dt);

        if (mouse.active) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d = Math.hypot(dx, dy) || 1;
          if (d < MOUSE_R) {
            const push = (1 - d / MOUSE_R) * 0.35 * dt;
            n.x += (dx / d) * push;
            n.y += (dy / d) * push;
          }
        }

        if (focus) {
          const p = clampToRect(focus.rect, n.x, n.y, 18);
          const dx = p.x - n.x;
          const dy = p.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d > 2 && d < FOCUS_R) {
            const pull = (1 - d / FOCUS_R) * 0.5 * dt;
            n.x += (dx / d) * pull;
            n.y += (dy / d) * pull;
            if (n.glow < 0.45) {
              n.glow = 0.45;
              n.glowColor = focus.color;
            }
          }
        }

        for (const p of pulses) {
          if (Math.abs(Math.hypot(n.x - p.x, n.y - p.y) - p.r) < 18) {
            n.glow = 1;
            n.glowColor = p.color;
          }
        }
      }

      /* links */
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > LINK_DIST) continue;
          const k = 1 - d / LINK_DIST;
          const hot = a.glow > b.glow ? a : b;
          const alpha = k * 0.09 + k * hot.glow * 0.3;
          ctx.strokeStyle = hot.glow > 0.05 ? rgba(hot.glowColor, alpha) : rgba(WHITE, alpha);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      /* links node → cursor / node → focused element */
      const mouseColor = focus ? focus.color : RED;
      for (const n of nodes) {
        if (mouse.active) {
          const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (d < MOUSE_R) {
            ctx.strokeStyle = rgba(mouseColor, (1 - d / MOUSE_R) * 0.28);
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
        if (focus) {
          const p = clampToRect(focus.rect, n.x, n.y, 0);
          const d = Math.hypot(p.x - n.x, p.y - n.y);
          if (d > 1 && d < 150) {
            ctx.strokeStyle = rgba(focus.color, (1 - d / 150) * 0.3);
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        }
      }

      /* nodes */
      for (const n of nodes) {
        const c = n.glow > 0.05 ? n.glowColor : n.color;
        ctx.fillStyle = rgba(c, 0.28 + n.glow * 0.6);
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4 + n.glow * 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      /* pulses */
      for (const p of pulses) {
        ctx.strokeStyle = rgba(p.color, (1 - p.r / p.max) * 0.35);
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      /* soft glow under cursor */
      if (mouse.active) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 130);
        g.addColorStop(0, rgba(mouseColor, 0.07));
        g.addColorStop(1, rgba(mouseColor, 0));
        ctx.fillStyle = g;
        ctx.fillRect(mouse.x - 130, mouse.y - 130, 260, 260);
      }
    }

    const loop = (t) => {
      const dt = Math.min((t - last) / 16.67 || 1, 3);
      last = t;
      draw(dt);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      focusEl = e.target.closest?.("[data-bg]") || null;
      if (focusEl) {
        const r = focusEl.getBoundingClientRect();
        focusEl.style.setProperty("--mx", `${e.clientX - r.left}px`);
        focusEl.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };

    const onLeave = (e) => {
      if (e.relatedTarget) return;
      mouse.active = false;
      focusEl = null;
    };

    const onUp = (e) => {
      if (e.pointerType === "mouse") return;
      mouse.active = false;
      focusEl = null;
    };

    const onClick = (e) => {
      const el = e.target.closest?.("[data-bg]");
      if (el) {
        const r = el.getBoundingClientRect();
        pulses.push({
          x: r.left + r.width / 2,
          y: r.top + r.height / 2,
          r: 0,
          max: 620,
          speed: 9,
          color: TONES[el.dataset.bg] || RED,
        });
      } else {
        pulses.push({ x: e.clientX, y: e.clientY, r: 0, max: 380, speed: 7, color: RED });
      }
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (!reduce) {
      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerup", onUp, { passive: true });
      document.addEventListener("pointerdown", onMove, { passive: true });
      document.addEventListener("click", onClick);
      document.addEventListener("mouseout", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
      last = performance.now();
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerdown", onMove);
      document.removeEventListener("click", onClick);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="bg-canvas" aria-hidden="true" />;
}
