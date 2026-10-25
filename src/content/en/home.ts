import type { ServiceCategory } from "../de/home";
import type { TitledText } from "../types";

export const hero = {
  eyebrow: "Digital · AI · Automation",
  headline: ["Digital solutions.", "Intelligent automation.", "Measurable results."],
  lead: "We build modern websites, improve your visibility on Google and automate recurring business processes with AI.",
  audience:
    "For small and medium-sized businesses, service providers and organizations in Germany that want to achieve more online and save time in their daily work.",
  points: [
    "More qualified inquiries through your website",
    "Less manual routine work",
    "Systems that work together",
  ],
};

export const heroVisual = {
  posterAlt: "An abstract tunnel of golden light sparks on a dark background.",
  chat: {
    title: "AI assistant",
    example: "Example dialogue",
    question: "Can you prepare a quote for a new website?",
    answer:
      "Happy to. I need a few details first: which pages are you planning, and do you already have a website? After that I pass your request on to the team.",
    replies: ["New website", "Improve existing site"],
    handover: "Request handed over to the team",
    inputPlaceholder: "Write a message …",
  },
};

export const tools = {
  title: "Tools and technologies we work with",
  items: [
    "Next.js",
    "React",
    "WordPress",
    "Python",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "n8n",
    "LangChain",
    "OpenAI",
    "Mistral",
    "RAG",
    "Docker",
    "REST APIs",
    "Git",
  ],
};

export const servicesSection = {
  title: "Services",
  heading: "Everything that moves your business forward digitally – from a single source.",
  lead: "From your website and visibility on Google to AI-powered automation: the services work together, but can also be commissioned individually.",
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Website Design & Development",
    description: "Fast, responsive websites with a clear structure that explain your offer.",
    benefit: "More trust and more inquiries through your website.",
    slugs: ["webdesign"],
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Technical optimization, helpful content and local visibility for relevant searches.",
    benefit: "You are found by people searching for your services.",
    slugs: ["seo"],
  },
  {
    title: "AI Assistants & AI Agents",
    description:
      "Assistants that answer questions based on your content, and agents that prepare multi-step tasks.",
    benefit: "Faster answers and relief from recurring tasks.",
    slugs: ["ki-assistenten", "ki-agenten"],
  },
  {
    title: "Business Process Automation",
    description:
      "Automate recurring workflows such as email routing, document filing or data transfers.",
    benefit: "Less routine work and fewer transfer errors.",
    slugs: ["automatisierung"],
  },
  {
    title: "Software & System Integrations",
    description: "Connect CRM, website, email and business applications through their interfaces.",
    benefit: "Consistent data without maintaining it twice.",
    slugs: ["integrationen"],
  },
  {
    title: "Support & Maintenance",
    description: "Updates, security, monitoring and further development after launch.",
    benefit: "Your digital infrastructure stays reliable and up to date.",
    slugs: ["wartung-support"],
  },
];

export const benefitsSection = {
  title: "Your benefit",
  heading: "It's not about technology. It's about results for your business.",
};

export const benefits: TitledText[] = [
  {
    title: "Stronger online presence",
    text: "A professional, fast presence that explains your offer clearly and builds trust.",
  },
  {
    title: "More qualified inquiries",
    text: "Clear calls to action and structured forms deliver inquiries your team can work with right away.",
  },
  {
    title: "Better visibility",
    text: "A technically sound website and helpful content improve your chances of being found in search engines.",
  },
  {
    title: "Less manual work",
    text: "Recurring tasks run automatically – your team gains time for customers and demanding work.",
  },
  {
    title: "Connected systems",
    text: "Data flows between CRM, email, website and accounting instead of being entered multiple times.",
  },
  {
    title: "More efficient workflows",
    text: "Clearly documented, reliable processes that don't depend on individual people's memory.",
  },
  {
    title: "Practical AI",
    text: "AI where it actually helps in daily work – with clear boundaries and traceable results.",
  },
  {
    title: "Well-maintained infrastructure",
    text: "Updates, monitoring and further development keep your solutions working in the long term.",
  },
];

export const projectsSection = {
  title: "Projects",
  heading: "Examples of how we approach tasks.",
  lead: "The following entries are example concepts. They show our approach to typical tasks – they are not client projects and no results are claimed.",
};

export const processSection = {
  title: "Collaboration",
  heading: "Four phases. Clear steps. No black box.",
};

export const whySection = {
  title: "Why AMIR",
  heading: "An approach built on clarity and reliability.",
};

export const principles: TitledText[] = [
  {
    title: "Direct communication",
    text: "You talk directly to the people who implement your project – no detours via changing contacts.",
  },
  {
    title: "Tailored to your business",
    text: "No off-the-shelf solutions: we adapt to your workflows, systems and goals.",
  },
  {
    title: "AI with practical value",
    text: "We use AI where it brings a concrete advantage – and say openly when a simpler solution fits better.",
  },
  {
    title: "Transparent project scope",
    text: "Services, schedule and price are set in writing before we start. Changes are agreed beforehand.",
  },
  {
    title: "Maintainable implementation",
    text: "Understandable code, documented workflows and a complete handover – so you are not dependent on us.",
  },
  {
    title: "Long-term support",
    text: "After launch, we can remain your contact for maintenance and further development.",
  },
  {
    title: "Focus on business objectives",
    text: "At the start we define how success can be measured and align the implementation with it.",
  },
];

export const audienceSection = {
  title: "Who we work with",
  heading: "For businesses that want to move forward digitally.",
  lead: "Our services are aimed at organizations for which a strong website, good discoverability and efficient workflows make a noticeable difference.",
};

export const audiences: TitledText[] = [
  {
    title: "Small and medium-sized businesses",
    text: "that want a more professional presence and simpler workflows.",
  },
  {
    title: "Professional service providers",
    text: "that want to present services that need explaining in an understandable way.",
  },
  { title: "Local businesses", text: "that want to be found more easily in their region." },
  {
    title: "Consulting companies",
    text: "that want to structure inquiries and make better use of their knowledge.",
  },
  {
    title: "E-commerce businesses",
    text: "that want to connect shop, inventory and customer service.",
  },
  {
    title: "Organizations with heavy administration",
    text: "that want to reduce recurring administrative tasks.",
  },
];

export const faqSection = {
  title: "FAQ",
  heading: "Answers to what people often ask.",
};

export const finalCta = {
  heading: "Tell us about your challenge.",
  text: "Briefly describe what you want to achieve or where things get stuck today. We'll get back to you with an honest assessment – even if it's that you don't need us.",
};
