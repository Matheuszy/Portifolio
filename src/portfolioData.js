export const links = {
  linkedin: "https://www.linkedin.com/in/matheus-carlos-497050244/",
  github: "https://github.com/Matheuszy",
  whatsapp: "https://wa.me/5513991790394",
};

export const freelanceProjects = [
  {
    id: 1,
    number: "01",
    title: "Multi-Tenant Inventory",
    client: "Cliente Privado",
    category: "SaaS · Estoque & PDV",
    description:
      "SaaS de gestão de estoque e ponto de venda com arquitetura multi-tenant — múltiplos clientes isolados dentro de uma única plataforma, com controle de acesso por organização e estrutura preparada para escalar.",
    stack: ["Java", "Spring Boot", "Multi-tenancy", "PostgreSQL"],
    github: "https://github.com/Codex-System/Sistema-de-estoque",
    layers: ["API", "DB"],
    flow: ["Client", "Spring Boot API", "PostgreSQL"],
  },

  {
    id: 2,
    number: "02",
    title: "BI & Analytics Platform",
    client: "Cliente Privado",
    category: "BI · Analytics · ETL",
    description:
      "Plataforma de BI que automatiza a consolidação de dados operacionais: pipeline ETL de planilhas Excel e dashboard interativo com módulos financeiro, obras e RH, KPIs e filtros cruzados. Dados reais são confidenciais.",
    stack: ["Python", "Pandas", "Dash", "Plotly", "MongoDB", "Flask", "Pytest"],
    github: "https://github.com/Matheuszy/dashboard-alfa-construtora",
    layers: ["ETL", "DB", "UI"],
    flow: ["Excel", "ETL · Pandas", "MongoDB", "Dash UI"],
  },
];

export const projects = [
  {
    id: 1,
    number: "01",
    title: "Basilico",
    category: "Management API",
    description:
      "API de gerenciamento desenvolvida com foco em arquitetura de software, organização de domínio e boas práticas de desenvolvimento backend.",
    stack: ["Java 17", "Spring Boot", "JPA", "PostgreSQL", "JUnit"],
    github: "https://github.com/Matheuszy/Basilico",
    layers: ["API", "DB"],
    flow: ["Client", "Spring Boot API", "PostgreSQL"],
  },
  {
    id: 2,
    number: "02",
    title: "Sentinel",
    category: "Fraud Detection",
    description:
      "Projeto de detecção de possíveis fraudes utilizando análise de dados e modelos de Machine Learning.",
    stack: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/Matheuszy/Projeto-sentinel",
    layers: ["ML", "DATA"],
    flow: ["Dados", "Features", "Modelo ML", "Score de fraude"],
    ai: true,
  },
  {
    id: 3,
    number: "03",
    title: "Smart Product Recommender",
    category: "AI Engine",
    description:
      "Engine de recomendação de produtos combinando diferentes estratégias algorítmicas para geração de recomendações.",
    stack: ["Python", "FastAPI", "Markov", "Bayes", "A*"],
    github: "https://github.com/Matheuszy/srmart-recommender",
    layers: ["API", "ML"],
    flow: ["Client", "FastAPI", "Markov · Bayes · A*", "Recomendações"],
    ai: true,
  },
  {
    id: 4,
    number: "04",
    title: "Java Microservices",
    category: "Distributed Systems",
    description:
      "Estudos e implementação de uma arquitetura baseada em microsserviços e conceitos de sistemas distribuídos.",
    stack: ["Java", "Microservices", "Distributed Systems"],
    github: "https://github.com/Matheuszy/microsservi-os-java",
    layers: ["API", "DIST"],
    flow: ["Client", "Microsserviços Java"],
  },
  {
    id: 5,
    number: "05",
    title: "Credit Prediction",
    category: "Analytics",
    description:
      "Projeto de análise e previsão de dados de crédito utilizando técnicas de Machine Learning e SQL.",
    stack: ["Python", "SQL", "Machine Learning"],
    github: "https://github.com/Matheuszy/projeto-ML-previsao-dados-credito",
    layers: ["ML", "DB"],
    flow: ["Dados (SQL)", "Modelo ML", "Previsão"],
    ai: true,
  },
  {
    id: 6,
    number: "06",
    title: "Code Connect",
    category: "AI Engineering",
    description:
      "Projeto experimental focado em integração entre desenvolvimento de software, IA, agentes e engenharia de contexto.",
    stack: [
      "Node.js",
      "NestJS",
      "Claude Code",
      "Context Engineering",
      "MCP",
    ],
    github: "https://github.com/Matheuszy/code-connect",
    layers: ["API", "AI"],
    flow: ["Dev", "NestJS API", "Agente · MCP"],
    ai: true,
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "AWS",
    featured: true,
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    icon: "AI",
    featured: true,
  },
  {
    title: "Oracle Cloud Infrastructure Foundations",
    issuer: "Oracle OCI",
    icon: "OCI",
  },
  {
    title: "Engenharia de Software",
    issuer: "Alura",
    icon: "AL",
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "Vite", "JavaScript", "HTML & CSS", "Dash / Plotly"],
  },
  {
    title: "Backend",
    items: ["Java", "Kotlin", "Spring Boot", "Python", "FastAPI", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "SQL"],
  },
  {
    title: "Messaging & Cloud",
    items: [
      "Kafka",
      "RabbitMQ",
      "AWS",
      "Oracle OCI",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
    ],
  },
  {
    title: "AI Engineering",
    ai: true,
    items: [
      "RAG",
      "Embeddings",
      "AI Agents",
      "Agent Orchestration",
      "Harness Engineering",
      "Context Engineering",
      "MCP",
      "Claude",
      "Codex",
      "Machine Learning",
    ],
  },
];

