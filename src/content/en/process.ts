import type { ProcessStage, Step } from "../types";

/** Four-stage summary for the homepage. */
export const processOverview: Step[] = [
  {
    title: "Discovery & analysis",
    description:
      "We get to know your business, goals and existing systems and work out where the biggest lever is.",
  },
  {
    title: "Strategy & planning",
    description:
      "You receive a proposal with a clear scope, schedule and contact person – and know what to expect before we start.",
  },
  {
    title: "Design & implementation",
    description: "We implement in traceable steps. You see interim results early and approve them.",
  },
  {
    title: "Launch, support & optimization",
    description:
      "After testing and handover, we can continue to support operations and improve based on real usage.",
  },
];

/** The complete customer journey. */
export const processStages: ProcessStage[] = [
  {
    title: "Initial inquiry",
    summary:
      "You describe your plans via the inquiry form or by email. The more specific the details, the better we can prepare.",
    clientRole: [
      "A short description of your plans and situation",
      "The service you are interested in, if known",
    ],
    amirRole: [
      "Review of the inquiry",
      "A reply with a suggested time for a first conversation, or follow-up questions",
    ],
    deliverables: ["A personal reply to your inquiry"],
    communication: "By email – simple and traceable.",
  },
  {
    title: "Discovery conversation",
    summary:
      "In a non-binding conversation we clarify goals, constraints and expectations. You get to know us and can ask any questions.",
    clientRole: [
      "Describe goals, challenges and constraints",
      "Name contact persons and decision paths",
    ],
    amirRole: [
      "Targeted questions about your situation",
      "A first assessment of feasibility and possible approaches",
    ],
    deliverables: ["A shared understanding of the project", "Agreement on the next steps"],
    communication: "Video call or phone call.",
  },
  {
    title: "Requirements analysis",
    summary:
      "We take a closer look at your requirements, existing systems and content. For larger projects, this can be a separate, pre-agreed work step.",
    clientRole: [
      "Access to or insight into existing systems",
      "Provide examples, documents and existing content",
    ],
    amirRole: [
      "Analysis of technology, processes and content",
      "Identification of risks and open questions",
    ],
    deliverables: ["A summary of the requirements", "A list of open points and assumptions"],
    communication: "Coordination by email and, if needed, a short call.",
  },
  {
    title: "Proposal & scope definition",
    summary:
      "You receive a written proposal describing the scope of work, schedule, price and assumptions. What is not included is stated too.",
    clientRole: ["Review the proposal and ask questions", "Approve and commission the work"],
    amirRole: [
      "Transparent description of scope, effort and schedule",
      "Walk you through the proposal on request",
    ],
    deliverables: ["A written proposal", "A schedule with milestones"],
    communication: "Proposal by email, discussion if needed.",
  },
  {
    title: "Planning & implementation",
    summary:
      "We implement the project in clear stages. Interim results become visible early, so you can give feedback before changes become costly.",
    clientRole: ["Provide content and feedback on time", "Review and approve interim results"],
    amirRole: [
      "Implementation according to the agreed scope",
      "Regular status updates",
      "Early notice of any deviations",
    ],
    deliverables: ["Interim results in a preview or test environment", "Documented decisions"],
    communication: "Regular updates at an agreed rhythm.",
  },
  {
    title: "Testing & quality assurance",
    summary:
      "Before launch we test functionality, display on different devices, forms, interfaces and error cases.",
    clientRole: ["Acceptance testing from a business perspective", "Feedback on any issues found"],
    amirRole: ["Technical testing and accessibility checks", "Fixing the issues found"],
    deliverables: ["A tested solution ready for acceptance"],
    communication: "A shared list of open points until acceptance.",
  },
  {
    title: "Launch & handover",
    summary:
      "After your approval, the solution goes live. You receive documentation, access credentials and an introduction.",
    clientRole: ["Approval for launch", "Attend the introduction"],
    amirRole: [
      "Carry out the launch",
      "Checks immediately after going live",
      "Hand over documentation and access",
    ],
    deliverables: ["The live solution", "Documentation and access credentials", "An introduction"],
    communication: "An agreed launch date and a short wrap-up meeting.",
  },
  {
    title: "Ongoing support & improvement",
    summary:
      "If you wish, we remain your contact: for maintenance, updates, monitoring and step-by-step improvement based on real usage.",
    clientRole: ["Feedback on day-to-day experience", "Prioritize new requests"],
    amirRole: ["Maintenance and monitoring as agreed", "Suggestions for sensible improvements"],
    deliverables: ["Maintenance logs", "Improvements implemented as agreed"],
    communication: "Agreed response times and regular check-ins.",
  },
];
