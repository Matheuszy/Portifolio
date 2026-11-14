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
    client: { pt: "Cliente Privado", en: "Private Client" },
    category: { pt: "SaaS · Estoque & PDV", en: "SaaS · Inventory & POS" },
    description:
      {
      pt: "SaaS de gestão de estoque e ponto de venda com arquitetura multi-tenant — múltiplos clientes isolados dentro de uma única plataforma, com controle de acesso por organização e estrutura preparada para escalar.",
      en: "Inventory and point-of-sale SaaS with a multi-tenant architecture — multiple clients isolated within a single platform, with per-organization access control and a structure built to scale.",
    },
    stack: ["Java", "Spring Boot", "Multi-tenancy", "PostgreSQL"],
    github: "https://github.com/Codex-System/Sistema-de-estoque",
    layers: ["API", "DB"],
    flow: ["Client", "Spring Boot API", "PostgreSQL"],
  },

  {
    id: 2,
    number: "02",
    title: "BI & Analytics Platform",
    client: { pt: "Cliente Privado", en: "Private Client" },
    category: "BI · Analytics · ETL",
    description:
      {
      pt: "Plataforma de BI que automatiza a consolidação de dados operacionais: pipeline ETL de planilhas Excel e dashboard interativo com módulos financeiro, obras e RH, KPIs e filtros cruzados. Dados reais são confidenciais.",
      en: "BI platform that automates the consolidation of operational data: an ETL pipeline from Excel spreadsheets and an interactive dashboard with finance, construction and HR modules, KPIs and cross-filters. Real data is confidential.",
    },
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
    title: "Arcana",
    category: "Full-Stack · Real-Time",
    description:
      {
      pt: "Plataforma para mesas de RPG online: mestres criam e administram mesas, jogadores montam fichas de personagem e conversam e rolam dados em tempo real via WebSocket. Autenticação JWT, migrations Flyway, testes com Testcontainers e deploy contínuo em VPS com Docker, Traefik e rollback automático.",
      en: "Platform for online tabletop RPG sessions: game masters create and manage tables, players build character sheets, chat and roll dice in real time over WebSocket. JWT authentication, Flyway migrations, Testcontainers tests and continuous deployment to a VPS with Docker, Traefik and automatic rollback.",
    },
    stack: [
      "Java 17",
      "Spring Boot",
      "WebSocket",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    github: "https://github.com/Matheuszy/Arcana-Chronicles",
    layers: ["UI", "API", "DB"],
    flow: ["React SPA", "Nginx", "Spring Boot · STOMP", "PostgreSQL"],
  },
  {
    id: 2,
    number: "02",
    title: "Basilico",
    category: "Management API",
    description:
      {
      pt: "API de gerenciamento desenvolvida com foco em arquitetura de software, organização de domínio e boas práticas de desenvolvimento backend.",
      en: "Management API built with a focus on software architecture, domain organization and backend development best practices.",
    },
    stack: ["Java 17", "Spring Boot", "JPA", "PostgreSQL", "JUnit"],
    github: "https://github.com/Matheuszy/Basilico",
    layers: ["API", "DB"],
    flow: ["Client", "Spring Boot API", "PostgreSQL"],
  },
  {
    id: 3,
    number: "03",
    title: "Sentinel",
    category: "Fraud Detection",
    description:
      {
      pt: "Projeto de detecção de possíveis fraudes utilizando análise de dados e modelos de Machine Learning.",
      en: "Detection of potential fraud using data analysis and Machine Learning models.",
    },
    stack: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/Matheuszy/Projeto-sentinel",
    layers: ["ML", "DATA"],
    flow: [
      { pt: "Dados", en: "Data" },
      "Features",
      { pt: "Modelo ML", en: "ML Model" },
      { pt: "Score de fraude", en: "Fraud score" },
    ],
    ai: true,
  },
  {
    id: 4,
    number: "04",
    title: "Smart Product Recommender",
    category: "AI Engine",
    description:
      {
      pt: "Engine de recomendação de produtos combinando diferentes estratégias algorítmicas para geração de recomendações.",
      en: "Product recommendation engine combining different algorithmic strategies to generate recommendations.",
    },
    stack: ["Python", "FastAPI", "Markov", "Bayes", "A*"],
    github: "https://github.com/Matheuszy/srmart-recommender",
    layers: ["API", "ML"],
    flow: ["Client", "FastAPI", "Markov · Bayes · A*", { pt: "Recomendações", en: "Recommendations" }],
    ai: true,
  },
  {
    id: 5,
    number: "05",
    title: "Java Microservices",
    category: "Distributed Systems",
    description:
      {
      pt: "Estudos e implementação de uma arquitetura baseada em microsserviços e conceitos de sistemas distribuídos.",
      en: "Study and implementation of a microservices-based architecture and distributed systems concepts.",
    },
    stack: ["Java", "Microservices", "Distributed Systems"],
    github: "https://github.com/Matheuszy/microsservi-os-java",
    layers: ["API", "DIST"],
    flow: ["Client", { pt: "Microsserviços Java", en: "Java Microservices" }],
  },
  {
    id: 6,
    number: "06",
    title: "Credit Prediction",
    category: "Analytics",
    description:
      {
      pt: "Projeto de análise e previsão de dados de crédito utilizando técnicas de Machine Learning e SQL.",
      en: "Credit data analysis and prediction using Machine Learning techniques and SQL.",
    },
    stack: ["Python", "SQL", "Machine Learning"],
    github: "https://github.com/Matheuszy/projeto-ML-previsao-dados-credito",
    layers: ["ML", "DB"],
    flow: [
      { pt: "Dados (SQL)", en: "Data (SQL)" },
      { pt: "Modelo ML", en: "ML Model" },
      { pt: "Previsão", en: "Prediction" },
    ],
    ai: true,
  },
  {
    id: 7,
    number: "07",
    title: "Code Connect",
    category: "AI Engineering",
    description:
      {
      pt: "Projeto experimental focado em integração entre desenvolvimento de software, IA, agentes e engenharia de contexto.",
      en: "Experimental project focused on integrating software development, AI, agents and context engineering.",
    },
    stack: [
      "Node.js",
      "NestJS",
      "Claude Code",
      "Context Engineering",
      "MCP",
    ],
    github: "https://github.com/Matheuszy/code-connect",
    layers: ["API", "AI"],
    flow: ["Dev", "NestJS API", { pt: "Agente · MCP", en: "Agent · MCP" }],
    ai: true,
  },
  {
    id: 8,
    number: "08",
    title: "Delivery Microservices",
    category: "Event-Driven Architecture",
    description:
      {
      pt: "Fluxo de entregas com três microsserviços independentes comunicando-se por eventos via RabbitMQ: a criação de uma entrega dispara o rastreamento, que publica um novo evento para o serviço de e-mail enviar a notificação em HTML renderizada com Thymeleaf. Cada serviço mantém seu próprio banco e estado.",
      en: "Delivery flow with three independent microservices communicating through events over RabbitMQ: creating a delivery triggers tracking, which publishes a new event for the email service to send an HTML notification rendered with Thymeleaf. Each service keeps its own database and state.",
    },
    stack: [
      "Java 21",
      "Spring Boot",
      "RabbitMQ",
      "Spring AMQP",
      "PostgreSQL",
      "Thymeleaf",
      "JavaMail",
    ],
    github: "https://github.com/Matheuszy/microsservicos-delivery",
    layers: ["API", "MQ", "DB"],
    flow: ["Delivery", "RabbitMQ", "Tracking", "RabbitMQ", "Email · SMTP"],
  },
  {
    id: 9,
    number: "09",
    title: "Datadog E-commerce",
    category: "Observability",
    description:
      {
      pt: "Prática de observabilidade com Datadog sobre uma API de pedidos fictícia: métricas customizadas e logs estruturados com contexto do pedido, dashboards técnicos e de negócio (erros por forma de pagamento, receita impactada) e monitors para detectar aumento de falhas.",
      en: "Observability practice with Datadog on a mock orders API: custom metrics and structured logs with order context, technical and business dashboards (errors by payment method, impacted revenue) and monitors to detect rising failures.",
    },
    stack: ["Python", "FastAPI", "Datadog", "Metrics", "Logs", "Monitors"],
    github: "https://github.com/Matheuszy/Datadog-ecommerce",
    layers: ["API", "OBS"],
    flow: [
      "Orders API",
      { pt: "Métricas · Logs", en: "Metrics · Logs" },
      "Datadog",
      { pt: "Dashboards · Alertas", en: "Dashboards · Alerts" },
    ],
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
    title: { pt: "Engenharia de Software", en: "Software Engineering" },
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
    title: { pt: "Arquitetura Full-Stack Mobile", en: "Full-Stack Mobile Architecture" },
    text: { pt: "Desenvolvimento end-to-end de um aplicativo mobile, cobrindo desde a camada de API até a interface do usuário.", en: "End-to-end development of a mobile app, covering everything from the API layer to the user interface." },
  },
  {
    number: "02",
    title: { pt: "Integração de Pagamentos", en: "Payments Integration" },
    text: { pt: "Implementação do fluxo de depósito e conversão em créditos digitais, com rastreabilidade de transações em tempo real.", en: "Implementation of the deposit flow and conversion into digital credits, with real-time transaction traceability." },
  },
  {
    number: "03",
    title: { pt: "Experiência do Usuário", en: "User Experience" },
    text: { pt: "Fluxo de compra pensado para operar em ambientes de alta demanda — sem filas, sem fricção, direto no celular do usuário.", en: "Purchase flow designed for high-demand environments — no lines, no friction, right on the user’s phone." },
  },
  {
    number: "04",
    title: { pt: "Escalabilidade de Eventos", en: "Event Scalability" },
    text: { pt: "Estrutura preparada para suportar picos de acesso simultâneo em eventos de grande porte, onde a disponibilidade é crítica.", en: "Structure built to handle simultaneous traffic peaks at large events, where availability is critical." },
  },
];

