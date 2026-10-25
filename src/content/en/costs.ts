import type { CostBlock } from "../types";

export const blocks: CostBlock[] = [
  {
    id: "website",
    service: "webdesign",
    question: "What affects the cost of a website?",
    answer:
      "The cost of a website depends mainly on its scope and on the effort for concept, design and features. A compact business site is far less work than a website with many service pages, several languages and interfaces. We only name a price once your requirements are clear.",
    factors: [
      "Number and type of pages",
      "Effort for concept and custom design",
      "Features such as forms, multiple languages or search",
      "Copywriting and imagery: who supplies, who creates",
      "Connections to other systems, such as a CRM or email service",
      "Requirements for accessibility, speed and data protection",
    ],
    needed: [
      "The goal of the website and your most important audiences",
      "Existing content, images and logo",
      "Desired features and connections",
      "Desired timeline",
    ],
  },
  {
    id: "seo",
    service: "seo",
    question: "What affects the cost of search engine optimization?",
    answer:
      "The cost of SEO depends on whether you want a one-off project or ongoing support, and on how large and competitive your market is. A technical audit with an action plan is clearly scoped; continuous work on content depends on its extent and your goals.",
    factors: [
      "Size of the website and condition of the technology",
      "Competition for the search terms you want",
      "One-off project or ongoing support",
      "Amount of content to be created or revised",
      "Regional or multilingual focus",
      "Extent of tracking and reporting",
    ],
    needed: [
      "Access to the website and Google Search Console",
      "Your most important services, regions and audiences",
      "Known competitors",
      "Previous SEO measures, if any",
    ],
  },
  {
    id: "ki-assistent",
    service: "ki-assistenten",
    question: "What affects the cost of an AI assistant?",
    answer:
      "The cost of an AI assistant depends on how much content has to be prepared, where it is used and what requirements apply to data protection and handover to people. On top of that come the ongoing usage costs of the chosen language model, which we explain in advance.",
    factors: [
      "Amount and quality of existing content, such as FAQs and documents",
      "Where it is used: website, customer service or internally",
      "Requirements for data protection and data location",
      "Connection to other systems, for example for handover to staff",
      "Ongoing usage costs of the language model",
      "Extent of testing and maintenance of the knowledge base",
    ],
    needed: [
      "Typical questions from your customers or employees",
      "Existing content and documents",
      "Topics the assistant should not answer",
      "Requirements for data protection and data location",
    ],
  },
  {
    id: "automatisierung",
    service: "automatisierung",
    question: "What affects the cost of automations and integrations?",
    answer:
      "The cost depends on the number of systems involved, the complexity of the workflows and the quality of the available interfaces. A single, clearly described workflow is manageable; many special cases, data clean-up and strict requirements for error handling increase the effort.",
    factors: [
      "Number of systems involved",
      "Quality and scope of the available interfaces",
      "Number of special cases and exceptions in the workflow",
      "Clean-up of existing data, such as duplicates",
      "Requirements for monitoring, error handling and logging",
      "Ongoing fees of the services used",
    ],
    needed: [
      "A description of today's workflow",
      "A list of the programs in use, with plan",
      "Examples of typical cases, including special cases",
      "Access or test access to the systems",
    ],
  },
  {
    id: "wartung",
    service: "wartung-support",
    question: "What affects the cost of maintenance and support?",
    answer:
      "The cost of maintenance and support depends on the agreed scope: how often updates and checks take place, how quickly we should respond and how many adjustments are included. A monthly flat fee for clearly defined services is the usual model.",
    factors: [
      "Size of the website or of the systems being supported",
      "Desired response times",
      "Frequency of updates, backups and checks",
      "Included smaller adjustments and content changes",
      "Condition of the website at takeover",
      "Extent of monitoring and reporting",
    ],
    needed: [
      "Access to hosting, domain and content management system",
      "Existing documentation, if available",
      "Expected response times and responsibilities",
      "A list of known issues or open requests",
    ],
  },
];

export const closing = {
  title: "How to get a reliable price",
  text: "Describe your plans in the inquiry form. We get back to you with questions, estimate the effort and, on that basis, prepare a written proposal with a defined scope. Additional requests are agreed with effort and price before they are implemented.",
};
