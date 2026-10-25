import { expect, test } from "@playwright/test";
import { LANG_OF, sitemapPaths } from "./helpers";

test.describe("every page", () => {
  test("renders with title, description, canonical, language and a single h1", async ({
    page,
    request,
  }) => {
    const paths = await sitemapPaths(request);
    expect(paths.length).toBe(48);
    for (const path of paths) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", LANG_OF(path));
      await expect(page.locator("h1"), path).toHaveCount(1);
      await expect(page).toHaveTitle(/AMIR/);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.{40,}/);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        new RegExp(`${path === "/" ? "" : path}$`),
      );
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
    }
  });

  test("has no horizontal overflow", async ({ page, request }) => {
    const paths = await sitemapPaths(request);
    for (const path of paths) {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow, path).toBeLessThanOrEqual(0);
    }
  });

  test("every internal link resolves", async ({ page, request }) => {
    const paths = await sitemapPaths(request);
    const links = new Set<string>();
    for (const path of paths) {
      await page.goto(path);
      const hrefs = await page.$$eval("a[href]", (as) =>
        as.map((a) => a.getAttribute("href") ?? ""),
      );
      for (const href of hrefs) {
        if (href.startsWith("/") && !href.startsWith("//")) links.add(href.split("#")[0] || "/");
      }
    }
    for (const link of links) {
      const res = await request.get(link);
      expect(res.status(), link).toBe(200);
    }
  });

  test("unknown URLs return a 404 page", async ({ page }) => {
    const res = await page.goto("/gibt-es-nicht");
    expect(res?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Seite nicht gefunden");
    const unknownService = await page.goto("/en/services/does-not-exist");
    expect(unknownService?.status()).toBe(404);
  });
});

test("legal pages with missing details are not indexable, everything else is", async ({
  request,
}) => {
  for (const path of ["/impressum", "/datenschutz", "/en/imprint", "/en/privacy"]) {
    const html = await (await request.get(path)).text();
    expect(html, path).toMatch(/<meta name="robots" content="noindex/);
  }
  for (const path of ["/", "/leistungen", "/kontakt", "/cookie-einstellungen"]) {
    const html = await (await request.get(path)).text();
    expect(html, path).not.toMatch(/name="robots" content="noindex/);
  }
});
