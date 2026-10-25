import type { Project } from "../types";

/**
 * Portfolio entries (English). All current entries are illustrative solution
 * concepts (type "concept"): nothing here was built for or delivered to a
 * client, and no results are claimed.
 */
export const projects: Project[] = [
  {
    slug: "relaunch-dienstleister-website",
    title: "Relaunching a service business website",
    type: "concept",
    categories: ["web"],
    industry: "Professional services",
    summary:
      "How a website that has grown over the years becomes a clearly structured presence with a structured inquiry process.",
    overview:
      "This example concept shows how we approach the relaunch of a typical service business website: from analysis and new structure to technical implementation.",
    context:
      "We assume a service company with several business areas whose website has been extended over the years. Prospects struggle to find information, and inquiries arrive unstructured by email.",
    challenge:
      "The website should explain the offer clearly, work well on smartphones and capture inquiries so the team can prepare a proposal straight away – without losing existing search visibility.",
    objectives: [
      "A clear structure with one page per service",
      "Short loading times and good usability on all devices",
      "An inquiry form that asks for the key project information",
      "Preserving existing search rankings through proper redirects",
    ],
    solution:
      "A rebuilt website with clear navigation, service pages following a consistent pattern, a structured inquiry form and technical search engine optimization.",
    implementation: [
      {
        title: "Content inventory",
        description: "All existing pages are recorded and assessed: keep, revise, merge or remove.",
      },
      {
        title: "Structure and design",
        description:
          "The new page structure follows the questions of the target audience. The design relies on clear typography and hierarchy.",
      },
      {
        title: "Technical implementation",
        description:
          "Statically generated pages ensure short loading times. The form validates input and forwards inquiries by email.",
      },
      {
        title: "Redirects and launch",
        description:
          "Old addresses are redirected to the matching new pages, and the sitemap is submitted in Google Search Console.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Google Search Console"],
    verifiedResults: null,
    lessonsLearned: [
      "A content inventory before design prevents old problems from being carried into the new website.",
      "A form with a few targeted questions is more helpful than a long form that puts people off.",
      "Redirects belong in the project scope, not in the weeks after launch.",
    ],
    considerations: [
      "Existing addresses must be redirected cleanly so that visibility and bookmarks are preserved.",
      "Copy and structure are created before the design, so that the design serves the content.",
      "The form and privacy notices are planned together, not added afterwards.",
      "Accessibility and loading time are considered from the start and checked before launch.",
    ],
    related: ["webdesign", "seo", "wartung-support"],
    featured: true,
    seo: {
      title: "Example concept: Service business website relaunch",
      description:
        "Example concept: how we approach relaunching a grown service business website – structure, inquiry process, technology and SEO.",
    },
  },
  {
    slug: "ki-faq-assistent",
    title: "AI assistant for frequent customer questions",
    type: "concept",
    categories: ["ai", "web"],
    industry: "Customer service",
    summary:
      "An assistant on the website that answers recurring questions based on reviewed content and hands over to people.",
    overview:
      "This example concept describes an AI assistant that answers website visitors' frequent questions – with clear boundaries, source references and handover to the team.",
    context:
      "We assume a business whose team answers similar questions about services, procedures and required documents by email and phone every day.",
    challenge:
      "The assistant should answer reliably, not make things up, recognize sensitive topics and cleanly hand over conversations it can't resolve to a person.",
    objectives: [
      "Immediate answers to frequent questions, even outside business hours",
      "Answers based exclusively on reviewed content",
      "Handover to the team with a summary of the request",
      "Transparency for users that they are talking to an AI",
    ],
    solution:
      "A website assistant that searches a curated knowledge base, answers with a link to the relevant page and offers a pre-filled contact form when uncertain.",
    implementation: [
      {
        title: "Knowledge base",
        description:
          "Frequent questions and reviewed answers are collected, structured and prepared as the assistant's foundation.",
      },
      {
        title: "Answer logic",
        description:
          "The assistant retrieves matching content and phrases answers only from it. Without a matching source, it refers to the team.",
      },
      {
        title: "Boundaries and handover",
        description:
          "Topics such as individual pricing or legal questions are recognized and passed directly to a person.",
      },
      {
        title: "Review",
        description:
          "Unanswered questions are collected – without personal data – and used to improve the knowledge base.",
      },
    ],
    technologies: ["Language model API (e.g. with EU data processing)", "Vector search", "Next.js"],
    verifiedResults: null,
    lessonsLearned: [
      "The quality of the answers depends above all on the quality of the knowledge base.",
      "A good handover to people matters as much as good answers.",
      "Users should always be able to tell that they are talking to an AI system.",
    ],
    considerations: [
      "The knowledge base must be reviewed by people before the assistant uses it.",
      "The assistant states that it is an AI and names its sources.",
      "Topics with legal or individual consequences have a fixed handover to the team.",
      "Conversations are handled with minimal data; the provider and data location are documented.",
    ],
    related: ["ki-assistenten", "webdesign", "automatisierung"],
    featured: true,
    seo: {
      title: "Example concept: AI assistant for customer questions",
      description:
        "Example concept of an AI assistant that answers frequent customer questions based on reviewed content and hands over to the team.",
    },
  },
  {
    slug: "e-mail-eingang-automatisierung",
    title: "Automated processing of incoming email",
    type: "concept",
    categories: ["automation", "ai"],
    industry: "Administration & back office",
    summary:
      "Incoming emails are classified, key details extracted and cases automatically handed to the right place.",
    overview:
      "This example concept shows how a shared inbox can be relieved with automation and AI-supported classification.",
    context:
      "We assume a business where inquiries, invoices, appointment requests and complaints arrive in one shared inbox and are sorted by hand every day.",
    challenge:
      "Routing must work reliably, misrouted emails must be detectable, and personal data may only be processed as far as necessary.",
    objectives: [
      "Automatic routing of the most common email types",
      "Extraction of relevant details such as customer number or date",
      "Handover to the responsible team or system",
      "A review list for uncertain cases instead of silent errors",
    ],
    solution:
      "An automated workflow that fetches new emails, classifies them by topic, extracts details and creates cases in the appropriate system. Uncertain cases go to a person for review.",
    implementation: [
      {
        title: "Define categories",
        description:
          "Together with the team, the most important topics are defined and backed with examples.",
      },
      {
        title: "Classification",
        description:
          "An AI component assigns emails to the categories and estimates how certain its assignment is.",
      },
      {
        title: "Routing",
        description:
          "Depending on the category, a task is created, a forward is triggered or a record is updated.",
      },
      {
        title: "Control",
        description: "Every step is logged. Failed cases trigger a notification.",
      },
    ],
    technologies: [
      "Microsoft Graph API or Gmail API",
      "Automation platform (e.g. n8n)",
      "Language model API",
    ],
    verifiedResults: null,
    lessonsLearned: [
      "Starting with a few clearly defined categories is more robust than trying to cover everything at once.",
      "A visible review list for uncertain cases builds trust in the automation.",
    ],
    considerations: [
      "Personal data is only processed as far as needed for classification.",
      "Uncertain assignments go to a person instead of being processed automatically.",
      "Every step is logged so that misrouted cases can be traced.",
      "The automation starts with a few categories and is extended step by step.",
    ],
    related: ["automatisierung", "ki-agenten", "integrationen"],
    featured: true,
    seo: {
      title: "Example concept: Automating incoming email",
      description:
        "Example concept: automatically classify incoming emails, extract key details and hand each case to the right person or system, with human review.",
    },
  },
  {
    slug: "crm-synchronisation",
    title: "Synchronizing website, CRM and accounting",
    type: "concept",
    categories: ["integrations", "automation"],
    industry: "Small and medium-sized businesses",
    summary: "Website inquiries, CRM contacts and accounting customer data kept consistent.",
    overview:
      "This example concept describes how three previously separate systems are connected so that customer data only has to be maintained once.",
    context:
      "We assume a business that receives inquiries by email, maintains contacts in a CRM and enters customer data again in its accounting software for invoices.",
    challenge:
      "Data should flow between the systems without duplicates or contradictory versions. Each system must clearly know which data it leads.",
    objectives: [
      "Automatically create website inquiries as a contact and task in the CRM",
      "Pass won deals with master data to accounting",
      "Avoid duplicates and resolve conflicts traceably",
      "Make errors visible instead of swallowing them",
    ],
    solution:
      "An integration layer that processes events from website and CRM, reconciles data and hands it to the responsible system – with logging and alerts on errors.",
    implementation: [
      {
        title: "Data model",
        description:
          "For every field, we define which system leads and how fields map to each other.",
      },
      {
        title: "Connection",
        description:
          "The systems are connected via their official APIs; access keys are stored securely.",
      },
      {
        title: "Reconciliation",
        description:
          "Before new records are created, duplicates are checked. Conflicts are logged and reported for review.",
      },
      {
        title: "Monitoring",
        description: "Failed transfers are retried and reported if problems persist.",
      },
    ],
    technologies: [
      "CRM API (e.g. HubSpot or Pipedrive)",
      "Accounting API",
      "Webhooks",
      "TypeScript",
    ],
    verifiedResults: null,
    lessonsLearned: [
      "The question of the leading system determines the quality of every integration.",
      "Cleaning up existing duplicates before launch pays off.",
    ],
    considerations: [
      "Before the start, it is defined which system leads for which data.",
      "Duplicates are cleaned up before the first synchronization.",
      "Credentials are stored encrypted and issued with minimal permissions.",
      "Failed transfers are retried and reported if problems persist.",
    ],
    related: ["integrationen", "automatisierung", "wartung-support"],
    featured: false,
    seo: {
      title: "Example concept: Connecting CRM and accounting",
      description:
        "Example concept: how website inquiries, CRM contacts and accounting data are connected so that customer data only has to be maintained once.",
    },
  },
];
