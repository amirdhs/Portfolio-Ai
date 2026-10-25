import type { ComparisonTable, GlossaryTerm } from "../types";

export const terms: GlossaryTerm[] = [
  {
    id: "seo",
    term: "Search engine optimization (SEO)",
    definition:
      "Search engine optimization (SEO) is the improvement of a website so that it is found more easily in search engines such as Google for relevant search queries. It covers a technically sound website, helpful content and credible information about the business.",
  },
  {
    id: "geo",
    term: "Generative engine optimization (GEO)",
    definition:
      "Generative engine optimization (GEO) is the preparation of content so that AI search systems such as ChatGPT Search, Perplexity or Google AI Overviews can understand it, regard it as trustworthy and cite it. Clear statements, verifiable sources and unambiguous information about the business matter most.",
  },
  {
    id: "aeo",
    term: "Answer engine optimization (AEO)",
    definition:
      "Answer engine optimization (AEO) is the structuring of content so that search engines and voice assistants can take short, direct answers from it. Typical means are questions as headings, concise answers, lists, tables and FAQ markup.",
  },
  {
    id: "ki-assistent",
    term: "AI assistant",
    definition:
      "An AI assistant is a program that answers questions in natural language, for example on a website or internally within a company. It relies on predefined content such as FAQs or manuals, names its sources and refers to a person when it is unsure.",
  },
  {
    id: "ki-agent",
    term: "AI agent",
    definition:
      "An AI agent is a system that prepares or completes a task in several steps on its own, gathering information and carrying out actions in connected systems. It works with clearly defined permissions and approval points where a person reviews the result.",
  },
  {
    id: "prozessautomatisierung",
    term: "Process automation",
    definition:
      "Process automation is the rule-based, automatic execution of recurring work steps, such as transferring data between programs, sorting emails or sending reminders. It saves time and reduces transfer errors without every step having to be done by hand.",
  },
  {
    id: "systemintegration",
    term: "System integration",
    definition:
      "A system integration is the connection of several software applications so that they exchange data automatically, for example website, CRM and accounting. It ensures that information only has to be maintained once and is consistent across all systems involved.",
  },
  {
    id: "api",
    term: "API (application programming interface)",
    definition:
      "An API (application programming interface) is a defined interface through which programs exchange data with each other. Whether a system can be connected usually depends on whether the vendor provides a documented API and which functions it covers.",
  },
  {
    id: "crm",
    term: "CRM system",
    definition:
      "A CRM system (customer relationship management) is software in which contacts, inquiries, proposals and communication with customers are stored centrally. It helps to keep track of customer relationships and to distribute tasks within the team.",
  },
  {
    id: "strukturierte-daten",
    term: "Structured data",
    definition:
      "Structured data is machine-readable additional information in the code of a page that tells search engines and AI systems what the page is about, for example a service, a business or frequently asked questions. It usually uses the schema.org vocabulary.",
  },
  {
    id: "barrierefreiheit",
    term: "Accessibility",
    definition:
      "Accessibility means that a website can be used by as many people as possible, including people with limitations in seeing, hearing, moving or understanding. The Web Content Accessibility Guidelines (WCAG) provide orientation, for example with sufficient contrast and keyboard operation.",
  },
  {
    id: "responsives-webdesign",
    term: "Responsive web design",
    definition:
      "Responsive web design is a design approach in which a website automatically adapts to the size of the device, from smartphone to large monitor. Content only has to be maintained once and remains easy to read and use everywhere.",
  },
];

export const comparison: ComparisonTable = {
  caption: "AI assistant, AI agent and automation compared",
  headers: ["", "AI assistant", "AI agent", "Automation"],
  rows: [
    [
      "Main task",
      "Answer questions",
      "Prepare or complete multi-step tasks",
      "Run recurring steps according to fixed rules",
    ],
    [
      "Example",
      "An answer to a customer question with a link to the right page",
      "Read an inquiry, prepare a draft proposal, create a task in the CRM",
      "Automatically save a form inquiry as a contact in the CRM",
    ],
    [
      "Handling unclear cases",
      "Refers to a person",
      "Asks for confirmation at approval points",
      "Reports errors and exceptions for review",
    ],
    [
      "A good fit when",
      "many similar questions come in",
      "a task touches several sources and systems",
      "the workflow is clear and rule-based",
    ],
    [
      "Main limit",
      "Only answers from the content it was given",
      "Only acts within defined permissions",
      "Only implements what can be described as a rule",
    ],
  ],
};
