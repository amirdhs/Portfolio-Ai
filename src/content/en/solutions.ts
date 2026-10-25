import type { Solution } from "../types";

/** Problem-first solution examples. All scenarios are illustrative, not client references. */
export const solutions: Solution[] = [
  {
    slug: "anfragen-gewinnen-und-verwalten",
    title: "Generating and managing website inquiries",
    problem:
      "Your website brings in few inquiries – and the ones that arrive are incomplete, land in a shared inbox and are handled at different speeds.",
    approach:
      "We revise service pages and calls to action, design an inquiry form that asks for the key information in a structured way, and automatically route every inquiry to the responsible person or into your CRM.",
    benefit:
      "Visitors know how to get in touch, your team receives complete information, and no inquiry gets lost.",
    exampleScenario:
      "A consultancy receives inquiries by email without details on scope or timing. A structured form with automatic handover to the CRM saves follow-up questions and makes the status of every inquiry visible.",
    feasibilityInputs: [
      "The address of your current website",
      "How inquiries arrive and are handled today",
      "Which information you need to prepare a proposal",
      "The CRM or inbox you use",
    ],
    related: ["webdesign", "integrationen", "automatisierung"],
  },
  {
    slug: "haeufige-kundenfragen-beantworten",
    title: "Answering frequent customer questions",
    problem:
      "Your team answers the same questions about services, prices, procedures or deadlines every day – time that is missing for more demanding work.",
    approach:
      "We turn your answers into a reviewed knowledge base and deploy an AI assistant that answers questions on that basis, links to the right pages and hands over to your team when needed.",
    benefit:
      "Customers get an answer immediately, even outside business hours, and your team can focus on individual requests.",
    exampleScenario:
      "A service provider receives many questions about the process and required documents. An assistant on the website answers them and points to the contact form for individual cases.",
    feasibilityInputs: [
      "A list of the most frequent questions",
      "Existing answers, FAQs or documents",
      "Topics the assistant should not answer",
      "Requirements for data protection and data location",
    ],
    related: ["ki-assistenten", "webdesign"],
  },
  {
    slug: "e-mail-eingang-automatisieren",
    title: "Processing incoming email automatically",
    problem:
      "A shared inbox receives inquiries, invoices, appointment requests and follow-ups all mixed together. Sorting and forwarding takes time every day, and urgent requests get lost.",
    approach:
      "Incoming emails are automatically classified by topic, key details are extracted and the case is handed to the responsible person or the right system. Unclear cases go to a review list.",
    benefit:
      "Requests reach the right place faster, and your team can see at a glance what is urgent.",
    exampleScenario:
      "An administrative team receives many emails in a shared inbox every day. An automation recognizes invoices, appointment requests and complaints and files each in the right system.",
    feasibilityInputs: [
      "The email service you use (e.g. Microsoft 365, Google Workspace)",
      "Typical types of email and their approximate share",
      "Where each type of case should be passed on",
      "Requirements for data protection and retention",
    ],
    related: ["automatisierung", "ki-agenten", "integrationen"],
  },
  {
    slug: "crm-und-tools-verbinden",
    title: "Connecting your CRM and business tools",
    problem:
      "Customer data is maintained in the CRM, in accounting and in spreadsheets at the same time. Nobody knows for sure which version is current.",
    approach:
      "We define which system leads for which data and connect your applications through their interfaces so that changes are transferred automatically.",
    benefit:
      "Reliable data, fewer duplicate entries and a complete view of your customer relationships.",
    exampleScenario:
      "A sales team maintains contacts in the CRM while accounting works with its own master data. An integration transfers new customers and changes automatically.",
    feasibilityInputs: [
      "A list of the applications you use",
      "Which data is created in which system",
      "Availability of APIs or your software plan",
      "Known problems with duplicates or outdated data",
    ],
    related: ["integrationen", "automatisierung"],
  },
  {
    slug: "verwaltungsaufwand-reduzieren",
    title: "Reducing repetitive administrative work",
    problem:
      "Reminders, status updates, appointment confirmations and list maintenance are done by hand – week after week.",
    approach:
      "We map the workflows together, evaluate them by effort and benefit and automate the most time-consuming tasks first.",
    benefit:
      "More time for customers and core work, fewer forgotten steps and more reliable workflows.",
    exampleScenario:
      "After every order, a confirmation is sent manually, a task is created and a list is updated. An automation handles these three steps reliably in the background.",
    feasibilityInputs: [
      "A description of the recurring tasks",
      "How often they occur and who does them",
      "The programs and services involved",
    ],
    related: ["automatisierung", "integrationen"],
  },
  {
    slug: "dokumente-und-daten-automatisieren",
    title: "Automating document and data workflows",
    problem:
      "Documents such as forms, delivery notes or contracts are opened, retyped, renamed and filed. It's time-consuming and error-prone.",
    approach:
      "Documents are read automatically, the relevant data is checked and transferred to your system. Discrepancies or uncertain cases are flagged for manual review.",
    benefit: "Less retyping, fewer transfer errors and consistent filing.",
    exampleScenario:
      "A business receives order forms as PDFs. The details are extracted, matched against customer data and created as an order – a person checks unclear fields.",
    feasibilityInputs: [
      "Sample documents (anonymized)",
      "Which details should be extracted",
      "The target system for the data",
      "The number of documents per week or month",
    ],
    related: ["automatisierung", "ki-agenten"],
  },
  {
    slug: "internes-wissen-zugaenglich-machen",
    title: "Making internal knowledge easier to access",
    problem:
      "Information about processes, products and policies is spread across folders, documents and people's heads. Employees ask around or search for a long time.",
    approach:
      "We structure your internal content and make it searchable through an internal AI assistant that answers with source references and respects access rights.",
    benefit:
      "Faster answers in daily work, easier onboarding and less dependence on individual people.",
    exampleScenario:
      "New employees have many questions about internal processes. An assistant answers them based on the handbook and links to the relevant source.",
    feasibilityInputs: [
      "Where your documents are stored today",
      "Who may access which information",
      "Examples of typical questions",
    ],
    related: ["ki-assistenten", "integrationen"],
  },
  {
    slug: "bestehende-website-modernisieren",
    title: "Modernizing an existing business website",
    problem:
      "The website has aged: slow, awkward on smartphones, hard to maintain and no longer up to date in content.",
    approach:
      "We review technology, content and visibility, decide with you between revision and rebuild, and protect existing search rankings with proper redirects.",
    benefit: "A contemporary presence that loads fast, is easy to find and simple to maintain.",
    exampleScenario:
      "A company website that is more than ten years old is rebuilt. Existing content is revised and old addresses are redirected to the new pages.",
    feasibilityInputs: [
      "The address of the existing website",
      "Access to hosting and content management system",
      "What works well and what doesn't on the current website",
    ],
    related: ["webdesign", "seo", "wartung-support"],
  },
];