export const mobileAppActivities = [
  {
    number: "01",
    title: "Arquitetura Full-Stack Mobile",
    text: "Desenvolvimento end-to-end de um aplicativo mobile, cobrindo desde a camada de API até a interface do usuário.",
  },
  {
    number: "02",
    title: "Integração de Pagamentos",
    text: "Implementação do fluxo de depósito e conversão em créditos digitais, com rastreabilidade de transações em tempo real.",
  },
  {
    number: "03",
    title: "Experiência do Usuário",
    text: "Fluxo de compra pensado para operar em ambientes de alta demanda — sem filas, sem fricção, direto no celular do usuário.",
  },
  {
    number: "04",
    title: "Escalabilidade de Eventos",
    text: "Estrutura preparada para suportar picos de acesso simultâneo em eventos de grande porte, onde a disponibilidade é crítica.",
  },
];

export const descpayActivities = [
  {
    number: "01",
    title: "Backend & APIs",
    text: "Desenvolvimento e evolução de APIs REST utilizando Java, Kotlin e Spring Boot.",
  },
  {
    number: "02",
    title: "Regras de Negócio",
    text: "Implementação de regras relacionadas a vendas, pagamentos e gerenciamento financeiro.",
  },
  {
    number: "03",
    title: "Integrações",
    text: "Integração com Cielo e outras APIs externas relacionadas ao ecossistema de pagamentos.",
  },
  {
    number: "04",
    title: "PostgreSQL",
    text: "Consultas, migrations, análise de dados e melhorias relacionadas à persistência.",
  },
  {
    number: "05",
    title: "Processamento Assíncrono",
    text: "Desenvolvimento de processos para operações financeiras e importação/exportação de dados.",
  },
  {
    number: "06",
    title: "Testes & Qualidade",
    text: "Criação e manutenção de testes unitários e preocupação com a qualidade do código.",
  },
  {
    number: "07",
    title: "Docker & AWS",
    text: "Uso de containers e conceitos de infraestrutura e deploy em ambientes AWS.",
  },
  {
    number: "08",
    title: "Performance & Evolução",
    text: "Investigação de bugs, análise de causa raiz e evolução contínua das soluções.",
  },
];

export const engineeringPrinciples = [
  "Entender o problema antes de escolher a tecnologia.",
  "Separar regra de negócio de detalhes de infraestrutura.",
  "Escrever código pensando em manutenção e evolução.",
  "Automatizar processos repetitivos sempre que possível.",
  "Observar performance, confiabilidade e comportamento do sistema.",
  "Usar IA como ferramenta de engenharia, não apenas como gerador de código.",
];