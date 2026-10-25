import { describe, expect, it } from "vitest";
import {
  href,
  matchRoute,
  ROUTES,
  staticRouteKeys,
  switchLocalePath,
  resolveSlug,
} from "@/i18n/routes";

describe("href", () => {
  it("returns the German path for a static route by default", () => {
    expect(href("services")).toBe("/leistungen");
    expect(href("home")).toBe("/");
  });

  it("returns English paths under /en", () => {
    expect(href("home", { locale: "en" })).toBe("/en");
    expect(href("services", { locale: "en" })).toBe("/en/services");
    expect(href("cookies", { locale: "en" })).toBe("/en/cookie-settings");
  });

  it("translates service and project ids to localized slugs", () => {
    expect(href("service", { slug: "seo" })).toBe("/leistungen/seo");
    expect(href("service", { slug: "ki-assistenten", locale: "en" })).toBe(
      "/en/services/ai-assistants",
    );
    expect(href("project", { slug: "ki-faq-assistent", locale: "en" })).toBe(
      "/en/projects/ai-faq-assistant",
    );
  });

  it("throws when a dynamic route is used without slug", () => {
    expect(() => href("service")).toThrow(/slug/);
  });

  it("appends encoded query parameters and hash", () => {
    expect(href("contact", { query: { leistung: "seo" }, hash: "anfrage" })).toBe(
      "/kontakt?leistung=seo#anfrage",
    );
    expect(href("projects", { query: { kategorie: "ki & co" } })).toBe(
      "/projekte?kategorie=ki+%26+co",
    );
  });

  it("skips empty query values", () => {
    expect(href("projects", { query: { kategorie: undefined } })).toBe("/projekte");
  });

  it("lists only routes without dynamic segments as static keys", () => {
    expect(staticRouteKeys).toContain("contact");
    expect(staticRouteKeys).not.toContain("service");
    expect(staticRouteKeys.every((key) => !ROUTES[key].de.includes("["))).toBe(true);
  });
});

describe("resolveSlug", () => {
  it("maps a localized slug back to the content id", () => {
    expect(resolveSlug("service", "ai-agents", "en")).toBe("ki-agenten");
    expect(resolveSlug("service", "ki-agenten", "de")).toBe("ki-agenten");
    expect(resolveSlug("service", "ki-agenten", "en")).toBeUndefined();
    expect(resolveSlug("project", "unknown", "de")).toBeUndefined();
  });
});

describe("matchRoute", () => {
  it("detects locale, route and id from a pathname", () => {
    expect(matchRoute("/")).toEqual({ locale: "de", key: "home" });
    expect(matchRoute("/en")).toEqual({ locale: "en", key: "home" });
    expect(matchRoute("/en/services/web-design")).toEqual({
      locale: "en",
      key: "service",
      id: "webdesign",
    });
    expect(matchRoute("/kontakt/")).toEqual({ locale: "de", key: "contact" });
    expect(matchRoute("/gibt-es-nicht")).toBeNull();
  });
});

describe("switchLocalePath", () => {
  it("returns the equivalent page in the other language", () => {
    expect(switchLocalePath("/leistungen/automatisierung", "en")).toBe("/en/services/automation");
    expect(switchLocalePath("/en/about", "de")).toBe("/ueber-uns");
    expect(switchLocalePath("/", "en")).toBe("/en");
  });

  it("falls back to the target homepage for unknown paths", () => {
    expect(switchLocalePath("/irgendwas", "en")).toBe("/en");
    expect(switchLocalePath("/en/nope", "de")).toBe("/");
  });
});

describe("slug coverage", () => {
  it("has a localized slug entry for every service and project in every locale", async () => {
    const { getContent } = await import("@/content");
    const { LOCALES } = await import("@/i18n/config");
    for (const locale of LOCALES) {
      const { services, projects } = getContent(locale);
      for (const s of services)
        expect(
          resolveSlug(
            "service",
            href("service", { slug: s.slug, locale }).split("/").pop()!,
            locale,
          ),
        ).toBe(s.slug);
      for (const p of projects)
        expect(
          resolveSlug(
            "project",
            href("project", { slug: p.slug, locale }).split("/").pop()!,
            locale,
          ),
        ).toBe(p.slug);
    }
  });
});
