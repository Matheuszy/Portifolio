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
  if (!flow?.length) return null;
  return (
    <div className="arch-flow" aria-label="Fluxo de arquitetura">
      {flow.map((node, i) => (
        <span className="arch-step" key={node + i}>
          {i > 0 && <span className="arch-arrow" aria-hidden="true">→</span>}
          <span className="arch-node">{node}</span>
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
  return (
    <button
      className="project-card"
      data-bg={project.ai ? "ai" : "red"}
      onClick={() => onOpen(project)}
      aria-label={`Ver detalhes de ${project.title}`}
    >
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
        <span className="project-arrow">↗</span>
      </div>

      <div>
        <LayerList layers={project.layers} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <TagList items={project.stack} />
    </button>
  );
}

function FreelanceCard({ project, onOpen }) {
  return (
    <button
      className="project-card freelance-card"
      data-bg="red"
      onClick={() => onOpen(project)}
      aria-label={`Ver detalhes de ${project.title}`}
    >
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
        <span className="project-arrow">↗</span>
      </div>

      <div>
        <div className="freelance-client-badge">
          <span>● CLIENTE PRIVADO</span>
        </div>
        <LayerList layers={project.layers} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <TagList items={project.stack} />
    </button>
  );
}

function CertCard({ cert }) {
  return (
    <div className={`cert-card ${cert.featured ? "featured" : ""}`} data-bg={cert.icon === "AI" ? "ai" : "red"}>
      <div className="cert-icon">{cert.icon}</div>
      <div>
        <span className="cert-issuer">{cert.issuer}</span>
        <h3>{cert.title}</h3>
      </div>
    </div>
  );
}

/* ─── App ──────────────────────────────────────────────── */

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen]           = useState(false);

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

      {/* ── NAV ──────────────────────────────────────── */}
      <nav className="navbar">
        <button className="brand" onClick={() => scrollTo("hero")} aria-label="Início">
          <span className="brand-mark">M</span>
          <span>MATHEUS.DEV</span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button data-index="01" onClick={() => scrollTo("about")}>Sobre</button>
          <button data-index="02" onClick={() => scrollTo("experience")}>Experiência</button>
          <button data-index="03" onClick={() => scrollTo("freelance")}>Freelance</button>
          <button data-index="04" onClick={() => scrollTo("projects")}>Projetos</button>
          <button data-index="05" onClick={() => scrollTo("stack")}>Stack</button>
          <button data-index="06" onClick={() => scrollTo("certifications")}>Certificações</button>
          <button data-index="07" onClick={() => scrollTo("engineering")}>Engenharia</button>
          <button data-index="08" onClick={() => scrollTo("contact")}>Contato</button>
        </div>

        <div className="nav-social">
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          <a href={links.github}   target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      <main className="portfolio">

        {/* ── HERO ─────────────────────────────────────── */}
        <section id="hero" className="hero-section">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-eyebrow">FULLSTACK · BACKEND · AI ENGINEERING</p>

              <h1>
                Eu transformo<br />
                <span className="accent">problemas complexos</span><br />
                em software.
              </h1>

              <p className="hero-description">
                Software Engineer fullstack com foco em backend (Java, Kotlin e
                Python) — do banco de dados à interface, construindo APIs,
                sistemas distribuídos, integrações financeiras e soluções com IA.
              </p>

              <div className="hero-actions">
                <button className="btn-primary" onClick={() => scrollTo("projects")}>
                  Ver projetos <Arrow />
                </button>
                <a className="btn-secondary" href={links.whatsapp} target="_blank" rel="noreferrer">
                  Falar comigo <Arrow />
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
              <p className="intro-p">
                Minha trajetória começou em uma área de negócios, onde tive
                contato direto com processos, operações internacionais e
                automação. Com o tempo, passei a transformar esse
                conhecimento em soluções de software.
              </p>
              <p>
                Hoje meu foco está no desenvolvimento backend e na construção
                de sistemas organizados, escaláveis e fáceis de evoluir.
              </p>
              <p>
                Trabalho principalmente com Java, Kotlin, Spring Boot e Python,
                enquanto exploro arquitetura distribuída, cloud, DevOps e
                engenharia de IA.
              </p>

              <div className="status-line">
                <span className="status-dot" />
                <span>Construindo. Aprendendo. Evoluindo.</span>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-row">
                <span>FOCO ATUAL</span>
                <strong>Backend Engineering</strong>
              </div>
              <div className="stat-row">
                <span>ECOSSISTEMA</span>
                <strong>Java · Kotlin · Python</strong>
              </div>
              <div className="stat-row">
                <span>DIFERENCIAL</span>
                <strong>Software + AI</strong>
              </div>
              <div className="stat-row">
                <span>FORMAÇÃO</span>
                <strong>Eng. de Software — Alura</strong>
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

            <p className="exp-description">
              Desenvolvimento de soluções backend para o ecossistema de pagamentos,
              trabalhando com APIs, regras financeiras, integrações externas,
              processamento assíncrono e evolução contínua dos sistemas.
            </p>

            <div className="activity-grid">
              {descpayActivities.map((a) => (
                <div className="activity-card" key={a.number}>
                  <span>{a.number}</span>
                  <div>
                    <h4>{a.title}</h4>
                    <p>{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* segundo bloco — app mobile */}
          <div className="experience-block hud-panel exp-block--secondary">
            <div className="exp-header">
              <div>
                <p className="exp-company">PROJETO CONFIDENCIAL</p>
                <h3>Fullstack Developer</h3>
              </div>
              <span className="exp-type">Mobile · Payments · Event Tech</span>
            </div>

            <p className="exp-description">
              Desenvolvimento fullstack de um aplicativo mobile voltado para a
              digitalização da experiência de consumo em eventos presenciais.
              A proposta central é eliminar as barreiras físicas do processo de compra —
              substituindo fichas, dinheiro em espécie e maquininhas por um fluxo
              100% digital: o usuário deposita créditos diretamente no app e os
              utiliza para adquirir produtos no evento, sem filas, sem troco e sem
              depender de infraestrutura física de pagamento.
            </p>

            <p className="exp-description exp-description--impact">
              O impacto esperado vai além da conveniência: ao centralizar as transações
              digitalmente, o modelo permite rastrear comportamento de consumo em tempo real,
              reduzir perdas operacionais e abrir novas possibilidades de receita para os
              organizadores — desde controle de estoque dinâmico até estratégias de
              precificação por demanda.
            </p>

            <div className="activity-grid">
              {mobileAppActivities.map((a) => (
                <div className="activity-card" key={a.number}>
                  <span>{a.number}</span>
                  <div>
                    <h4>{a.title}</h4>
                    <p>{a.text}</p>
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
            <p>
              Projetos desenvolvidos para clientes — soluções com impacto
              direto no negócio, construídas com foco em qualidade e escalabilidade.
            </p>
            <span className="projects-count">{freelanceProjects.length} projeto{freelanceProjects.length !== 1 ? "s" : ""}</span>
          </div>

          <div className="projects-grid">
            {freelanceProjects.map((project) => (
              <FreelanceCard key={project.id} project={project} onOpen={setActiveProject} />
            ))}

            {/* placeholder para próximos projetos */}
            <div className="project-card project-card--placeholder">
              <div className="placeholder-inner">
                <span className="placeholder-icon">+</span>
                <p>Mais projetos em breve</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────────── */}
        <section id="projects" className="section">
          <SectionLabel index="04" route="GET /projects">PROJETOS PESSOAIS</SectionLabel>

          <div className="projects-header">
            <p>
              Projetos que representam meu processo de aprendizado,
              experimentação e construção de software.
            </p>
            <span className="projects-count">{projects.length} projeto{projects.length !== 1 ? "s" : ""} selecionado{projects.length !== 1 ? "s" : ""}</span>
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
          <SectionLabel index="06" route="GET /certifications">CERTIFICATIONS &amp; FORMAÇÃO</SectionLabel>

          <div className="certs-full-grid">
            {certifications.map((cert) => (
              <CertCard key={cert.title} cert={cert} />
            ))}
          </div>
        </section>

        {/* ── ENGINEERING ──────────────────────────────── */}
        <section id="engineering" className="section">
          <SectionLabel index="07" route="GET /engineering">ENGINEERING</SectionLabel>

          <div className="engineering-grid">
            <div className="engineering-intro">
              <span className="big-num">07</span>
              <p>
                Tecnologia é consequência. Antes dela vem o problema,
                o contexto e as decisões que precisam ser tomadas.
              </p>
              <p>
                Meu objetivo é construir soluções que façam sentido para o
                negócio e que continuem fazendo sentido quando o sistema crescer.
              </p>
            </div>

            <div className="principles-list">
              {engineeringPrinciples.map((p, i) => (
                <div className="principle" key={p}>
                  <span className="p-num">{String(i + 1).padStart(2, "0")}</span>
                  <p>{p}</p>
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
                Tem um problema<br />
                interessante?<br />
                <span className="accent">Vamos conversar.</span>
              </h2>
              <p className="contact-sub">
                Estou aberto a oportunidades em engenharia de software,
                backend, Java/Kotlin, sistemas distribuídos e projetos que
                envolvam IA.
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
        <span>Software Engineer · Brazil</span>
      </footer>

      {/* ── MODAL ──────────────────────────────────────── */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className={`project-modal ${activeProject.ai ? "tone-ai" : ""}`} role="dialog" aria-modal="true" aria-label={activeProject.title} onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Fechar"
            >×</button>

            <span className="modal-category">{activeProject.category}</span>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>

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
              Ver no GitHub <Arrow />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
