import { describe, expect, it } from "vitest";
import { getContent } from "@/content";
import { LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import {
  definedTermSetSchema,
  faqSchema,
  howToSchema,
  organizationSchema,
  webPageSchema,
  webSiteSchema,
} from "@/lib/structured-data";
import { siteConfig } from "@/config/site";
import { buildLlmsTxt } from "@/app/llms.txt/route";

const wordCount = (text: string) => text.trim().split(/\s+/).length;

describe.each(LOCALES)("SEO quality (%s)", (locale) => {
  const content = getContent(locale);
  const suffix = ` | ${getDictionary(locale).meta.titleSuffix}`;

  const seoFields = [
    ...content.services.map((s) => ({ id: s.slug, ...s.seo })),
    ...content.projects.map((p) => ({ id: p.slug, ...p.seo })),
  ];

  it("keeps titles within 60 characters including the brand suffix", () => {
    for (const { id, title } of seoFields) {
      expect((title + suffix).length, id).toBeLessThanOrEqual(60);
    }
  });

  it("keeps meta descriptions between 70 and 160 characters", () => {
    for (const { id, description } of seoFields) {
      expect(description.length, id).toBeGreaterThanOrEqual(70);
      expect(description.length, id).toBeLessThanOrEqual(160);
    }
  });

  it("writes FAQ answers that work as direct answers (40–62 words)", () => {
    const faqs = [
      ...content.faqGroups.flatMap((g) => g.items),
      ...content.services.flatMap((s) => s.faqs),
      ...content.pages.contact.faqs,
    ];
    expect(faqs.length).toBeGreaterThan(30);
    for (const { question, answer } of faqs) {
      expect(wordCount(answer), question).toBeGreaterThanOrEqual(40);
      expect(wordCount(answer), question).toBeLessThanOrEqual(62);
    }
  });

  it("defines every glossary term in a sentence that starts with the term", () => {
    for (const { term, definition } of content.glossary.terms) {
      expect(definition.toLowerCase(), term).toContain(term.toLowerCase().split(" ")[0]);
    }
    const { headers, rows } = content.glossary.comparison;
    expect(rows.length).toBeGreaterThan(1);
    for (const row of rows) expect(row).toHaveLength(headers.length);
  });

  it("cites only https sources for service claims", () => {
    for (const service of content.services) {
      expect(service.sources.length, service.slug).toBeGreaterThan(0);
      for (const source of service.sources) expect(source.url, service.slug).toMatch(/^https:\/\//);
    }
  });

  it("links every cost block to an existing service", () => {
    const slugs = content.services.map((s) => s.slug);
    expect(content.costs.blocks.length).toBeGreaterThan(0);
    for (const block of content.costs.blocks) expect(slugs).toContain(block.service);
  });
});

describe("structured data", () => {
  it("declares the site and organisation entities", () => {
    expect(webSiteSchema("de")).toMatchObject({ "@type": "WebSite", name: siteConfig.name });
    expect(organizationSchema("en")["@type"]).toBe("ProfessionalService");
  });

  it("only emits founder, contact point and sameAs when the business has configured them", () => {
    const org = organizationSchema("de");
    if (!siteConfig.founder) expect(org).not.toHaveProperty("founder");
    if (!siteConfig.socials?.length) expect(org).not.toHaveProperty("sameAs");
  });

  it("stamps pages with dateModified and speakable selectors", () => {
    const page = webPageSchema({
      name: "Test",
      description: "Beschreibung",
      path: "/kosten",
      locale: "de",
      speakable: ["[data-speakable]"],
    });
    expect(page).toMatchObject({
      "@type": "WebPage",
      inLanguage: "de",
      dateModified: siteConfig.contentUpdated,
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-speakable]"] },
    });
  });

  it("adds page context to FAQ schema only when given", () => {
    const items = [{ question: "Q?", answer: "A." }];
    expect(faqSchema(items)).not.toHaveProperty("dateModified");
    expect(faqSchema(items, { path: "/kontakt", locale: "de" })).toMatchObject({
      inLanguage: "de",
      dateModified: siteConfig.contentUpdated,
    });
  });

  it("numbers HowTo steps and DefinedTerm sets", () => {
    const howTo = howToSchema(
      "Ablauf",
      "Beschreibung",
      [
        { name: "A", text: "a" },
        { name: "B", text: "b" },
      ],
      "de",
    );
    expect(howTo).toMatchObject({ step: [{ position: 1 }, { position: 2 }] });
    const terms = definedTermSetSchema(
      "Glossar",
      [{ term: "SEO", definition: "SEO ist …" }],
      "/glossar",
      "de",
    );
    expect(terms).toMatchObject({ "@type": "DefinedTermSet", hasDefinedTerm: [{ name: "SEO" }] });
  });
});

describe("llms.txt", () => {
  it("lists the freshness date and the new reference pages in both languages", () => {
    const text = buildLlmsTxt();
    expect(text).toContain(siteConfig.contentUpdated);
    for (const path of ["/glossar", "/kosten", "/en/glossary", "/en/costs"]) {
      expect(text).toContain(path);
    }
  });
});
