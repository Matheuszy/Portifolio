import { useEffect, useState } from "react";

import {
  links,
  projects,
  certifications,
  stackGroups,
  descpayActivities,
  engineeringPrinciples,
} from "./portfolioData";

import "./index.css";

function SectionCard({
  id,
  number,
  label,
  title,
  children,
  active,
  onActivate,
  className = "",
}) {
  return (
    <article
      id={id}
      className={`stack-card ${active ? "active" : ""} ${className}`}
      onClick={() => onActivate(id)}
    >
      <div className="card-glow" />

      <header className="card-header">
        <span className="card-number">{number}</span>
        <span className="card-label">{label}</span>
      </header>

      <div className="card-title">
        <h2>{title}</h2>
      </div>

      <div className="card-content">{children}</div>
    </article>
  );
}

function TagList({ items }) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <button
      className="project-card"
      onClick={(event) => {
        event.stopPropagation();
        onOpen(project);
      }}
    >
      <div className="project-top">
        <span className="project-number">{project.number}</span>

        <span className="project-arrow">↗</span>
      </div>

      <div>
        <span className="project-category">{project.category}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>
      </div>

      <TagList items={project.stack} />
    </button>
  );
}

function CertificationCard({ certification }) {
  return (
    <div className={`cert-card ${certification.featured ? "featured" : ""}`}>
      <div className="cert-icon">{certification.icon}</div>

      <div>
        <span>{certification.issuer}</span>
        <h3>{certification.title}</h3>
      </div>
    </div>
  );
}

