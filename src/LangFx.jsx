import { useEffect } from "react";
import { useI18n } from "./i18n";

const GLYPHS = "01<>/{}[]#*+=_~λΣΔΩ≈∑abcdef0123456789ABCDEF";
const SCRAMBLE_MAX = 48;
const SWEEP = 750;
const RESOLVE = 380;

const SELECTOR = [
  "h1", "h2", "h3", "h4", "p",
  ".hero-eyebrow", ".section-label", ".nav-links button",
  ".btn-primary", ".btn-secondary", ".stat-row span", ".stat-row strong",
  ".project-category", ".modal-category", ".modal-github", ".arch-node",
  ".projects-count", ".freelance-client-badge span", ".contact-link", ".footer span",
].join(",");

const randomGlyph = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];

function scramble(text, keep) {
  let out = text.slice(0, keep);
  for (let i = keep; i < text.length; i++) {
    const c = text[i];
    out += c === " " || c === "\n" ? c : randomGlyph();
  }
  return out;
}

function decodeVisibleText() {
  const vh = window.innerHeight;
  const seen = new Set();
  const scrambles = [];
  const reveals = [];

  document.querySelectorAll(SELECTOR).forEach((el) => {
    if (el.closest(".hud-terminal, .lang-fx")) return;
    const r = el.getBoundingClientRect();
    if (r.bottom < 0 || r.top > vh || r.width === 0) return;

    const delay = Math.max(0, Math.min(1, r.top / vh)) * SWEEP;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let node;
    let long = false;
    while ((node = walker.nextNode())) {
      if (seen.has(node) || !node.nodeValue.trim()) continue;
      seen.add(node);
      if (node.nodeValue.length > SCRAMBLE_MAX) long = true;
      else scrambles.push({ node, el, final: node.nodeValue, delay });
    }

    if (long && !el.hasAttribute("data-fx")) {
      el.style.setProperty("--fx-delay", `${delay}ms`);
      el.setAttribute("data-fx", "reveal");
      reveals.push(el);
    }
  });

  scrambles.forEach((s) => {
    s.el.setAttribute("data-fx", "decode");
    s.node.nodeValue = scramble(s.final, 0);
  });

  const start = performance.now();
  let frame = 0;
  let raf;

  const finish = () => {
    cancelAnimationFrame(raf);
    scrambles.forEach((s) => {
      if (s.node.nodeValue !== s.final) s.node.nodeValue = s.final;
      s.el.removeAttribute("data-fx");
    });
    reveals.forEach((el) => {
      el.removeAttribute("data-fx");
      el.style.removeProperty("--fx-delay");
    });
  };

  const tick = (now) => {
    const t = now - start;
    const refresh = frame++ % 2 === 0;
    let pending = false;

    for (const s of scrambles) {
      if (s.done) continue;
      const p = (t - s.delay) / RESOLVE;
      if (p >= 1) {
        s.node.nodeValue = s.final;
        s.done = true;
        s.el.removeAttribute("data-fx");
        continue;
      }
      pending = true;
      if (!refresh) continue;
      s.node.nodeValue = scramble(s.final, p <= 0 ? 0 : Math.floor(p * s.final.length));
    }

    if (pending) raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);
  return finish;
}

export default function LangFx() {
  const { fx } = useI18n();

  useEffect(() => {
    if (!fx) return;
    return decodeVisibleText();
  }, [fx]);

  if (!fx) return null;

  return (
    <div className="lang-fx" key={fx.id} aria-hidden="true">
      <div className="lang-fx-scan" />
      <div className="lang-fx-hud">
        <div className="lang-fx-line">
          <span className="lang-fx-prompt">›</span>
          model.translate(<span className="lang-fx-from">"{fx.from}"</span>
          <span className="lang-fx-arrow">→</span>
          <span className="lang-fx-to">"{fx.to}"</span>)
        </div>
        <div className="lang-fx-bar"><span /></div>
        <div className="lang-fx-status">
          <span className="lang-fx-dot" /> rewriting context
        </div>
      </div>
    </div>
  );
}
