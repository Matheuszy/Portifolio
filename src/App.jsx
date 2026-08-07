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
];

const stack = [
  "Java", "Kotlin", "Spring Boot", "Python", "FastAPI", "PostgreSQL",
  "Docker", "Kafka", "RabbitMQ", "AWS", "Kubernetes", "GitHub Actions",
  "Prometheus", "Grafana", "OpenTelemetry", "SQL", "AI Agents"
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
          <span>Matheus<span className="muted">.dev</span></span>
        </button>

        <div className="nav-links">
          <button onClick={() => scrollTo("about")}>Sobre</button>
          <button onClick={() => scrollTo("projects")}>Projetos</button>
          <button onClick={() => scrollTo("stack")}>Stack</button>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href={links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-copy">
          <div className="eyebrow"><span /> SOFTWARE ENGINEER · BACKEND</div>

          <h1>
            Eu transformo
            <br />
            <em>problemas complexos</em>
            <br />
            em software.
          </h1>

          <p className="hero-text">
            Sou Matheus Carlos, desenvolvedor focado em Backend, Java, Kotlin e
            Python. Gosto de entender o problema antes de escrever o código —
            e construir soluções simples, testáveis e preparadas para crescer.
          </p>

          <div className="actions">
            <button className="primary" onClick={() => scrollTo("projects")}>
              Ver projetos <Arrow />
            </button>
            <a className="secondary" href={links.linkedin} target="_blank" rel="noreferrer">
              Conectar no LinkedIn <Arrow />
            </a>
          </div>

          <div className="hero-meta">
            <span>Java · Kotlin · Python</span>
            <span>Arquitetura · Cloud · Dados</span>
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

      <section id="about" className="section about">
        <div className="section-label">01 / SOBRE</div>
        <div className="about-grid">
          <div>
            <h2>Não começo pelo código.<br /><em>Começo pelo problema.</em></h2>
          </div>
          <div className="about-copy">
            <p>
              Minha experiência combina tecnologia, dados e visão de negócio.
              Como CX Data Analyst, trabalho com SQL e Python para transformar
              informação em decisão — uma perspectiva que levo para o
              desenvolvimento de software.
            </p>
            <p>
              Estou construindo minha carreira como Software Engineer, com foco
              em Backend, arquitetura limpa, APIs, sistemas distribuídos,
              observabilidade, testes e cloud.
            </p>
            <div className="principles">
              <div><b>01</b><span>Entender antes de implementar</span></div>
              <div><b>02</b><span>Projetar para manutenção</span></div>
              <div><b>03</b><span>Medir para melhorar</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section radar">
        <div className="radar-card">
          <div>
            <span className="status">● RADAR ATUAL</span>
            <h3>Construindo o próximo nível.</h3>
          </div>
          <div className="radar-items">
            <div><small>ESTUDANDO</small><strong>AI-Native Software Engineering</strong></div>
            <div><small>LENDO</small><strong>A Arte de Desenvolver Software</strong></div>
            <div><small>BUSCANDO</small><strong>Oportunidades de Software Engineering</strong></div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <div>
            <div className="section-label">02 / PROJETOS</div>
            <h2>Coisas que eu <em>construí.</em></h2>
          </div>
          <a href={links.github} target="_blank" rel="noreferrer" className="text-link">
            Ver GitHub <Arrow />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-top">
                <span className="project-number">0{index + 1}</span>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name} no GitHub`}>
                  GitHub <Arrow />
                </a>
              </div>

              <span className="project-label">{project.label}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              <button className="project-action" onClick={() => setActiveProject(project)}>
                Detalhes <Arrow />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="section stack-section">
        <div className="section-label">03 / STACK</div>
        <div className="stack-layout">
          <div>
            <h2>Ferramentas para<br /><em>resolver problemas.</em></h2>
            <p>
              Uma stack centrada em backend, mas sem perder a visão de dados,
              infraestrutura, observabilidade e inteligência artificial.
            </p>
          </div>
          <div className="stack-cloud">
            {stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section engineering">
        <div className="section-label">04 / COMO EU PENSO</div>
        <div className="engineering-grid">
          <div>
            <h2>Software bom não é só código que <em>funciona.</em></h2>
          </div>
          <div className="engineering-list">
            <div><span>01</span><div><h3>Arquitetura</h3><p>Separação de responsabilidades, baixo acoplamento e decisões que facilitam evolução.</p></div></div>
            <div><span>02</span><div><h3>Qualidade</h3><p>Testes automatizados, Clean Code e CI para reduzir regressões antes da entrega.</p></div></div>
            <div><span>03</span><div><h3>Observabilidade</h3><p>Métricas, logs e tracing para entender o comportamento real do sistema.</p></div></div>
            <div><span>04</span><div><h3>Negócio</h3><p>Uma solução técnica só é boa quando resolve o problema que realmente importa.</p></div></div>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="cta-glow" />
        <div className="section-label">05 / PRÓXIMO PASSO</div>
        <h2>Vamos construir algo<br /><em>que valha a pena.</em></h2>
        <p>Estou aberto a oportunidades de Software Engineering, especialmente em Backend, Java, Kotlin e Python.</p>
        <div className="actions centered">
          <a className="primary" href={links.linkedin} target="_blank" rel="noreferrer">Falar comigo <Arrow /></a>
          <a className="secondary" href={links.github} target="_blank" rel="noreferrer">Explorar meu GitHub <Arrow /></a>
        </div>
      </section>

      <footer>
        <span>© 2026 Matheus Carlos</span>
        <span>Backend · Software Engineering · AI</span>
        <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}>×</button>
            <span className="project-label">{activeProject.label}</span>
            <h2>{activeProject.name}</h2>
            <p>{activeProject.description}</p>
            <div className="tags">
              {activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a className="primary" href={activeProject.github} target="_blank" rel="noreferrer">
              Abrir repositório <Arrow />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;