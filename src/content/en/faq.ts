import type { FaqGroup } from "../de/faq";
import type { FaqItem } from "../types";

/** The eight questions shown on the homepage, in order. */
export const coreFaqs: FaqItem[] = [
  {
    question: "What services does AMIR offer?",
    answer:
      "AMIR offers seven services: website development, search engine optimization, AI assistants, AI agents, process automation, software and CRM integrations, and maintenance and support. All services can be commissioned individually or combined, for example a new website with a connected inquiry process and ongoing support afterwards.",
  },
  {
    question: "How does a project begin?",
    answer:
      "A project begins with your inquiry via the contact form or by email. We then arrange a non-binding first conversation to clarify your situation and goals. Based on that, you receive an honest assessment and, if it is a good fit, a written proposal with a clearly described scope and schedule.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "The price of a website depends on its scope: the number and type of pages, design effort, required features, copywriting and connections to other systems. We only name a serious figure once we know your requirements. You then receive a written proposal with a defined scope. Our costs page explains the main price factors.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "The duration depends on scope, complexity and how quickly content and approvals are available. A compact website usually takes less time than a project with interfaces or AI features. With the proposal you receive a realistic schedule with milestones, so you always know where the project stands.",
  },
  {
    question: "Can AMIR improve an existing website?",
    answer:
      "Yes, AMIR can improve an existing website. We first review technology, content and visibility and then recommend whether a targeted revision or a rebuild makes more sense. You decide based on a clear, reasoned assessment, not on assumptions or on what is easiest for us to sell.",
  },
  {
    question: "Can AI solutions be integrated with existing tools?",
    answer:
      "In many cases, yes, provided the programs you use offer suitable interfaces (APIs). Before making a proposal, we check which connections are possible and tell you openly if something cannot be implemented sensibly. Typical examples are connections to a CRM, email, calendar or document storage.",
  },
  {
    question: "Does AMIR offer ongoing support?",
    answer:
      "Yes, AMIR offers ongoing support. After launch, you can hand over maintenance, updates, monitoring and further development to us under a support agreement. We define the scope and response times together, so you know what to expect and what has to be agreed separately.",
  },
  {
    question: "How is project pricing determined?",
    answer:
      "The project price is based on the agreed scope of work. Depending on the project, we offer a fixed price for clearly defined work or time-and-materials billing with a transparent estimate. Additional requests are agreed with effort and price before they are implemented, so there are no surprises.",
  },
];

export const faqGroups: FaqGroup[] = [
  { id: "allgemein", title: "General & process", items: coreFaqs },
  {
    id: "ki-und-daten",
    title: "AI & data protection",
    items: [
      {
        question: "Does AI make sense for my business at all?",
        answer:
          "AI is most worthwhile where text needs to be understood, information summarized or many similar requests answered. For clearly rule-based workflows, a classic automation is often the better and cheaper choice. We honestly recommend what fits your case, even when that does not involve AI at all.",
      },
      {
        question: "How do you handle data protection in AI solutions?",
        answer:
          "We consider data protection from the start: which data is processed, by which provider and in which location. We document the services used so you can meet your obligations. This does not replace legal advice; where needed, you should involve your data protection officer.",
      },
      {
        question: "Can AI systems make mistakes?",
        answer:
          "Yes, AI systems can make mistakes and phrase wrong information convincingly. That is why we use AI within clear boundaries: based on reviewed content, with source references and logging and, where responsibility matters, with approval by a person. Regular spot checks remain advisable.",
      },
    ],
  },
  {
    id: "zusammenarbeit",
    title: "Working together",
    items: [
      {
        question: "Who owns the source code and content after the project?",
        answer:
          "The rights of use for the results created for you are set out in the proposal. In principle, after completion you receive all access credentials, the source code and the documentation, so that you are not dependent on us and can always decide for yourself how to proceed.",
      },
      {
        question: "Do you work remotely?",
        answer:
          "Yes, we work remotely. Coordination usually takes place via video calls, email and shared documents, so collaboration works regardless of location. You see interim results in a preview environment before anything goes live and can give feedback there. That keeps decisions and changes traceable for everyone involved.",
      },
      {
        question: "What do you need from me to get started?",
        answer:
          "For the first conversation, a short description of your plans is enough. For implementation we need, depending on the project, content such as copy and images, access to existing systems and a contact person for coordination and approvals. You can find a matching list on every service page.",
      },
    ],
  },
];
