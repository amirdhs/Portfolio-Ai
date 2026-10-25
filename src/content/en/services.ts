import type { Service } from "../types";

/** English service content. `slug` is the shared content id; URL slugs are mapped in i18n/routes.ts. */
export const services: Service[] = [
  {
    slug: "webdesign",
    title: "Website Design & Development",
    shortDescription:
      "Fast, well-structured websites that explain your offer clearly and guide visitors towards an inquiry.",
    primaryBenefit: "A website that builds trust and brings in qualified inquiries.",
    intro: [
      "Your website is often the first contact a potential customer has with your business. We design and build websites that load fast, work well on every device and explain your offer so that visitors understand why they should work with you.",
      "We don't start with the design but with your goals: who should visit the website, what questions do these people have, and what should they do at the end? Structure, copy and design follow from that.",
    ],
    problems: [
      "Your current website looks dated and no longer reflects what you offer today.",
      "Visitors can't find what they are looking for quickly enough and leave.",
      "The website is hard to use on a smartphone or loads slowly.",
      "Content is difficult or impossible to update yourself.",
      "The website gets visitors but hardly any inquiries.",
    ],
    audience: [
      "Small and medium-sized businesses that want a more professional online presence",
      "Service providers and consultancies with offers that need explaining",
      "Local businesses that want to be found more easily in their region",
      "Companies with an existing website that needs modernizing",
    ],
    included: [
      "Analysis of target audience, goals and existing website",
      "Page structure, navigation and user guidance",
      "Custom, responsive design without a template look",
      "Technical implementation focused on speed and accessibility",
      "Contact and inquiry forms with proper validation",
      "Technical SEO basics: page titles, meta descriptions, sitemap, structured data",
      "Setup of legal pages such as imprint and privacy policy (content provided by you or your legal advisor)",
    ],
    deliverables: [
      "A live, ready-to-use website",
      "Documentation of structure, maintenance and hosting",
      "Handover of all access credentials and the source code",
      "An introduction to maintaining your content",
    ],
    exampleUseCases: [
      {
        title: "Relaunching a service business website",
        description:
          "A website that has grown over the years gets a new structure: clear service pages, understandable copy and an inquiry form that asks for the most important information up front.",
      },
      {
        title: "A new website for a young company",
        description:
          "A new offer needs a credible presence. We build a compact website that can grow with the business.",
      },
      {
        title: "A landing page for a new service",
        description:
          "For a new product or campaign, we create a focused page with one clear goal – such as appointment requests or downloads.",
      },
    ],
    process: [
      {
        title: "Clarify goals and content",
        description:
          "We discuss your audience, offer and existing content and define the scope of the website.",
      },
      {
        title: "Structure and design",
        description: "You receive a page structure and design drafts that we refine together.",
      },
      {
        title: "Development and content",
        description:
          "We build the website and add your content. You can follow progress in a preview environment.",
      },
      {
        title: "Testing, launch and handover",
        description:
          "After testing on different devices and browsers, the website goes live. You then receive documentation and an introduction.",
      },
    ],
    clientInputs: [
      "A description of your offer and your most important target groups",
      "Existing content: copy, images, logo, references (if available)",
      "Access to your current website and domain, if available",
      "Legal details for the imprint and privacy policy",
      "A contact person for coordination and approvals",
    ],
    faqs: [
      {
        question: "Can you improve my existing website instead of rebuilding it?",
        answer:
          "Yes, an existing website can often be improved instead of rebuilt. At the start we assess whether structure, technology and content are sound or whether a rebuild makes more sense in the long run. You decide based on a clear, reasoned assessment.",
      },
      {
        question: "Can I change content myself later on?",
        answer:
          "Yes, this is possible and we define it at the start. Depending on how often your content changes, we implement a solution with simple content editing or handle changes as part of an ongoing support plan. At handover you receive an introduction and clear documentation.",
      },
      {
        question: "Who writes the copy?",
        answer:
          "You know your business best, so you usually provide the subject-matter content. We help with structure and wording and revise existing copy so it is clear and easy to understand. How much copywriting we take on is defined in the proposal.",
      },
    ],
    sources: [
      {
        label: "W3C: Web Content Accessibility Guidelines (WCAG)",
        url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
      },
      { label: "web.dev: Core Web Vitals", url: "https://web.dev/articles/vitals" },
      {
        label: "Google Search Central: Creating helpful, reliable, people-first content",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
    ],
    related: ["seo", "wartung-support", "ki-assistenten"],
    seo: {
      title: "Website Design & Development",
      description:
        "Modern, fast and responsive websites for small and medium-sized businesses – with a clear structure that guides visitors towards an inquiry.",
    },
  },
  {
    slug: "seo",
    title: "SEO & Search Visibility",
    shortDescription:
      "Technical optimization, clear content and local visibility so that prospects find you on Google.",
    primaryBenefit: "More visibility for the searches that matter to your business.",
    intro: [
      "Search engine optimization makes sure that people looking for your services find your website. It requires a technically sound website, content that answers real questions and – for local businesses – a well-maintained business profile.",
      "We don't promise rankings, because nobody can honestly guarantee them. What we deliver: a thorough analysis, concrete measures and transparent tracking of how things develop.",
    ],
    problems: [
      "Your website doesn't appear for relevant searches, or only very far down.",
      "Technical errors prevent search engines from indexing pages correctly.",
      "It's unclear which terms your customers actually search for.",
      "Local competitors are found more often in your region.",
    ],
    audience: [
      "Businesses whose customers actively search online for solutions",
      "Local businesses and service providers with a regional catchment area",
      "Companies with a new or redesigned website",
      "E-commerce businesses with many product and category pages",
    ],
    included: [
      "Technical SEO audit: indexing, speed, mobile display, structure",
      "Research of relevant search terms and search intent",
      "Optimization of page titles, descriptions, headings and internal linking",
      "Content recommendations and revisions",
      "Structured data for richer search results",
      "Google Search Console setup and privacy-friendly reporting",
      "Guidance on maintaining your Google Business Profile",
    ],
    deliverables: [
      "Audit report with prioritized measures",
      "Implemented technical and content optimizations",
      "Overview of search terms and the pages assigned to them",
      "Regular progress reports, if agreed",
    ],
    exampleUseCases: [
      {
        title: "Technical clean-up after a relaunch",
        description:
          "After a website relaunch, redirects are missing and pages can no longer be found. We identify the causes and fix them.",
      },
      {
        title: "Local visibility for a service provider",
        description:
          "A business wants to appear for searches related to its services in its city. We optimize service pages and the business profile for the region.",
      },
      {
        title: "Content built around customer questions",
        description:
          "Frequent questions from sales and customer service become helpful content that answers exactly those questions in search.",
      },
    ],
    process: [
      {
        title: "Analysis",
        description:
          "We review the technology, content and current visibility of your website and look at your competitive environment.",
      },
      {
        title: "Action plan",
        description:
          "You receive a prioritized list: first the measures that promise the biggest impact for reasonable effort.",
      },
      {
        title: "Implementation",
        description:
          "We implement the agreed measures – directly in your website or in coordination with your current provider.",
      },
      {
        title: "Measure and adjust",
        description: "SEO takes time. We monitor progress and adjust the measures where needed.",
      },
    ],
    clientInputs: [
      "Access to the website or content management system",
      "Access to Google Search Console or permission to set it up",
      "Your most important services, target regions and audiences",
      "Known competitors you compare yourself with",
    ],
    faqs: [
      {
        question: "How quickly will I see results?",
        answer:
          "Technical fixes can take effect relatively quickly; content measures usually take several months. How quickly changes show depends on your starting point, the competition and the search terms involved. That is why we track progress transparently instead of promising fixed dates.",
      },
      {
        question: "Do you guarantee a first-page ranking?",
        answer:
          "No, nobody can honestly guarantee a first-page ranking, because search engines decide the order themselves. We create the best possible conditions through sound technology and helpful content, and we show openly what changes and what does not. Be wary of providers who promise otherwise.",
      },
      {
        question: "Is SEO a one-off measure?",
        answer:
          "A technical baseline optimization is a self-contained project. For visibility to keep growing, however, ongoing work on content and technology pays off, because search engines and competitors keep changing. Both are possible: a one-off project or ongoing support. Which option fits depends on your goals and your competitive environment.",
      },
    ],
    sources: [
      {
        label: "Google Search Central: SEO starter guide",
        url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
      {
        label: "Google Search Central: Creating helpful, reliable, people-first content",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
      {
        label: "Google Search Central: Introduction to structured data",
        url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
      },
    ],
    related: ["webdesign", "wartung-support", "ki-assistenten"],
    seo: {
      title: "SEO & Search Visibility",
      description:
        "Technical search engine optimization, content built around real customer questions and local visibility – with transparent tracking instead of empty promises.",
    },
  },
  {
    slug: "ki-assistenten",
    title: "AI Assistants & Chatbots",
    shortDescription:
      "Assistants that answer frequent questions based on your own content – on your website or internally.",
    primaryBenefit:
      "Fast answers for customers and employees, without your team having to answer every question itself.",
    intro: [
      "An AI assistant answers questions in natural language – on your website, in customer service or internally for your team. It is based on your own content: service descriptions, FAQs, manuals or internal guidelines.",
      "We set up assistants to work within clear boundaries: they answer based on your information, recognize when they don't know something and hand over to a person when necessary.",
    ],
    problems: [
      "Your team answers the same questions by email or phone every day.",
      "Prospects get no answer outside business hours.",
      "Employees spend a long time searching for information in documents and folders.",
      "Knowledge is concentrated in a few people and hard to access.",
    ],
    audience: [
      "Businesses with many recurring customer inquiries",
      "Service providers who want to give prospects initial information around the clock",
      "Teams with extensive internal documentation",
      "Organizations that want to onboard new employees faster",
    ],
    included: [
      "Selection of suitable use cases and content",
      "Preparation of your knowledge sources for the assistant",
      "Configuration of tone, boundaries and handover to people",
      "Integration on your website or into internal tools",
      "Privacy-conscious selection of models and providers",
      "Testing with realistic questions before going live",
    ],
    deliverables: [
      "A configured, tested AI assistant",
      "Documentation of knowledge sources and settings",
      "Instructions for updating the content",
      "An overview of the services used for your data protection documentation",
    ],
    exampleUseCases: [
      {
        title: "FAQ assistant on your website",
        description:
          "Visitors ask about services, procedures or opening hours and get an immediate answer with a link to the relevant page.",
      },
      {
        title: "Internal knowledge assistant",
        description:
          "Employees ask about procedures or policies and receive answers with source references from the internal documentation.",
      },
      {
        title: "Pre-qualifying inquiries",
        description:
          "The assistant asks for the key details of a request and hands a structured summary to your team.",
      },
    ],
    process: [
      {
        title: "Define the use case",
        description:
          "We clarify which questions the assistant should answer and where its limits are.",
      },
      {
        title: "Prepare the knowledge",
        description: "Your content is reviewed, structured and made usable for the assistant.",
      },
      {
        title: "Build and test",
        description: "We set up the assistant and test it with you using real questions.",
      },
      {
        title: "Introduce and improve",
        description:
          "After launch we review where answers are missing or imprecise and improve the knowledge base.",
      },
    ],
    clientInputs: [
      "Typical questions from your customers or employees",
      "Existing content: FAQs, documents, manuals",
      "Guidelines on tone and on topics the assistant should not answer",
      "Requirements for data protection and data location",
    ],
    faqs: [
      {
        question: "Can the assistant give wrong answers?",
        answer:
          "AI models can make mistakes. We reduce the risk by limiting the assistant to your reviewed content, showing sources and referring to a person when it is unsure. Regular spot checks remain advisable so that quality and up-to-dateness are maintained.",
      },
      {
        question: "What happens to the data from conversations?",
        answer:
          "That depends on the chosen provider and configuration. We show you the options, for example providers that process data in the EU, and document the services used so that you can meet your data protection obligations. For the legal assessment you should involve your data protection officer.",
      },
      {
        question: "How does the assistant's knowledge stay up to date?",
        answer:
          "We set up the knowledge base so that you can update content yourself, for example when prices, procedures or opening hours change. On request we take care of it as part of an ongoing support plan and regularly review which questions the assistant could not answer.",
      },
    ],
    sources: [
      {
        label: "EUR-Lex: General Data Protection Regulation (EU) 2016/679",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679",
      },
      {
        label: "EUR-Lex: AI Act, Regulation (EU) 2024/1689",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
      },
    ],
    related: ["ki-agenten", "automatisierung", "webdesign"],
    seo: {
      title: "AI Assistants & Chatbots",
      description:
        "AI assistants that answer questions from customers and employees based on your own content – with clear boundaries and handover to people.",
    },
  },
  {
    slug: "ki-agenten",
    title: "Custom AI Agents",
    shortDescription:
      "AI agents that prepare and complete multi-step tasks across different systems.",
    primaryBenefit: "Complex routine tasks get prepared or done – your team reviews and decides.",
    intro: [
      "An AI agent goes beyond answering questions: it can gather information from different sources, prepare decisions and carry out actions in connected systems – such as drafting a document, creating a record or assigning a task.",
      "We develop agents for clearly defined tasks with controlled permissions. Where responsibility matters, the agent prepares and a person approves.",
    ],
    problems: [
      "Tasks require pulling together information from several systems.",
      "Recurring research or analysis takes up a lot of time.",
      "Simple automations reach their limits because content needs to be understood.",
      "Cases pile up because nobody has time to prepare them.",
    ],
    audience: [
      "Businesses with recurring tasks that are not fully standardized",
      "Teams that work a lot with unstructured information such as emails or documents",
      "Organizations that already use some automation and want to go further",
    ],
    included: [
      "Analysis of the task and definition of clear limits and permissions",
      "Design of the workflow including approval points",
      "Connection of the required systems via their APIs",
      "Logging of every step for traceability",
      "Testing with realistic cases and failure scenarios",
      "Monitoring and alerts when problems occur",
    ],
    deliverables: [
      "A production-ready AI agent for the agreed use case",
      "Documentation of workflow, permissions and interfaces",
      "Logs that make decisions traceable",
      "Instructions for handling errors and exceptions",
    ],
    exampleUseCases: [
      {
        title: "Preparing proposals",
        description:
          "The agent reads a customer inquiry, finds suitable service components and prepares a draft proposal that your team reviews and sends.",
      },
      {
        title: "Research and summaries",
        description:
          "For a new prospect, publicly available information is collected and turned into a short briefing for the first meeting.",
      },
      {
        title: "Handling standard cases",
        description:
          "Recurring requests are recognized, enriched with the necessary data and created as a task in the right system.",
      },
    ],
    process: [
      {
        title: "Understand the task",
        description:
          "Together we document how the task is done today, which systems are involved and where decisions are made.",
      },
      {
        title: "Concept and limits",
        description:
          "We define what the agent does on its own, what it prepares and where a person has to approve.",
      },
      {
        title: "Prototype and trial",
        description: "A first prototype is tested with real, approved examples and improved.",
      },
      {
        title: "Production",
        description:
          "The agent is put into operation step by step – with logging, monitoring and clear responsibility.",
      },
    ],
    clientInputs: [
      "A description of the task and the current workflow",
      "Examples of typical cases (anonymized if necessary)",
      "A list of the systems involved and access to their APIs",
      "Who reviews and approves the results",
    ],
    faqs: [
      {
        question: "What is the difference between an AI agent and an AI assistant?",
        answer:
          "An assistant answers questions; an agent completes tasks in several steps. An agent can gather information from different sources and carry out actions in connected systems, for example creating a record. It always acts within the permissions we define together.",
      },
      {
        question: "Can the agent make decisions on its own?",
        answer:
          "Only within the scope you define. For actions with real consequences, we recommend approval points where a person reviews and confirms. The agent prepares and suggests; responsibility for decisions stays with you and your team. That way you keep control over the results and their effects.",
      },
      {
        question: "Is an agent worth it for my business?",
        answer:
          "That depends on how often the task occurs, how much time it takes and how clearly it can be described. In the first conversation we assess together whether an agent or a simpler automation is the better fit. Often the simpler solution is the right one.",
      },
    ],
    sources: [
      {
        label: "EUR-Lex: AI Act, Regulation (EU) 2024/1689",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
      },
      {
        label: "EUR-Lex: General Data Protection Regulation (EU) 2016/679",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679",
      },
    ],
    related: ["ki-assistenten", "automatisierung", "integrationen"],
    seo: {
      title: "Custom AI Agents",
      description:
        "AI agents for clearly defined, multi-step tasks – with controlled permissions, approval points and traceable logging.",
    },
  },
  {
    slug: "automatisierung",
    title: "Business Process Automation",
    shortDescription:
      "Automate recurring workflows – from incoming email and documents to data transfers.",
    primaryBenefit: "Less manual routine work and fewer transfer errors in day-to-day business.",
    intro: [
      "Many businesses lose time every day on tasks that always run the same way: copying data from one system to the next, sorting emails, filing documents or sending reminders. These workflows can often be automated.",
      "We analyze your processes, identify worthwhile starting points and implement automations that run reliably and are clearly documented. Where content needs to be interpreted, we add AI selectively.",
    ],
    problems: [
      "Employees manually transfer data between different programs.",
      "Incoming emails and requests are sorted and forwarded by hand.",
      "Documents have to be checked, renamed and filed.",
      "Important steps get forgotten because they depend on individual people.",
    ],
    audience: [
      "Organizations with recurring administrative workflows",
      "Small and medium-sized businesses using several software tools",
      "Teams in sales, administration or customer service with a high share of routine work",
    ],
    included: [
      "Mapping and evaluation of existing workflows",
      "Selection of suitable tools – preferably ones you already use",
      "Implementation of the automations with error handling",
      "AI components for understanding text and documents, where useful",
      "Notifications for errors or exceptions",
      "Documentation and handover",
    ],
    deliverables: [
      "Running, tested automations",
      "Process documentation with a before-and-after view",
      "An overview of the services and access credentials used",
      "Instructions for handling exceptions",
    ],
    exampleUseCases: [
      {
        title: "Routing incoming email automatically",
        description:
          "Incoming emails are classified by topic, linked to customer data and automatically handed to the responsible person or the right system.",
      },
      {
        title: "Website inquiries straight into the CRM",
        description:
          "Inquiries from the contact form land in the CRM as a contact and task without copying, including a notification to the team.",
      },
      {
        title: "Filing receipts and documents",
        description:
          "Incoming documents are read, given sensible names and filed in the right folder structure.",
      },
    ],
    process: [
      {
        title: "Map the processes",
        description: "Together we look at how tasks are done today and where time is lost.",
      },
      {
        title: "Prioritize",
        description:
          "We evaluate the starting points by effort and benefit and propose a sensible order.",
      },
      {
        title: "Implement and test",
        description:
          "The automations are implemented and tested with real sample cases before going live.",
      },
      {
        title: "Hand over and support",
        description:
          "You receive documentation and an introduction. During the initial phase we monitor the workflows particularly closely.",
      },
    ],
    clientInputs: [
      "A description of the workflows to be automated",
      "A list of the programs and services in use",
      "Access or test access to the systems involved",
      "Examples of typical cases, including special cases",
    ],
    faqs: [
      {
        question: "Which tools do you use?",
        answer:
          "That depends on your existing systems. We prefer tools that suit you and are maintainable, from automation platforms to custom-built solutions. What matters is that you understand the workflows and do not become dependent on a single tool. We explain the options before you decide.",
      },
      {
        question: "What happens if an automation fails?",
        answer:
          "We build in error handling and notifications. If a step fails, the responsible person is informed so that no case goes unnoticed, and the case can be restarted or completed manually. Every step is logged, so the causes can be traced afterwards.",
      },
      {
        question: "Do I have to switch software?",
        answer:
          "Usually not. The goal is to connect your existing systems better instead of replacing them. Only if a system offers no suitable interface or fundamentally blocks workflows do we discuss alternatives with you, including their advantages and disadvantages. That avoids rushed decisions and unnecessary costs.",
      },
    ],
    sources: [
      {
        label: "EUR-Lex: General Data Protection Regulation (EU) 2016/679",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679",
      },
    ],
    related: ["integrationen", "ki-agenten", "ki-assistenten"],
    seo: {
      title: "Business Process Automation",
      description:
        "Automate recurring business processes: incoming email, documents, data transfers and notifications – reliable and documented.",
    },
  },
  {
    slug: "integrationen",
    title: "CRM & Software Integrations",
    shortDescription:
      "Connections between CRM, website, email and business applications so that data flows without detours.",
    primaryBenefit: "Consistent data across your systems – without maintaining it twice.",
    intro: [
      "In many businesses, CRM, email, accounting, calendar and website work side by side without talking to each other. The result is duplicate data entry, contradictory information and a lot of manual reconciliation.",
      "We connect your systems through their interfaces, define which system leads for which data and make sure changes reliably arrive where they are needed.",
    ],
    problems: [
      "Customer data is maintained differently in several systems.",
      "Information has to be transferred manually from one program to another.",
      "There is no overall view of customers, inquiries and orders.",
      "New software is purchased but can't be integrated into existing workflows.",
    ],
    audience: [
      "Businesses that use or want to introduce a CRM",
      "Teams working with several unconnected programs",
      "E-commerce businesses with a shop, inventory management and shipping providers",
    ],
    included: [
      "Inventory of your systems and data flows",
      "Definition of leading systems and field mapping",
      "Implementation of interfaces and synchronization",
      "Handling of duplicates, conflicts and errors",
      "Secured access credentials and logging",
      "Documentation of the data flows",
    ],
    deliverables: [
      "Working, tested integrations",
      "Data flow diagram and technical documentation",
      "An overview of access, keys and responsibilities",
      "Monitoring with alerts on errors",
    ],
    exampleUseCases: [
      {
        title: "Connecting website and CRM",
        description:
          "New inquiries, newsletter sign-ups or bookings are automatically created as contacts in the CRM.",
      },
      {
        title: "Syncing CRM and accounting",
        description:
          "Won deals are passed to accounting with the correct master data, without entering them again.",
      },
      {
        title: "Syncing shop and inventory",
        description:
          "Stock levels, orders and shipping status stay consistent between online shop and inventory management.",
      },
    ],
    process: [
      {
        title: "Map systems and data flows",
        description: "We document where data is created today and where it should flow.",
      },
      {
        title: "Integration concept",
        description: "We define leading systems, field mappings and how conflicts are handled.",
      },
      {
        title: "Build in a test environment",
        description:
          "The integration is first built and checked with test data before real data flows.",
      },
      {
        title: "Go live and monitor",
        description:
          "After successful testing the integration is activated and closely monitored at first.",
      },
    ],
    clientInputs: [
      "A list of the systems involved, with version or plan",
      "API or administrator access to the systems",
      "A description of which data should flow where",
      "Contacts at your software vendors, if any",
    ],
    faqs: [
      {
        question: "Can any software be connected?",
        answer:
          "Not every one, because a documented interface (API) is usually required. Before making a proposal, we check what your systems allow and tell you openly if a connection cannot be implemented sensibly. It often also depends on the plan of the software in question.",
      },
      {
        question: "What happens when the connected software is updated?",
        answer:
          "Interfaces can change when vendors update their software. Monitoring lets us detect problems early, and as part of an ongoing support plan we adapt integrations when needed. That keeps data flows stable even when individual programs keep evolving. We also advise you on this before you commission anything.",
      },
      {
        question: "How are access credentials protected?",
        answer:
          "Credentials and keys are stored encrypted, given only the permissions they need and never kept in the source code. Where possible, we use dedicated accounts with limited rights instead of administrator accounts, and access is logged so that changes can be traced.",
      },
    ],
    sources: [
      {
        label: "EUR-Lex: General Data Protection Regulation (EU) 2016/679",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679",
      },
    ],
    related: ["automatisierung", "ki-agenten", "wartung-support"],
    seo: {
      title: "CRM & Software Integrations",
      description:
        "Connect CRM, website, email and business applications: clean interfaces, consistent data and no duplicate data entry.",
    },
  },
  {
    slug: "wartung-support",
    title: "Maintenance & Technical Support",
    shortDescription:
      "Updates, security, monitoring and further development – so your digital infrastructure stays reliable.",
    primaryBenefit:
      "A secure, up-to-date website and stable automations – without having to take care of it yourself.",
    intro: [
      "Websites, integrations and automations need care after launch: software has to be updated, security gaps closed and interfaces adapted when they change.",
      "With ongoing support, we take care of these tasks in a predictable way. We define the scope together – from regular technical maintenance to continuous further development.",
    ],
    problems: [
      "Updates get postponed because nobody on the team is responsible.",
      "Errors are only noticed when customers complain.",
      "Small change requests stay open for months.",
      "The original provider can no longer be reached.",
    ],
    audience: [
      "Businesses whose website or automations are business-critical",
      "Teams without their own IT or development resources",
      "Businesses after completing a project with AMIR, and owners of existing websites after a takeover review",
    ],
    included: [
      "Regular updates of software and dependencies",
      "Monitoring of availability and functionality",
      "Security checks and backups as agreed",
      "Bug fixing within agreed response times",
      "Smaller adjustments and content changes",
      "Regular check-ins on improvements",
    ],
    deliverables: [
      "An agreed support scope with clearly defined services",
      "A log of the maintenance work carried out",
      "A contact person for technical questions",
      "Recommendations for further development",
    ],
    exampleUseCases: [
      {
        title: "Taking over an existing website",
        description:
          "A website was built by a previous provider. After a technical review, we take over maintenance and further development.",
      },
      {
        title: "Ongoing support after a project",
        description:
          "After a new website or automation goes live, we make sure everything stays up to date and working.",
      },
      {
        title: "Continuous improvement",
        description:
          "At regular intervals we review what works well and implement smaller improvements.",
      },
    ],
    process: [
      {
        title: "Technical review",
        description: "We check the current state of your website or systems and document risks.",
      },
      {
        title: "Define the support scope",
        description: "Together we define which services and response times you need.",
      },
      {
        title: "Ongoing support",
        description: "We carry out maintenance and monitoring and document all work.",
      },
      {
        title: "Regular check-ins",
        description:
          "At agreed intervals we discuss anything noticeable and possible improvements.",
      },
    ],
    clientInputs: [
      "Access to hosting, domain and content management system",
      "Existing documentation, if available",
      "Expected response times and responsibilities",
      "A list of known issues or open requests",
    ],
    faqs: [
      {
        question: "Do you also support websites you didn't build?",
        answer:
          "Yes, after a technical review. We clarify what condition the website is in, which risks exist and whether supporting it in its current form makes sense. Based on that, we define together what the support covers and what should be fixed beforehand.",
      },
      {
        question: "How is support billed?",
        answer:
          "Usually as a monthly flat fee for a clearly defined scope, for example updates, monitoring and a set number of smaller adjustments. Additional work is agreed in advance. That way you know beforehand what the support includes and what to expect.",
      },
      {
        question: "Can I end the support agreement?",
        answer:
          "Yes. The term and notice periods are set out in the contract. When it ends, you receive all access credentials and the documentation, so that you can take over the support yourself or hand it to another provider. You are not permanently tied to us.",
      },
    ],
    sources: [
      { label: "web.dev: Core Web Vitals", url: "https://web.dev/articles/vitals" },
      {
        label: "W3C: Web Content Accessibility Guidelines (WCAG)",
        url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
      },
    ],
    related: ["webdesign", "integrationen", "seo"],
    seo: {
      title: "Maintenance & Technical Support",
      description:
        "Predictable maintenance, security updates, monitoring and further development for websites, integrations and automations.",
    },
  },
];
