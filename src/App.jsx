import { useEffect, useState } from "react";

import {
  links,
  projects,
  freelanceProjects,
  certifications,
  stackGroups,
  descpayActivities,
  mobileAppActivities,
  engineeringPrinciples,
} from "./portfolioData";
import NetworkBackground from "./NetworkBackground";
import { useI18n } from "./i18n";
import LangFx from "./LangFx";

/* ─── small reusables ──────────────────────────────────── */

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionLabel({ index, route, children }) {
  return (
    <div className="section-label">
      <span className="lbl-index">[{index}]</span>
      {children}
      {route && <span className="lbl-route">{route}</span>}
    </div>
  );
}

function LayerList({ layers }) {
  if (!layers?.length) return null;
  return (
    <div className="layer-list">
      {layers.map((l) => (
        <span className="layer-badge" data-layer={l} key={l}>{l}</span>
      ))}
    </div>
  );
}

function ArchFlow({ flow }) {
  const { t, tr } = useI18n();
  if (!flow?.length) return null;
  return (
    <div className="arch-flow" aria-label={t.projects.flowLabel}>
      {flow.map((node, i) => (
        <span className="arch-step" key={i}>
          {i > 0 && <span className="arch-arrow" aria-hidden="true">→</span>}
          <span className="arch-node">{tr(node)}</span>
        </span>
      ))}
    </div>
  );
}

const TERMINAL_TABS = ["profile", "api", "agent"];

function HeroTerminal() {
  const [tab, setTab] = useState("profile");
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(
      () => setTab((t) => TERMINAL_TABS[(TERMINAL_TABS.indexOf(t) + 1) % TERMINAL_TABS.length]),
      7000
    );
    return () => clearInterval(id);
  }, [auto]);

  const pick = (t) => { setAuto(false); setTab(t); };
  const line = (i) => ({ "--i": i });

  return (
    <div className={`hud-panel hud-terminal ${tab === "agent" ? "tone-ai" : ""}`}>
      <div className="terminal-bar">
        <span className="dot dot-red" />
        <span className="dot dot-dim" />
        <span className="dot dot-dim" />
        <div className="terminal-tabs" role="tablist">
          {TERMINAL_TABS.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              className={tab === t ? "active" : ""}
              onClick={() => pick(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="terminal-body" key={tab}>
        {tab === "profile" && (
          <>
            <div className="terminal-line" style={line(0)}><span className="prompt">›</span><span>role</span><span className="val">Fullstack Software Engineer</span></div>
            <div className="terminal-line" style={line(1)}><span className="prompt">›</span><span>stack</span><span className="val">Java · Kotlin · Python · React</span></div>
            <div className="terminal-line" style={line(2)}><span className="prompt">›</span><span>focus</span><span className="val">Backend · Cloud · AI</span></div>
            <div className="terminal-line" style={line(3)}><span className="prompt">›</span><span>status</span><span className="val ok">● open to work</span></div>
          </>
        )}

        {tab === "api" && (
          <>
            <div className="terminal-line"><span className="prompt">›</span><span className="typed" style={{ "--n": 17 }}>GET /api/projects</span></div>
            <div className="terminal-line" style={line(6)}><span className="val ok">200 OK</span><span>· 42ms</span></div>
            <pre className="terminal-code" style={line(7)}>
{`{
  "layers": ["ui", "api", "db"],
  "fullstack": `}<span className="ok">true</span>{`,
  "ai": `}<span className="ai">true</span>{`
}`}
            </pre>
          </>
        )}

        {tab === "agent" && (
          <>
            <div className="terminal-line"><span className="prompt">›</span><span className="typed" style={{ "--n": 15 }}>agent.run(task)</span></div>
            <div className="terminal-line" style={line(6)}><span className="val ai">✓</span><span>context loaded</span></div>
            <div className="terminal-line" style={line(7)}><span className="val ai">✓</span><span>tools: mcp · rag</span></div>
            <div className="terminal-line" style={line(8)}><span className="val ai">✓</span><span>plan → execute → review</span></div>
            <div className="terminal-line" style={line(9)}><span className="val ai">● response ready</span></div>
          </>
        )}

        <div className="terminal-line" style={line(10)}>
          <span className="prompt">›</span>
          <span className="val"><span className="terminal-cursor" /></span>
        </div>
      </div>
    </div>
  );
}

function TagList({ items }) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span className="tag" key={item}>{item}</span>
      ))}
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  const { t, tr } = useI18n();
  return (
    <button
      className="project-card"
      data-bg={project.ai ? "ai" : "red"}
      onClick={() => onOpen(project)}
      aria-label={t.projects.details(project.title)}
    >
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{tr(project.category)}</span>
        <span className="project-arrow">↗</span>
      </div>

      <div>
        <LayerList layers={project.layers} />
        <h3>{project.title}</h3>
        <p>{tr(project.description)}</p>
      </div>

      <TagList items={project.stack} />
    </button>
  );
}

