import { useState } from "react";

const links = {
  linkedin: "https://www.linkedin.com/in/matheus-almeida-497050244/",
  github: "https://github.com/Matheuszy",
};

const projects = [
  {
    name: "Basilico",
    label: "Management API",
    description:
      "API REST em Java 17 e Spring Boot, construída com Arquitetura Hexagonal, SOLID, Clean Code, JWT, persistência relacional e testes automatizados.",
    tags: ["Java 17", "Spring Boot", "JPA", "PostgreSQL", "JUnit"],
    github: "https://github.com/Matheuszy/Basilico",
  },
  {
    name: "Multi-Tenant Inventory",
    label: "Estoque & PDV",
    description:
      "Sistema de gestão de estoque e PDV multi-tenant, pensado para manter diferentes clientes isolados dentro de uma única aplicação.",
    tags: ["Java", "Spring Boot", "Multi-tenancy", "PostgreSQL"],
    github: "https://github.com/Codex-System/Sistema-de-estoque",
  },
  {
    name: "Sentinel",
    label: "Fraud Detection",
    description:
      "Sistema de detecção de fraude em Python e Machine Learning, com pipeline de análise para identificar padrões suspeitos.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/Matheuszy/Projeto-sentinel",
  },
  {
    name: "Smart Product Recommender",
    label: "AI Engine",
    description:
      "Engine que combina Cadeia de Markov, Rede Bayesiana, Motor de Decisão e A* para determinar o próximo passo do cliente e expor a recomendação via API.",
    tags: ["Python", "FastAPI", "Markov", "Bayes", "A*"],
    github: "https://github.com/Matheuszy/srmart-recommender",
  },
  {
    name: "Java Microservices",
    label: "Distributed Systems",
    description:
      "Coleção de microsserviços em Java explorando arquitetura distribuída, comunicação entre serviços e padrões comuns de sistemas modernos.",
    tags: ["Java", "Microservices", "Distributed Systems"],
    github: "https://github.com/Matheuszy/microsservi-os-java",
  },
  {
    name: "Credit Prediction",
    label: "Analytics",
    description:
      "Análise e previsão de crédito usando Python, SQL e Machine Learning para trabalhar com dados de risco e modelos preditivos.",
    tags: ["Python", "SQL", "Machine Learning"],
    github: "https://github.com/Matheuszy/projeto-ML-previsao-dados-credito",
  },
  {
    name: "Code Connect",
    label: "AI Engineering",
    description:
      "Estudo prático de Context Engineering com Claude Code: exploração de base de código, automação com Lighthouse CI, geração de componentes via Figma + MCP e configuração de agentes com CLAUDE.md e AGENTS.md.",
    tags: ["Node.js", "NestJS", "Claude Code", "Context Engineering", "MCP"],
    github: "https://github.com/Matheuszy/code-connect",
  },
];

const certifications = [
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    icon: "☁️",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "☁️",
  },
  {
    title: "Oracle Cloud Infrastructure Foundations",
    issuer: "Oracle OCI",
    icon: "🔶",
  },
  {
    title: "Engenharia de Software",
    issuer: "Alura",
    icon: "🎓",
  },
];

const stack = [
  "Java",
  "Kotlin",
  "Spring Boot",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Kafka",
  "RabbitMQ",
  "AWS",
  "Kubernetes",
  "GitHub Actions",
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
  "SQL",
  "AI Agents",
];

