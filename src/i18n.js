import { createContext, createElement, useContext, useEffect, useState } from "react";

export const LANGS = ["pt", "en"];
const STORAGE_KEY = "portfolio-lang";

const ui = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      freelance: "Freelance",
      projects: "Projetos",
      stack: "Stack",
      certifications: "Certificações",
      engineering: "Engenharia",
      contact: "Contato",
      menu: "Menu",
      switchLang: "Switch to English",
    },
    hero: {
      titleA: "Eu transformo",
      titleAccent: "problemas complexos",
      titleB: "em software.",
      description:
        "Software Engineer fullstack com foco em backend (Java, Kotlin e Python) — do banco de dados à interface, construindo APIs, sistemas distribuídos, integrações financeiras e soluções com IA.",
      viewProjects: "Ver projetos",
      talk: "Falar comigo",
    },
    about: {
      p1: "Minha trajetória começou em uma área de negócios, onde tive contato direto com processos, operações internacionais e automação. Com o tempo, passei a transformar esse conhecimento em soluções de software.",
      p2: "Hoje meu foco está no desenvolvimento backend e na construção de sistemas organizados, escaláveis e fáceis de evoluir.",
      p3: "Trabalho principalmente com Java, Kotlin, Spring Boot e Python, enquanto exploro arquitetura distribuída, cloud, DevOps e engenharia de IA.",
      status: "Construindo. Aprendendo. Evoluindo.",
      focusLabel: "FOCO ATUAL",
      ecosystemLabel: "ECOSSISTEMA",
      edgeLabel: "DIFERENCIAL",
      educationLabel: "FORMAÇÃO",
      education: "Eng. de Software — Alura",
    },
    experience: {
      descpay:
        "Desenvolvimento de soluções backend para o ecossistema de pagamentos, trabalhando com APIs, regras financeiras, integrações externas, processamento assíncrono e evolução contínua dos sistemas.",
      confidential: "PROJETO CONFIDENCIAL",
      mobile:
        "Desenvolvimento fullstack de um aplicativo mobile voltado para a digitalização da experiência de consumo em eventos presenciais. A proposta central é eliminar as barreiras físicas do processo de compra — substituindo fichas, dinheiro em espécie e maquininhas por um fluxo 100% digital: o usuário deposita créditos diretamente no app e os utiliza para adquirir produtos no evento, sem filas, sem troco e sem depender de infraestrutura física de pagamento.",
      mobileImpact:
        "O impacto esperado vai além da conveniência: ao centralizar as transações digitalmente, o modelo permite rastrear comportamento de consumo em tempo real, reduzir perdas operacionais e abrir novas possibilidades de receita para os organizadores — desde controle de estoque dinâmico até estratégias de precificação por demanda.",
    },
    freelance: {
      intro:
        "Projetos desenvolvidos para clientes — soluções com impacto direto no negócio, construídas com foco em qualidade e escalabilidade.",
      count: (n) => `${n} projeto${n !== 1 ? "s" : ""}`,
      privateBadge: "● CLIENTE PRIVADO",
      more: "Mais projetos em breve",
    },
    projects: {
      label: "PROJETOS PESSOAIS",
      intro:
        "Projetos que representam meu processo de aprendizado, experimentação e construção de software.",
      count: (n) => `${n} projeto${n !== 1 ? "s" : ""} selecionado${n !== 1 ? "s" : ""}`,
      details: (title) => `Ver detalhes de ${title}`,
      flowLabel: "Fluxo de arquitetura",
      github: "Ver no GitHub",
      close: "Fechar",
    },
    certifications: { label: "CERTIFICATIONS & FORMAÇÃO" },
    engineering: {
      p1: "Tecnologia é consequência. Antes dela vem o problema, o contexto e as decisões que precisam ser tomadas.",
      p2: "Meu objetivo é construir soluções que façam sentido para o negócio e que continuem fazendo sentido quando o sistema crescer.",
    },
    contact: {
      titleA: "Tem um problema",
      titleB: "interessante?",
      titleAccent: "Vamos conversar.",
      sub: "Estou aberto a oportunidades em engenharia de software, backend, Java/Kotlin, sistemas distribuídos e projetos que envolvam IA.",
    },
    footer: "Software Engineer · Brazil",
    meta: {
      description:
        "Portfólio de Matheus Carlos — Software Engineer focado em Backend, Java, Kotlin, Python, arquitetura e sistemas distribuídos.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      freelance: "Freelance",
      projects: "Projects",
      stack: "Stack",
      certifications: "Certifications",
      engineering: "Engineering",
      contact: "Contact",
      menu: "Menu",
      switchLang: "Mudar para português",
    },
    hero: {
      titleA: "I turn",
      titleAccent: "complex problems",
      titleB: "into software.",
      description:
        "Fullstack Software Engineer focused on backend (Java, Kotlin and Python) — from the database to the interface, building APIs, distributed systems, financial integrations and AI-powered solutions.",
      viewProjects: "View projects",
      talk: "Get in touch",
    },
    about: {
      p1: "My journey started in a business role, where I worked directly with processes, international operations and automation. Over time, I began turning that knowledge into software solutions.",
      p2: "Today my focus is backend development and building systems that are well organized, scalable and easy to evolve.",
      p3: "I work mainly with Java, Kotlin, Spring Boot and Python, while exploring distributed architecture, cloud, DevOps and AI engineering.",
      status: "Building. Learning. Evolving.",
      focusLabel: "CURRENT FOCUS",
      ecosystemLabel: "ECOSYSTEM",
      edgeLabel: "EDGE",
      educationLabel: "EDUCATION",
      education: "Software Eng. — Alura",
    },
    experience: {
      descpay:
        "Building backend solutions for the payments ecosystem, working with APIs, financial rules, external integrations, asynchronous processing and continuous system evolution.",
      confidential: "CONFIDENTIAL PROJECT",
      mobile:
        "Fullstack development of a mobile app that digitizes the consumer experience at in-person events. The core idea is to remove the physical barriers of purchasing — replacing tokens, cash and card machines with a 100% digital flow: users deposit credits directly in the app and use them to buy products at the event, with no lines, no change and no dependence on physical payment infrastructure.",
      mobileImpact:
        "The expected impact goes beyond convenience: by centralizing transactions digitally, the model makes it possible to track consumer behavior in real time, reduce operational losses and open new revenue streams for organizers — from dynamic inventory control to demand-based pricing strategies.",
    },
    freelance: {
      intro:
        "Projects built for clients — solutions with direct business impact, delivered with a focus on quality and scalability.",
      count: (n) => `${n} project${n !== 1 ? "s" : ""}`,
      privateBadge: "● PRIVATE CLIENT",
      more: "More projects coming soon",
    },
    projects: {
      label: "PERSONAL PROJECTS",
      intro:
        "Projects that reflect my process of learning, experimenting and building software.",
      count: (n) => `${n} selected project${n !== 1 ? "s" : ""}`,
      details: (title) => `View details of ${title}`,
      flowLabel: "Architecture flow",
      github: "View on GitHub",
      close: "Close",
    },
    certifications: { label: "CERTIFICATIONS & EDUCATION" },
    engineering: {
      p1: "Technology is a consequence. Before it come the problem, the context and the decisions that need to be made.",
      p2: "My goal is to build solutions that make sense for the business and keep making sense as the system grows.",
    },
    contact: {
      titleA: "Got an",
      titleB: "interesting problem?",
      titleAccent: "Let’s talk.",
      sub: "I’m open to opportunities in software engineering, backend, Java/Kotlin, distributed systems and AI-related projects.",
    },
    footer: "Software Engineer · Brazil",
    meta: {
      description:
        "Portfolio of Matheus Carlos — Software Engineer focused on Backend, Java, Kotlin, Python, architecture and distributed systems.",
    },
  },
};

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {}
  const nav = (typeof navigator !== "undefined" && navigator.language) || "pt";
  return nav.toLowerCase().startsWith("pt") ? "pt" : "en";
}

const I18nContext = createContext(null);

export const FX_DURATION = 1300;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const [fx, setFx] = useState(null);

  useEffect(() => {
    if (!fx) return;
    const id = setTimeout(() => setFx(null), FX_DURATION);
    return () => clearTimeout(id);
  }, [fx]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", ui[lang].meta.description);
  }, [lang]);

  const tr = (value) =>
    value && typeof value === "object" && !Array.isArray(value)
      ? value[lang] ?? value.pt
      : value;

  const toggle = () => {
    if (fx) return;
    const to = lang === "pt" ? "en" : "pt";
    if (!prefersReducedMotion()) setFx({ id: Date.now(), from: lang, to });
    setLang(to);
  };

  const value = { lang, t: ui[lang], tr, toggle, fx };

  return createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  return useContext(I18nContext);
}