function FreelanceCard({ project, onOpen }) {
  const { t, tr } = useI18n();
  return (
    <button
      className="project-card freelance-card"
      data-bg="red"
      onClick={() => onOpen(project)}
      aria-label={t.projects.details(project.title)}
    >
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{tr(project.category)}</span>
        <span className="project-arrow">↗</span>
      </div>

      <div>
        <div className="freelance-client-badge">
          <span>{t.freelance.privateBadge}</span>
        </div>
        <LayerList layers={project.layers} />
        <h3>{project.title}</h3>
        <p>{tr(project.description)}</p>
      </div>

      <TagList items={project.stack} />
    </button>
  );
}

function CertCard({ cert }) {
  const { tr } = useI18n();
  return (
    <div className={`cert-card ${cert.featured ? "featured" : ""}`} data-bg={cert.icon === "AI" ? "ai" : "red"}>
      <div className="cert-icon">{cert.icon}</div>
      <div>
        <span className="cert-issuer">{cert.issuer}</span>
        <h3>{tr(cert.title)}</h3>
      </div>
    </div>
  );
}

/* ─── App ──────────────────────────────────────────────── */

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen]           = useState(false);
  const { lang, t, tr, toggle, fx } = useI18n();

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* close mobile menu with Esc */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  /* lock scroll when modal is open */
  useEffect(() => {
    if (!activeProject) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setActiveProject(null); };
    window.addEventListener("keydown", onKey);
    const closeBtn = document.querySelector(".modal-close");
    closeBtn?.focus();
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [activeProject]);

  return (
    <>
      <NetworkBackground />
      <LangFx />

      {/* ── NAV ──────────────────────────────────────── */}
      <nav className="navbar">
        <button className="brand" onClick={() => scrollTo("hero")} aria-label={t.nav.home}>
          <span className="brand-mark">M</span>
          <span>MATHEUS.DEV</span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button data-index="01" onClick={() => scrollTo("about")}>{t.nav.about}</button>
          <button data-index="02" onClick={() => scrollTo("experience")}>{t.nav.experience}</button>
          <button data-index="03" onClick={() => scrollTo("freelance")}>{t.nav.freelance}</button>
          <button data-index="04" onClick={() => scrollTo("projects")}>{t.nav.projects}</button>
          <button data-index="05" onClick={() => scrollTo("stack")}>{t.nav.stack}</button>
          <button data-index="06" onClick={() => scrollTo("certifications")}>{t.nav.certifications}</button>
          <button data-index="07" onClick={() => scrollTo("engineering")}>{t.nav.engineering}</button>
          <button data-index="08" onClick={() => scrollTo("contact")}>{t.nav.contact}</button>
        </div>

        <div className="nav-right">
          <button className={`lang-toggle ${fx ? "is-switching" : ""}`} onClick={toggle} aria-label={t.nav.switchLang} title={t.nav.switchLang}>
            <span className={lang === "pt" ? "active" : ""}>PT</span>
            <span className="lang-sep">/</span>
            <span className={lang === "en" ? "active" : ""}>EN</span>
          </button>

          <div className="nav-social">
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href={links.github}   target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={t.nav.menu}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <main className="portfolio">

        {/* ── HERO ─────────────────────────────────────── */}
        <section id="hero" className="hero-section">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-eyebrow">FULLSTACK · BACKEND · AI ENGINEERING</p>

              <h1>
                {t.hero.titleA}<br />
                <span className="accent">{t.hero.titleAccent}</span><br />
                {t.hero.titleB}
              </h1>

              <p className="hero-description">
                {t.hero.description}
              </p>

              <div className="hero-actions">
                <button className="btn-primary" onClick={() => scrollTo("projects")}>
                  {t.hero.viewProjects} <Arrow />
                </button>
                <a className="btn-secondary" href={links.whatsapp} target="_blank" rel="noreferrer">
                  {t.hero.talk} <Arrow />
                </a>
              </div>
            </div>

            {/* HUD terminal — visual side */}
            <div className="hero-visual" data-bg="red">
              <HeroTerminal />
            </div>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────── */}
        <section id="about" className="section">
          <SectionLabel index="01" route="GET /about">ABOUT</SectionLabel>

          <div className="about-grid">
            <div className="about-main">
              <p className="intro-p">{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>

              <div className="status-line">
                <span className="status-dot" />
                <span>{t.about.status}</span>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-row">
                <span>{t.about.focusLabel}</span>
                <strong>Backend Engineering</strong>
              </div>
              <div className="stat-row">
                <span>{t.about.ecosystemLabel}</span>
                <strong>Java · Kotlin · Python</strong>
              </div>
              <div className="stat-row">
                <span>{t.about.edgeLabel}</span>
                <strong>Software + AI</strong>
              </div>
              <div className="stat-row">
                <span>{t.about.educationLabel}</span>
                <strong>{t.about.education}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────────────────── */}
        <section id="experience" className="section">
          <SectionLabel index="02" route="GET /experience">EXPERIENCE</SectionLabel>

          <div className="experience-block hud-panel">
            <div className="exp-header">
              <div>
                <p className="exp-company">DESCPAY</p>
                <h3>Software Engineer Jr.</h3>
              </div>
              <span className="exp-type">Backend · Payments · Financial Systems</span>
            </div>

            <p className="exp-description">{t.experience.descpay}</p>

            <div className="activity-grid">
              {descpayActivities.map((a) => (
                <div className="activity-card" key={a.number}>
                  <span>{a.number}</span>
                  <div>
                    <h4>{tr(a.title)}</h4>
                    <p>{tr(a.text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* segundo bloco — app mobile */}
          <div className="experience-block hud-panel exp-block--secondary">
            <div className="exp-header">
              <div>
                <p className="exp-company">{t.experience.confidential}</p>
                <h3>Fullstack Developer</h3>
              </div>
              <span className="exp-type">Mobile · Payments · Event Tech</span>
            </div>

            <p className="exp-description">{t.experience.mobile}</p>

            <p className="exp-description exp-description--impact">{t.experience.mobileImpact}</p>

            <div className="activity-grid">
              {mobileAppActivities.map((a) => (
                <div className="activity-card" key={a.number}>
                  <span>{a.number}</span>
                  <div>
                    <h4>{tr(a.title)}</h4>
                    <p>{tr(a.text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FREELANCE ────────────────────────────────── */}
        <section id="freelance" className="section">
          <SectionLabel index="03" route="GET /freelance">FREELANCE</SectionLabel>

          <div className="freelance-intro">
            <p>{t.freelance.intro}</p>
            <span className="projects-count">{t.freelance.count(freelanceProjects.length)}</span>
          </div>

          <div className="projects-grid">
            {freelanceProjects.map((project) => (
              <FreelanceCard key={project.id} project={project} onOpen={setActiveProject} />
            ))}

            {/* placeholder para próximos projetos */}
            <div className="project-card project-card--placeholder">
              <div className="placeholder-inner">
                <span className="placeholder-icon">+</span>
                <p>{t.freelance.more}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────────── */}
        <section id="projects" className="section">
          <SectionLabel index="04" route="GET /projects">{t.projects.label}</SectionLabel>

          <div className="projects-header">
            <p>{t.projects.intro}</p>
            <span className="projects-count">{t.projects.count(projects.length)}</span>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
            ))}
          </div>
        </section>

        {/* ── TECH STACK ───────────────────────────────── */}
        <section id="stack" className="section">
          <SectionLabel index="05" route="GET /stack">TECH STACK</SectionLabel>

          <div className="stack-section-grid">
            {stackGroups.map((group) => (
              <div className={`stack-group-panel hud-panel ${group.ai ? "is-ai" : ""}`} data-bg={group.ai ? "ai" : "red"} key={group.title}>
                <div className="stack-group-header">
                  <span className="stack-group-name">{group.title}</span>
                  <span className="stack-group-count">{group.items.length}</span>
                </div>
                <div className="stack-pill-list">
                  {group.items.map((item) => (
                    <span className="stack-pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS ───────────────────────────── */}
        <section id="certifications" className="section">
          <SectionLabel index="06" route="GET /certifications">{t.certifications.label}</SectionLabel>

          <div className="certs-full-grid">
            {certifications.map((cert) => (
              <CertCard key={cert.icon + cert.issuer} cert={cert} />
            ))}
          </div>
        </section>

        {/* ── ENGINEERING ──────────────────────────────── */}
        <section id="engineering" className="section">
          <SectionLabel index="07" route="GET /engineering">ENGINEERING</SectionLabel>

          <div className="engineering-grid">
            <div className="engineering-intro">
              <span className="big-num">07</span>
              <p>{t.engineering.p1}</p>
              <p>{t.engineering.p2}</p>
            </div>

            <div className="principles-list">
              {engineeringPrinciples.map((p, i) => (
                <div className="principle" key={i}>
                  <span className="p-num">{String(i + 1).padStart(2, "0")}</span>
                  <p>{tr(p)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────── */}
        <section id="contact" className="section">
          <SectionLabel index="08" route="POST /contact">CONTACT</SectionLabel>

          <div className="contact-grid">
            <div>
              <p className="contact-eyebrow">OPEN TO OPPORTUNITIES &amp; COLLABORATIONS</p>
              <h2>
                {t.contact.titleA}<br />
                {t.contact.titleB}<br />
                <span className="accent">{t.contact.titleAccent}</span>
              </h2>
              <p className="contact-sub">
                {t.contact.sub}
              </p>
            </div>

            <div className="contact-actions">
              <a href={links.whatsapp} target="_blank" rel="noreferrer" className="contact-link primary">
                WhatsApp <Arrow />
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                LinkedIn <Arrow />
              </a>
              <a href={links.github} target="_blank" rel="noreferrer" className="contact-link">
                GitHub <Arrow />
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Matheus Carlos</span>
        <span>{t.footer}</span>
      </footer>

      {/* ── MODAL ──────────────────────────────────────── */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className={`project-modal ${activeProject.ai ? "tone-ai" : ""}`} role="dialog" aria-modal="true" aria-label={activeProject.title} onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label={t.projects.close}
            >×</button>

            <span className="modal-category">{tr(activeProject.category)}</span>
            <h2>{activeProject.title}</h2>
            <p>{tr(activeProject.description)}</p>

            <ArchFlow flow={activeProject.flow} />

            <div className="modal-stack">
              <TagList items={activeProject.stack} />
            </div>

            <a
              href={activeProject.github}
              target="_blank"
              rel="noreferrer"
              className="modal-github"
            >
              {t.projects.github} <Arrow />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
