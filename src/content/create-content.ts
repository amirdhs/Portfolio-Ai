import type * as deAbout from "./de/about";
import type { FaqGroup } from "./de/faq";
import type * as deHome from "./de/home";
import type * as dePages from "./de/pages";
import {
  PROJECT_CATEGORIES,
  type FaqItem,
  type ProcessStage,
  type Project,
  type ProjectCategory,
  type Service,
  type ServiceSlug,
  type Solution,
  type Step,
  type ComparisonTable,
  type CostBlock,
  type GlossaryTerm,
} from "./types";

/** Shape every locale's content must provide. German is the reference. */
export interface ContentData {
  services: Service[];
  solutions: Solution[];
  projects: Project[];
  coreFaqs: FaqItem[];
  faqGroups: FaqGroup[];
  processOverview: Step[];
  processStages: ProcessStage[];
  about: (typeof deAbout)["about"];
  home: typeof deHome;
  pages: (typeof dePages)["pages"];
  glossary: { terms: GlossaryTerm[]; comparison: ComparisonTable };
  costs: { blocks: CostBlock[]; closing: { title: string; text: string } };
}

export function isProjectCategory(value: string): value is ProjectCategory {
  return (PROJECT_CATEGORIES as readonly string[]).includes(value);
}

export function filterProjects(items: Project[], category: string | null | undefined): Project[] {
  if (!category || !isProjectCategory(category)) return items;
  return items.filter((project) => project.categories.includes(category));
}

/** Adds lookup helpers to a locale's content. */
export function createContent(data: ContentData) {
  const getService = (id: string): Service | undefined => data.services.find((s) => s.slug === id);
  return {
    ...data,
    getService,
    getServices(ids: readonly ServiceSlug[]): Service[] {
      return ids.map((id) => {
        const service = getService(id);
        if (!service) throw new Error(`Unknown service slug: ${id}`);
        return service;
      });
    },
    getProject: (id: string): Project | undefined => data.projects.find((p) => p.slug === id),
    getFeaturedProjects: (): Project[] => data.projects.filter((p) => p.featured),
  };
}

export type SiteContent = ReturnType<typeof createContent>;
