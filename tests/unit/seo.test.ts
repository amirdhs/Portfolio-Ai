import { afterEach, describe, expect, it, vi } from "vitest";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/structured-data";
import { getContent } from "@/content";
import { siteConfig } from "@/config/site";

afterEach(() => vi.unstubAllEnvs());

describe("buildMetadata", () => {
  it("builds canonical, Open Graph and language alternates from the route map", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.de/");
    const meta = buildMetadata({
      title: "Leistungen",
      description: "Beschreibung",
      route: "services",
    });
    expect(meta.title).toBe("Leistungen");
    expect(meta.alternates?.canonical).toBe("https://example.de/leistungen");
    expect(meta.alternates?.languages).toEqual({
      de: "https://example.de/leistungen",
      en: "https://example.de/en/services",
      "x-default": "https://example.de/leistungen",
    });
    expect(meta.openGraph).toMatchObject({
      url: "https://example.de/leistungen",
      locale: "de_DE",
      siteName: "AMIR",
      type: "website",
    });
  });

  it("emits English URLs and cross-language alternates", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.de");
    const meta = buildMetadata({
      title: "AI",
      description: "x",
      route: "service",
      slug: "ki-agenten",
      locale: "en",
    });
    expect(meta.alternates?.canonical).toBe("https://example.de/en/services/ai-agents");
    expect(meta.alternates?.languages).toMatchObject({
      de: "https://example.de/leistungen/ki-agenten",
      en: "https://example.de/en/services/ai-agents",
      "x-default": "https://example.de/leistungen/ki-agenten",
    });
    expect(meta.openGraph).toMatchObject({ locale: "en_US" });
  });

  it("resolves dynamic routes with a slug", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.de");
    const meta = buildMetadata({ title: "SEO", description: "x", route: "service", slug: "seo" });
    expect(meta.alternates?.canonical).toBe("https://example.de/leistungen/seo");
  });

  it("uses the absolute default title for the homepage", () => {
    const meta = buildMetadata({ title: null, description: "x", route: "home" });
    expect(meta.title).toEqual({ absolute: expect.stringContaining("AMIR") });
  });

  it("can mark pages as noindex", () => {
    const meta = buildMetadata({ title: "x", description: "y", route: "imprint", noIndex: true });
    expect(meta.robots).toEqual({ index: false, follow: true });
  });
});

describe("structured data", () => {
  it("omits unknown organization fields instead of inventing them", () => {
    const org = organizationSchema();
    expect(org["@type"]).toBe("ProfessionalService");
    expect(org.name).toBe(siteConfig.name);
    expect(org.email).toBe(siteConfig.contact.email);
    expect(org).not.toHaveProperty("telephone");
    expect(org).not.toHaveProperty("address");
  });

  it("describes the founder as a Person with profile links", () => {
    const org = organizationSchema("en");
    expect(org.founder).toMatchObject({
      "@type": "Person",
      name: "Amir Dehestani",
      jobTitle: "Founder & developer",
    });
    expect(org.sameAs).toEqual(siteConfig.socials.map((s) => s.url));
  });

  it("includes contact fields once they are configured", () => {
    const original = structuredClone(siteConfig);
    siteConfig.contact.email = "hallo@example.de";
    siteConfig.legal.street = "Musterweg 1";
    siteConfig.legal.postalCode = "12345";
    siteConfig.legal.city = "Musterstadt";
    try {
      const org = organizationSchema();
      expect(org.email).toBe("hallo@example.de");
      expect(org.address).toMatchObject({
        streetAddress: "Musterweg 1",
        addressLocality: "Musterstadt",
      });
    } finally {
      Object.assign(siteConfig, original);
    }
  });

  it("describes services, FAQs and breadcrumbs", () => {
    const service = getContent("de").getService("seo")!;
    expect(serviceSchema(service)).toMatchObject({ "@type": "Service", name: service.title });
    const faq = faqSchema(service.faqs);
    expect(faq.mainEntity).toHaveLength(service.faqs.length);
    const crumbs = breadcrumbSchema([
      { label: "Start", href: "/" },
      { label: "Leistungen", href: "/leistungen" },
    ]);
    expect(crumbs.itemListElement[1]).toMatchObject({ position: 2, name: "Leistungen" });
  });
});