const descpaySkills = [
  "Java",
  "Kotlin",
  "Spring Boot",
  "REST APIs",
  "PostgreSQL",
  "Payment Integrations",
  "Asynchronous Processing",
  "Automated Testing",
  "Docker",
  "AWS",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [activeProject, setActiveProject] = useState(null);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <nav className="nav">
        <button className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-mark">M</span>
          <span>
            Matheus<span className="muted">.dev</span>
          </span>
        </button>

        <div className="nav-links">
          <button onClick={() => scrollTo("about")}>Sobre</button>
          <button onClick={() => scrollTo("experience")}>Experiência</button>
          <button onClick={() => scrollTo("projects")}>Projetos</button>
          <button onClick={() => scrollTo("certifications")}>
            Certificações
          </button>
          <button onClick={() => scrollTo("stack")}>Stack</button>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow />
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> SOFTWARE ENGINEER JR.
          </div>

          <h1>
            Eu transformo
            <br />
            <em>problemas complexos</em>
            <br />
            em software.
          </h1>

          <p className="hero-text">
            Sou Matheus Carlos, Software Engineer com foco em Backend,
            Java, Kotlin e Python. Gosto de entender o problema antes de
            escrever o código e construir soluções simples, testáveis,
            escaláveis e preparadas para crescer.
          </p>

          <div className="actions">
            <button
              className="primary"
              onClick={() => scrollTo("projects")}
            >
              Ver projetos <Arrow />
            </button>

            <a
              className="secondary"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Conectar no LinkedIn <Arrow />
            </a>
          </div>

          <div className="hero-meta">
            <span>Java · Kotlin · Spring Boot</span>
            <span>Backend · Cloud · Distributed Systems</span>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />
          <div className="orbit orbit-3" />

          <div className="core">
            <span>01</span>
            <strong>BUILD</strong>
            <small>MEASURE · IMPROVE</small>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="section-label">01 / SOBRE</div>

        <div className="about-grid">
          <div>
            <h2>
              Não começo pelo código.
              <br />
              <em>Começo pelo problema.</em>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              Minha experiência combina engenharia de software, dados e
              visão de negócio. Atualmente atuo como Software Engineer Jr.,
              com foco em backend e desenvolvimento de sistemas para
              operações de vendas, pagamentos e gestão financeira.
            </p>

            <p>
              Minha experiência anterior em dados e BI também contribui
              para uma visão mais ampla sobre processos, performance,
              automação e tomada de decisão. Levo essa perspectiva para
              o desenvolvimento de software e para a construção de
              soluções orientadas ao negócio.
            </p>

            <p>
              Meu foco atual está em Backend, arquitetura limpa, APIs,
              sistemas distribuídos, observabilidade, testes e cloud.
              Também venho aprofundando meus conhecimentos em IA e
              engenharia de software orientada a agentes.
            </p>

            <div className="principles">
              <div>
                <b>01</b>
                <span>Entender antes de implementar</span>
              </div>

              <div>
                <b>02</b>
                <span>Projetar para manutenção</span>
              </div>

              <div>
                <b>03</b>
                <span>Medir para melhorar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RADAR */}
      <section className="section radar">
        <div className="radar-card">
          <div>
            <span className="status">● MOMENTO ATUAL</span>
            <h3>Construindo o próximo nível.</h3>
          </div>

          <div className="radar-items">
            <div>
              <small>ATUANDO COMO</small>
              <strong>
                Software Engineer Jr. — Backend
              </strong>
            </div>

            <div>
              <small>APROFUNDANDO</small>
              <strong>
                Distributed Systems · Cloud · AI Engineering
              </strong>
            </div>

            <div>
              <small>CONSTRUINDO</small>
              <strong>
                Sistemas robustos, escaláveis e orientados ao negócio
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience">
        <div className="section-heading">
          <div>
            <div className="section-label">02 / EXPERIÊNCIA</div>
            <h2>
              Onde eu <em>construo.</em>
            </h2>
          </div>
        </div>

        <article className="experience-card">
          <div className="experience-header">
            <div>
              <span className="project-label">
                SOFTWARE ENGINEERING
              </span>

              <h3>Software Engineer Jr.</h3>

              <p className="experience-company">
                DescPay
              </p>
            </div>

            <span className="experience-status">
              BACKEND
            </span>
          </div>

          <p className="experience-description">
            Atuação no desenvolvimento e evolução de sistemas backend
            voltados às operações de vendas, pagamentos e gestão
            financeira, com foco em regras de negócio, integração entre
            sistemas, qualidade de software e evolução da arquitetura.
          </p>

          <div className="experience-grid">
            <div>
              <span className="experience-index">01</span>

              <div>
                <h4>Backend & APIs</h4>
                <p>
                  Desenvolvimento e manutenção de APIs REST,
                  funcionalidades backend e regras de negócio utilizando
                  Java, Kotlin e Spring Boot.
                </p>
              </div>
            </div>

            <div>
              <span className="experience-index">02</span>

              <div>
                <h4>Payments & Integrations</h4>
                <p>
                  Integração com APIs e serviços externos, incluindo
                  plataformas de pagamento e serviços relacionados às
                  operações financeiras.
                </p>
              </div>
            </div>

            <div>
              <span className="experience-index">03</span>

              <div>
                <h4>Data & Processing</h4>
                <p>
                  Consultas, relacionamentos e migrations em PostgreSQL,
                  além de jobs e processamento assíncrono para rotinas
                  financeiras e fluxos de importação e exportação.
                </p>
              </div>
            </div>

            <div>
              <span className="experience-index">04</span>

              <div>
                <h4>Quality & Infrastructure</h4>
                <p>
                  Testes automatizados, Docker, AWS e investigação de
                  problemas em ambientes de execução, além de melhorias
                  de performance e organização do código.
                </p>
              </div>
            </div>
          </div>

          <div className="experience-tags">
            {descpaySkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-heading">
          <div>
            <div className="section-label">03 / PROJETOS</div>

            <h2>
              Coisas que eu <em>construí.</em>
            </h2>
          </div>

          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Ver GitHub <Arrow />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.name}
            >
              <div className="project-top">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${project.name} no GitHub`}
                >
                  GitHub <Arrow />
                </a>
              </div>

              <span className="project-label">
                {project.label}
              </span>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <button
                className="project-action"
                onClick={() => setActiveProject(project)}
              >
                Detalhes <Arrow />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <div className="section-label">
          04 / CERTIFICAÇÕES & FORMAÇÃO
        </div>

        <div className="section-heading">
          <div>
            <h2>
              Conhecimento <em>validado.</em>
            </h2>
          </div>
        </div>

        <div className="certs-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.title}>
              <span className="cert-icon">
                {cert.icon}
              </span>

              <div>
                <strong>{cert.title}</strong>
                <small>{cert.issuer}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="section stack-section">
        <div className="section-label">05 / STACK</div>

        <div className="stack-layout">
          <div>
            <h2>
              Ferramentas para
              <br />
              <em>resolver problemas.</em>
            </h2>

            <p>
              Uma stack centrada em backend, mas sem perder a visão de
              dados, infraestrutura, observabilidade, cloud e
              inteligência artificial.
            </p>
          </div>

          <div className="stack-cloud">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className="section engineering">
        <div className="section-label">
          06 / COMO EU PENSO
        </div>

        <div className="engineering-grid">
          <div>
            <h2>
              Software bom não é só código que{" "}
              <em>funciona.</em>
            </h2>
          </div>

          <div className="engineering-list">
            <div>
              <span>01</span>

              <div>
                <h3>Arquitetura</h3>
                <p>
                  Separação de responsabilidades, baixo acoplamento e
                  decisões que facilitam evolução.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>

              <div>
                <h3>Qualidade</h3>
                <p>
                  Testes automatizados, Clean Code e CI para reduzir
                  regressões antes da entrega.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>

              <div>
                <h3>Observabilidade</h3>
                <p>
                  Métricas, logs e tracing para entender o comportamento
                  real do sistema.
                </p>
              </div>
            </div>

            <div>
              <span>04</span>

              <div>
                <h3>Negócio</h3>
                <p>
                  Uma solução técnica só é boa quando resolve o problema
                  que realmente importa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="cta section">
        <div className="cta-glow" />

        <div className="section-label">
          07 / CONTATO
        </div>

        <h2>
          Construindo soluções robustas
          <br />
          <em>de ponta a ponta.</em>
        </h2>

        <p>
          Software Engineer focado em Backend, Java e Kotlin, com
          interesse em sistemas distribuídos, cloud, arquitetura e
          inteligência artificial.
        </p>

        <div className="actions centered">
          <a
            className="primary"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Vamos conversar <Arrow />
          </a>

          <a
            className="secondary"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            Ver projetos no GitHub <Arrow />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span>© 2026 Matheus Carlos</span>

        <span>
          Backend · Software Engineering · AI
        </span>

        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <Arrow />
        </a>
      </footer>

      {/* PROJECT MODAL */}
      {activeProject && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            <span className="project-label">
              {activeProject.label}
            </span>

            <h2>{activeProject.name}</h2>

            <p>{activeProject.description}</p>

            <div className="tags">
              {activeProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a
              className="primary"
              href={activeProject.github}
              target="_blank"
              rel="noreferrer"
            >
              Abrir repositório <Arrow />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;