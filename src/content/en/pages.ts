import type { pages as dePages } from "../de/pages";

/** Page-level copy: titles, intros, meta descriptions and closing calls to action. */
export const pages: typeof dePages = {
  home: {
    description:
      "AMIR builds websites, improves your visibility on Google and automates business processes with AI – for small and medium-sized businesses in Germany.",
  },
  services: {
    title: "Services",
    heading: "Services that work together.",
    lead: "Every service solves a concrete problem – and can be combined with the others. For each area you'll find what is included, how implementation works and what we need from you.",
    description:
      "Website development, SEO, AI assistants, AI agents, process automation, software integrations, and maintenance and support – all AMIR services at a glance.",
    cta: {
      heading: "Not sure which service fits?",
      text: "Describe your plans in your own words. We'll tell you which approach makes sense – and which doesn't.",
    },
  },
  solutions: {
    title: "Solutions",
    heading: "Starting from the problem – not the technology.",
    lead: "Here you'll find typical challenges and how we approach them. The scenarios described are examples showing what a solution can look like. Whether and how they apply to your business is something we clarify together.",
    description:
      "Solutions by business problem: more inquiries, faster answers, automated email and documents, connected systems and modernized websites.",
    cta: {
      heading: "Your challenge isn't listed?",
      text: "This list isn't complete. Describe where things get stuck in your business – we'll check whether and how we can help.",
    },
  },
  projects: {
    title: "Projects",
    heading: "Projects, demonstrations and example concepts.",
    lead: "Every entry is clearly labelled: client projects were delivered for a client, demonstration projects were built by AMIR itself, and example concepts describe our approach to typical tasks. We only publish results that have been measured and confirmed.",
    description:
      "AMIR portfolio: web development, AI solutions, automation and integrations – clearly labelled as client project, demonstration or example concept.",
    legendTitle: "How to read the entries",
    cta: {
      heading: "Let's talk about your project.",
      text: "Whether one of the examples matches your situation or you have something completely different in mind – we look forward to your message.",
    },
    explain: {
      title: "How to read the example projects",
      paragraphs: [
        "Every example concept follows the same structure: starting point, challenge, objectives, solution and implementation, plus technologies and notes on what matters when implementing it. That lets you see how we approach a task before you get in touch.",
        "The examples are not client projects and contain no results or figures, because none of it was actually implemented and measured. Once AMIR delivers projects for clients, they will appear here as client projects, with results only when the client has confirmed them.",
        "Use the categories above to filter by web development, AI solutions, automation and integrations. The selected category appears in the address bar, so you can share filtered views.",
      ],
    },
  },
  about: {
    title: "About",
    description:
      "Who AMIR is, how we work and how we think about artificial intelligence: practical, transparent and built for the long term.",
    cta: {
      heading: "Let's get to know each other.",
      text: "In a non-binding first conversation we clarify whether and how we can support you.",
    },
  },
  process: {
    title: "Process",
    heading: "From the first inquiry to ongoing support.",
    lead: "A clear process creates reliability. Here you can see every phase of working together: what happens, who is responsible for what, what you receive and how we communicate.",
    description:
      "How working with AMIR runs in eight phases, from the first inquiry to ongoing support – with responsibilities, results and communication in each phase.",
    labels: {
      clientRole: "Your role",
      amirRole: "Our role",
      deliverables: "Result",
      communication: "Communication",
    },
    cta: {
      heading: "Ready for the first step?",
      text: "The first phase starts with your inquiry. A few sentences are enough.",
    },
  },
  faq: {
    title: "FAQ",
    heading: "Questions and answers.",
    lead: "Answers to frequent questions about services, process, costs, AI and working together. Your question isn't listed? Write to us.",
    description:
      "Frequently asked questions about AMIR: services, project process, costs, timelines, AI integration, data protection and ongoing support.",
    cta: {
      heading: "Still have questions?",
      text: "Write to us – we'll answer your question personally.",
    },
  },
  contact: {
    title: "Contact",
    heading: "Tell us about your project.",
    lead: "Use the form for a project inquiry or a non-binding first conversation. The more we know about your situation, the more specifically we can respond.",
    description:
      "Contact AMIR: project inquiry or non-binding first conversation about websites, SEO, AI solutions, automation and integrations.",
    formTitle: "Project inquiry",
    directTitle: "Direct contact",
    directFallback:
      "The inquiry form is the fastest way to reach us. Further contact options will be added here.",
    nextStepsTitle: "What happens after your inquiry",
    nextSteps: [
      "We read your inquiry personally and get back to you with a reply or follow-up questions.",
      "If there is mutual interest, we arrange a non-binding first conversation by video or phone.",
      "If it's a fit, you receive a written proposal with a clear scope and schedule.",
    ],
    faqTitle: "Frequently asked questions about inquiries",
    faqs: [
      {
        question: "Is the first conversation non-binding?",
        answer:
          "Yes, the first conversation is non-binding. In it we clarify your situation, goals and constraints and give an initial assessment of feasibility. A contractual commitment only arises once you receive a written proposal and commission the work. The conversation takes place by video or phone.",
      },
      {
        question: "What information helps with a project inquiry?",
        answer:
          "Helpful details are a short description of your plans, your main business challenge, the service you are interested in and, if available, the address of your current website. Budget and timeline are optional. The more specific your details, the more precisely we can reply and the fewer follow-up questions we need.",
      },
      {
        question: "What happens to the details I submit in the form?",
        answer:
          "Your details are used solely to handle your inquiry. The form sends them over an encrypted connection as an email to our mailbox; they are not stored in a database on this website. Details and your rights are set out in the privacy policy.",
      },
      {
        question: "Can I get in touch without a specific project?",
        answer:
          "Yes. If you are not sure yet which service fits, choose the option for advice in the form and describe your situation in your own words. We will tell you honestly which approach makes sense and which does not, even if that means you don't need us.",
      },
    ],
    prepareTitle: "What you can prepare for your inquiry",
    prepare: [
      "A short description of what you want to achieve",
      "The address of your current website, if you have one",
      "Examples of workflows that take a lot of time today",
      "A list of the programs you use",
      "Your desired timeline, if known",
    ],
  },
  glossary: {
    title: "Glossary",
    heading: "Terms explained simply.",
    lead: "Short, plain definitions of web design, search engines, AI and automation, so you can better assess proposals and recommendations.",
    description:
      "AMIR glossary: plain definitions of SEO, GEO, AI assistant, AI agent, automation, integration, API, CRM and accessibility, explained for business owners.",
    comparisonTitle: "AI assistant, AI agent or automation?",
    comparisonIntro:
      "The three approaches solve different tasks. The table shows how they differ and when each one fits.",
    cta: {
      heading: "A term left unexplained?",
      text: "Ask us. We'll explain it in your context and tell you honestly what is relevant for your business.",
    },
  },
  costs: {
    title: "Costs and price factors",
    heading: "What affects the cost?",
    lead: "We don't quote flat prices that wouldn't fit your case. Instead, this page explains which factors determine the effort and what we need from you for a reliable proposal.",
    description:
      "What do a website, SEO, an AI assistant, automation and maintenance cost? These factors determine the price and this is what AMIR needs for a reliable proposal.",
    factorsTitle: "These factors determine the price",
    neededTitle: "What we need for a proposal",
    serviceLink: "View the service",
    cta: {
      heading: "Let's assess your case.",
      text: "Describe your plans. You'll receive an honest assessment and, if it's a good fit, a proposal with a clear scope.",
    },
  },
  legal: {
    imprint: {
      title: "Imprint",
      description:
        "Imprint and legal notice of AMIR pursuant to § 5 DDG: details on the business, contact, representation and VAT at a glance.",
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "Privacy policy of AMIR: how personal data is processed, including hosting, the contact form, your rights and the supervisory authorities.",
    },
    cookies: {
      title: "Cookie Settings",
      description:
        "Cookie settings at AMIR: this website does not set cookies or use tracking. Find out how that could change in the future.",
    },
  },
};