export const descpayActivities = [
  {
    number: "01",
    title: "Backend & APIs",
    text: { pt: "Desenvolvimento e evolução de APIs REST utilizando Java, Kotlin e Spring Boot.", en: "Development and evolution of REST APIs using Java, Kotlin and Spring Boot." },
  },
  {
    number: "02",
    title: { pt: "Regras de Negócio", en: "Business Rules" },
    text: { pt: "Implementação de regras relacionadas a vendas, pagamentos e gerenciamento financeiro.", en: "Implementation of rules related to sales, payments and financial management." },
  },
  {
    number: "03",
    title: { pt: "Integrações", en: "Integrations" },
    text: { pt: "Integração com Cielo e outras APIs externas relacionadas ao ecossistema de pagamentos.", en: "Integration with Cielo and other external APIs in the payments ecosystem." },
  },
  {
    number: "04",
    title: "PostgreSQL",
    text: { pt: "Consultas, migrations, análise de dados e melhorias relacionadas à persistência.", en: "Queries, migrations, data analysis and persistence improvements." },
  },
  {
    number: "05",
    title: { pt: "Processamento Assíncrono", en: "Asynchronous Processing" },
    text: { pt: "Desenvolvimento de processos para operações financeiras e importação/exportação de dados.", en: "Development of processes for financial operations and data import/export." },
  },
  {
    number: "06",
    title: { pt: "Testes & Qualidade", en: "Testing & Quality" },
    text: { pt: "Criação e manutenção de testes unitários e preocupação com a qualidade do código.", en: "Writing and maintaining unit tests with a strong focus on code quality." },
  },
  {
    number: "07",
    title: "Docker & AWS",
    text: { pt: "Uso de containers e conceitos de infraestrutura e deploy em ambientes AWS.", en: "Use of containers and infrastructure and deployment concepts in AWS environments." },
  },
  {
    number: "08",
    title: { pt: "Performance & Evolução", en: "Performance & Evolution" },
    text: { pt: "Investigação de bugs, análise de causa raiz e evolução contínua das soluções.", en: "Bug investigation, root cause analysis and continuous improvement of solutions." },
  },
];

export const engineeringPrinciples = [
  { pt: "Entender o problema antes de escolher a tecnologia.", en: "Understand the problem before choosing the technology." },
  { pt: "Separar regra de negócio de detalhes de infraestrutura.", en: "Keep business rules separate from infrastructure details." },
  { pt: "Escrever código pensando em manutenção e evolução.", en: "Write code with maintenance and evolution in mind." },
  { pt: "Automatizar processos repetitivos sempre que possível.", en: "Automate repetitive processes whenever possible." },
  { pt: "Observar performance, confiabilidade e comportamento do sistema.", en: "Monitor performance, reliability and system behavior." },
  { pt: "Usar IA como ferramenta de engenharia, não apenas como gerador de código.", en: "Use AI as an engineering tool, not just a code generator." },
];