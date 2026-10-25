export const SERVICE_SLUGS = [
  "webdesign",
  "seo",
  "ki-assistenten",
  "ki-agenten",
  "automatisierung",
  "integrationen",
  "wartung-support",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface SeoFields {
  title: string;
  description: string;
}

export interface SourceLink {
  label: string;
  url: string;
}

export interface Service {
  slug: ServiceSlug;
  title: string;
  /** One-sentence description used on cards and in the overview index. */
  shortDescription: string;
  /** The main customer outcome, phrased from the client's perspective. */
  primaryBenefit: string;
  /** Introductory paragraphs: what the service is. */
  intro: string[];
  /** Problems this service addresses. */
  problems: string[];
  /** Who benefits from it. */
  audience: string[];
  /** Features and scope of work. */
  included: string[];
  /** Tangible results the client receives. */
  deliverables: string[];
  /** Illustrative scenarios; always presented as examples, never as references. */
  exampleUseCases: Step[];
  /** How implementation works, in order. */
  process: Step[];
  /** Information AMIR needs from the client. */
  clientInputs: string[];
  faqs: FaqItem[];
  /** External, authoritative sources for factual statements (shown at the end of the page). */
  sources: SourceLink[];
  related: ServiceSlug[];
  seo: SeoFields;
}

export interface Solution {
  slug: string;
  title: string;
  problem: string;
  approach: string;
  benefit: string;
  /** Hypothetical scenario that makes the solution concrete. */
  exampleScenario: string;
  /** What AMIR needs to know to assess feasibility. */
  feasibilityInputs: string[];
  related: ServiceSlug[];
}

export const PROJECT_CATEGORIES = ["web", "ai", "automation", "integrations"] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

/**
 * client  – real, delivered client work (may carry verified results)
 * demo    – working demonstration built by AMIR, not for a client
 * concept – illustrative solution concept; nothing was built or delivered
 */
export type ProjectType = "client" | "demo" | "concept";

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  categories: ProjectCategory[];
  industry: string;
  summary: string;
  overview: string;
  context: string;
  challenge: string;
  objectives: string[];
  solution: string;
  implementation: Step[];
  technologies: string[];
  /** Only for client projects, and only results the client has confirmed. */
  verifiedResults: string[] | null;
  lessonsLearned: string[];
  /** What matters when implementing this kind of project (shown for every project type). */
  considerations: string[];
  related: ServiceSlug[];
  featured: boolean;
  seo: SeoFields;
}

export interface ProcessStage {
  title: string;
  summary: string;
  clientRole: string[];
  amirRole: string[];
  deliverables: string[];
  communication: string;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  /** Starts with "<term> ist/is …" so it can be lifted as a direct answer. */
  definition: string;
}

export interface ComparisonTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface CostBlock {
  id: string;
  question: string;
  answer: string;
  factors: string[];
  needed: string[];
  service: ServiceSlug;
}
