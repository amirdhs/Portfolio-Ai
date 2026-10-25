import { afterEach, describe, expect, it, vi } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { siteConfig } from "@/config/site";

afterEach(() => vi.unstubAllEnvs());

describe("sitemap", () => {
  it("lists every page in both languages with alternates", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://amir.example");
    const entries = sitemap();
    const urls = entries.map((e) => e.url);

    expect(urls).toContain("https://amir.example");
    expect(urls).toContain("https://amir.example/en");
    expect(urls).toContain("https://amir.example/leistungen/ki-agenten");
    expect(urls).toContain("https://amir.example/en/services/ai-agents");
    expect(urls).toContain("https://amir.example/en/projects/ai-faq-assistant");
    // 13 static pages + 7 services + 4 projects, per language
    expect(entries).toHaveLength((13 + 7 + 4) * 2);
    expect(urls).toContain("https://amir.example/glossar");
    expect(urls).toContain("https://amir.example/en/costs");
    expect(entries.every((e) => e.lastModified === siteConfig.contentUpdated)).toBe(true);
    expect(new Set(urls).size).toBe(urls.length);

    const agent = entries.find((e) => e.url === "https://amir.example/en/services/ai-agents");
    expect(agent?.alternates?.languages).toEqual({
      de: "https://amir.example/leistungen/ki-agenten",
      en: "https://amir.example/en/services/ai-agents",
    });
  });

  it("gives legal pages a low priority", () => {
    const imprint = sitemap().find((e) => e.url.endsWith("/impressum"));
    expect(imprint?.priority).toBeLessThan(0.5);
  });
});

describe("robots", () => {
  it("allows crawling except the API, welcomes search and answer-engine bots, and points to the sitemap", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://amir.example");
    const result = robots();
    expect(result.sitemap).toBe("https://amir.example/sitemap.xml");
    expect(result.host).toBe("https://amir.example");

    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    expect(rules[0]).toEqual({ userAgent: "*", allow: "/", disallow: ["/api/"] });
    const bots = rules.flatMap((rule) => rule.userAgent ?? []);
    for (const bot of [
      "Googlebot",
      "Bingbot",
      "OAI-SearchBot",
      "PerplexityBot",
      "Claude-SearchBot",
    ]) {
      expect(bots).toContain(bot);
    }
    expect(rules.every((rule) => rule.disallow?.includes("/api/"))).toBe(true);
  });
});
