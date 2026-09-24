export const links = {
  linkedin: "https://www.linkedin.com/in/matheus-carlos-497050244/",
  github: "https://github.com/Matheuszy",
  whatsapp: "https://wa.me/5513991790394",
};

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
  },
  {
    id: 2,
    number: "02",
    title: "Multi-Tenant Inventory",
    category: "Estoque & PDV",
    description:
      "Sistema de estoque desenvolvido com arquitetura multi-tenant, controle de acesso e estrutura preparada para diferentes organizações.",
    stack: ["Java", "Spring Boot", "Multi-tenancy", "PostgreSQL"],
    github: "https://github.com/Codex-System/Sistema-de-estoque",
  },
  {
    id: 3,
    number: "03",
    title: "Sentinel",
    category: "Fraud Detection",
    description:
      "Projeto de detecção de possíveis fraudes utilizando análise de dados e modelos de Machine Learning.",
    stack: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/Matheuszy/Projeto-sentinel",
  },
  {
    id: 4,
    number: "04",
    title: "Smart Product Recommender",
    category: "AI Engine",
    description:
      "Engine de recomendação de produtos combinando diferentes estratégias algorítmicas para geração de recomendações.",
    stack: ["Python", "FastAPI", "Markov", "Bayes", "A*"],
    github: "https://github.com/Matheuszy/srmart-recommender",
  },
  {
    id: 5,
    number: "05",
    title: "Java Microservices",
    category: "Distributed Systems",
    description:
      "Estudos e implementação de uma arquitetura baseada em microsserviços e conceitos de sistemas distribuídos.",
    stack: ["Java", "Microservices", "Distributed Systems"],
    github: "https://github.com/Matheuszy/microsservi-os-java",
  },
  {
    id: 6,
    number: "06",
    title: "Credit Prediction",
    category: "Analytics",
    description:
      "Projeto de análise e previsão de dados de crédito utilizando técnicas de Machine Learning e SQL.",
    stack: ["Python", "SQL", "Machine Learning"],
    github: "https://github.com/Matheuszy/projeto-ML-previsao-dados-credito",
  },
  {
    id: 7,
    number: "07",
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
    title: "Backend",
    items: [
      "Java",
      "Kotlin",
      "Spring Boot",
      "Python",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    title: "Data & Messaging",
    items: ["PostgreSQL", "SQL", "Kafka", "RabbitMQ"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
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
    items: [
      "AI Agents",
      "Context Engineering",
      "MCP",
      "Machine Learning",
    ],
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