function App() {
  const [activeCard, setActiveCard] = useState("intro");
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const activateCard = (id) => {
    setActiveCard(id);
  };

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveCard(id);
  };

  useEffect(() => {
    if (!activeProject) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <nav className="navbar">
        <button
          className="brand"
          onClick={() => scrollTo("intro")}
          aria-label="Voltar ao início"
        >
          <span className="brand-mark">M</span>
          <span>MATHEUS.DEV</span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("about")}>Sobre</button>
          <button onClick={() => scrollTo("experience")}>Experiência</button>
          <button onClick={() => scrollTo("projects")}>Projetos</button>
          <button onClick={() => scrollTo("certifications")}>
            Certificações
          </button>
          <button onClick={() => scrollTo("contact")}>Contato</button>
        </div>

        <div className="nav-social">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <main className="portfolio">
        <div className="stack-container">
          {/* INTRO */}
          <SectionCard
            id="intro"
            number="01"
            label="INTRO"
            title="Software Engineer"
            active={activeCard === "intro"}
            onActivate={activateCard}
            className="hero-card"
          >
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">
                  BACKEND • DISTRIBUTED SYSTEMS • AI ENGINEERING
                </p>

                <h1>
                  Eu transformo
                  <span> problemas complexos</span> em software.
                </h1>

                <p className="hero-description">
                  Software Engineer focado em backend, Java, Kotlin e Python,
                  construindo APIs, sistemas distribuídos, integrações
                  financeiras e soluções com IA.
                </p>

                <div className="hero-actions">
                  <button
                    className="primary-button"
                    onClick={(event) => {
                      event.stopPropagation();
                      scrollTo("projects");
                    }}
                  >
                    Ver projetos
                    <span>↗</span>
                  </button>

                  <a
                    className="secondary-button"
                    href={links.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Falar comigo
                  </a>
                </div>
              </div>

              <div className="hero-visual">
                <div className="orbital orbital-one" />
                <div className="orbital orbital-two" />
                <div className="orbital orbital-three" />

                <div className="hero-core">
                  <span>JAVA</span>
                  <strong>+</strong>
                  <span>AI</span>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* ABOUT */}
          <SectionCard
            id="about"
            number="02"
            label="ABOUT"
            title="Sobre mim"
            active={activeCard === "about"}
            onActivate={activateCard}
          >
            <div className="about-grid">
              <div className="about-main">
                <p className="section-intro">
                  Minha trajetória começou em uma área de negócios, onde tive
                  contato direto com processos, operações internacionais e
                  automação. Com o tempo, passei a transformar esse
                  conhecimento em soluções de software.
                </p>

                <p>
                  Hoje meu foco está no desenvolvimento backend e na construção
                  de sistemas que precisam ser organizados, escaláveis e fáceis
                  de evoluir.
                </p>

                <p>
                  Trabalho principalmente com Java, Kotlin, Spring Boot e
                  Python, enquanto exploro arquitetura distribuída, cloud,
                  DevOps e engenharia de IA.
                </p>
              </div>

              <div className="about-side">
                <div className="info-block">
                  <span>FOCO ATUAL</span>
                  <strong>Backend Engineering</strong>
                </div>

                <div className="info-block">
                  <span>ECOSSISTEMA</span>
                  <strong>Java • Kotlin • Python</strong>
                </div>

                <div className="info-block">
                  <span>DIFERENCIAL</span>
                  <strong>Software + AI</strong>
                </div>
              </div>
            </div>

            <div className="status-line">
              <span className="status-dot" />
              <span>Construindo. Aprendendo. Evoluindo.</span>
            </div>
          </SectionCard>

          {/* EXPERIENCE */}
          <SectionCard
            id="experience"
            number="03"
            label="EXPERIENCE"
            title="Experiência"
            active={activeCard === "experience"}
            onActivate={activateCard}
          >
            <div className="experience-heading">
              <div>
                <span className="company-label">DESCPAY</span>
                <h3>Software Engineer Jr.</h3>
              </div>

              <span className="experience-type">
                Backend • Payments • Financial Systems
              </span>
            </div>

            <p className="experience-description">
              Desenvolvimento de soluções backend para o ecossistema de
              pagamentos, trabalhando com APIs, regras financeiras, integrações
              externas, processamento assíncrono e evolução de sistemas.
            </p>

            <div className="activity-grid">
              {descpayActivities.map((activity) => (
                <div className="activity-card" key={activity.number}>
                  <span>{activity.number}</span>

                  <div>
                    <h4>{activity.title}</h4>
                    <p>{activity.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* PROJECTS */}
          <SectionCard
            id="projects"
            number="04"
            label="PROJECTS"
            title="Projetos"
            active={activeCard === "projects"}
            onActivate={activateCard}
            className="projects-section"
          >
            <div className="projects-intro">
              <p>
                Projetos que representam meu processo de aprendizado,
                experimentação e construção de software.
              </p>

              <span>{projects.length} projetos selecionados</span>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={setActiveProject}
                />
              ))}
            </div>
          </SectionCard>

          {/* CERTIFICATIONS */}
          <SectionCard
            id="certifications"
            number="05"
            label="CERTIFICATIONS"
            title="Certificações & Stack"
            active={activeCard === "certifications"}
            onActivate={activateCard}
          >
            <div className="certifications-grid">
              <div className="certifications-column">
                <div className="subsection-heading">
                  <span>01</span>
                  <h3>Certificações</h3>
                </div>

                <div className="cert-list">
                  {certifications.map((certification) => (
                    <CertificationCard
                      key={certification.title}
                      certification={certification}
                    />
                  ))}
                </div>
              </div>

              <div className="stack-column">
                <div className="subsection-heading">
                  <span>02</span>
                  <h3>Tech Stack</h3>
                </div>

                <div className="stack-groups">
                  {stackGroups.map((group) => (
                    <div className="stack-group" key={group.title}>
                      <span>{group.title}</span>

                      <TagList items={group.items} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* ENGINEERING */}
          <SectionCard
            id="engineering"
            number="06"
            label="ENGINEERING"
            title="Como eu penso"
            active={activeCard === "engineering"}
            onActivate={activateCard}
          >
            <div className="engineering-grid">
              <div className="engineering-intro">
                <span className="big-number">06</span>

                <p>
                  Tecnologia é consequência. Antes dela vem o problema, o
                  contexto e as decisões que precisam ser tomadas.
                </p>

                <p>
                  Meu objetivo é construir soluções que façam sentido para o
                  negócio e que continuem fazendo sentido quando o sistema
                  crescer.
                </p>
              </div>

              <div className="principles">
                {engineeringPrinciples.map((principle, index) => (
                  <div className="principle" key={principle}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          {/* CONTACT */}
          <SectionCard
            id="contact"
            number="07"
            label="CONTACT"
            title="Vamos construir algo?"
            active={activeCard === "contact"}
            onActivate={activateCard}
            className="contact-card"
          >
            <div className="contact-content">
              <div>
                <p className="contact-eyebrow">
                  OPEN TO OPPORTUNITIES & COLLABORATIONS
                </p>

                <h3>
                  Tem um problema interessante?
                  <span> Vamos conversar.</span>
                </h3>

                <p>
                  Estou aberto a oportunidades em engenharia de software,
                  backend, Java/Kotlin, sistemas distribuídos e projetos que
                  envolvam IA.
                </p>
              </div>

              <div className="contact-actions">
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-button primary-button"
                >
                  WhatsApp
                  <span>↗</span>
                </a>

                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-button"
                >
                  LinkedIn
                  <span>↗</span>
                </a>

                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-button"
                >
                  GitHub
                  <span>↗</span>
                </a>
              </div>
            </div>
          </SectionCard>
        </div>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Matheus Almeida</span>

        <span>Software Engineer • Brazil</span>
      </footer>

      {activeProject && (
        <div
          className="modal-overlay"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Fechar projeto"
            >
              ×
            </button>

            <span className="modal-category">
              {activeProject.category}
            </span>

            <h2>{activeProject.title}</h2>

            <p>{activeProject.description}</p>

            <div className="modal-stack">
              <TagList items={activeProject.stack} />
            </div>

            <a
              href={activeProject.github}
              target="_blank"
              rel="noreferrer"
              className="modal-github"
            >
              Ver no GitHub
              <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default App;