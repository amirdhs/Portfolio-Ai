import { describe, expect, it } from "vitest";
import { getContent } from "@/content";
import { filterProjects, isProjectCategory } from "@/content/create-content";
import { SERVICE_SLUGS } from "@/content/types";
import { LOCALES } from "@/i18n/config";

const FORBIDDEN = /lorem|ipsum|\btodo\b|\btbd\b|xxx|\bfoo\b|platzhalter|placeholder/i;

function collectStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(collectStrings);
  return [];
}

/** Recursively compares array lengths and object keys, ignoring string contents. */
function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, v]) => typeof v !== "function")
        .map(([k, v]) => [k, shape(v)]),
    );
  }
  return typeof value;
}

describe.each(LOCALES)("content (%s)", (locale) => {
  const content = getContent(locale);

  it("contains exactly one service per required id", () => {
    expect(content.services.map((s) => s.slug).sort()).toEqual([...SERVICE_SLUGS].sort());
  });

  it("gives every service each section the brief requires", () => {
    for (const service of content.services) {
      expect(service.intro.length).toBeGreaterThan(0);
      expect(service.problems.length).toBeGreaterThanOrEqual(3);
      expect(service.audience.length).toBeGreaterThanOrEqual(2);
      expect(service.included.length).toBeGreaterThanOrEqual(4);
      expect(service.deliverables.length).toBeGreaterThanOrEqual(2);
      expect(service.exampleUseCases.length).toBeGreaterThanOrEqual(2);
      expect(service.process.length).toBeGreaterThanOrEqual(3);
      expect(service.clientInputs.length).toBeGreaterThanOrEqual(3);
      expect(service.faqs.length).toBeGreaterThanOrEqual(2);
      expect(service.seo.description.length).toBeLessThanOrEqual(170);
    }
  });

  it("only relates to existing services and never to itself", () => {
    for (const service of content.services) {
      expect(service.related).not.toContain(service.slug);
      expect(() => content.getServices(service.related)).not.toThrow();
    }
    expect(() => content.getServices(["nope" as never])).toThrow(/Unknown service/);
  });

  it("links the homepage categories to all seven services", () => {
    const linked = content.home.serviceCategories.flatMap((c) => c.slugs);
    expect(new Set(linked)).toEqual(new Set(SERVICE_SLUGS));
  });

  it("has eight solutions with feasibility inputs and valid related services", () => {
    expect(content.solutions).toHaveLength(8);
    for (const solution of content.solutions) {
      expect(solution.feasibilityInputs.length).toBeGreaterThan(0);
      expect(() => content.getServices(solution.related)).not.toThrow();
    }
  });

  it("never claims results for non-client work", () => {
    for (const project of content.projects) {
      if (project.type !== "client") expect(project.verifiedResults).toBeNull();
      expect(project.categories.every(isProjectCategory)).toBe(true);
      expect(() => content.getServices(project.related)).not.toThrow();
    }
  });

  it("provides featured projects and lookups", () => {
    expect(content.getFeaturedProjects().length).toBeGreaterThanOrEqual(3);
    expect(content.getProject(content.projects[0].slug)).toBe(content.projects[0]);
    expect(content.getProject("missing")).toBeUndefined();
    expect(content.getService("seo")?.slug).toBe("seo");
  });

  it("answers the eight homepage questions and describes the process", () => {
    expect(content.coreFaqs).toHaveLength(8);
    expect(content.processOverview).toHaveLength(4);
    expect(content.processStages).toHaveLength(8);
  });

  it("makes no numeric claims in the hero highlights (no invented statistics)", () => {
    for (const point of content.home.hero.points) expect(point).not.toMatch(/\d/);
  });

  it("contains no placeholder or filler text", () => {
    const offenders = collectStrings(content).filter((text) => FORBIDDEN.test(text));
    expect(offenders).toEqual([]);
  });
});

describe("language parity", () => {
  it("keeps English content structurally identical to German", () => {
    const de = getContent("de");
    const en = getContent("en");
    expect(shape(en)).toEqual(shape(de));
    expect(en.services.map((s) => s.slug)).toEqual(de.services.map((s) => s.slug));
    expect(en.projects.map((p) => [p.slug, p.type, p.categories])).toEqual(
      de.projects.map((p) => [p.slug, p.type, p.categories]),
    );
  });
});

describe("filterProjects", () => {
  const { projects } = getContent("de");

  it("filters by category and ignores unknown categories", () => {
    const ai = filterProjects(projects, "ai");
    expect(ai.length).toBeGreaterThan(0);
    expect(ai.every((p) => p.categories.includes("ai"))).toBe(true);
    expect(filterProjects(projects, "unknown")).toEqual(projects);
    expect(filterProjects(projects, null)).toEqual(projects);
  });
});
