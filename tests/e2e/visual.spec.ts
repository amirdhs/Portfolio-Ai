import { test } from "@playwright/test";

/**
 * Captures full-page screenshots at key breakpoints for manual review
 * (`VISUAL=1 pnpm test:e2e --project=chromium visual`). Not a pixel-diff gate.
 */
const PAGES = ["/", "/leistungen/webdesign", "/projekte", "/kontakt", "/en", "/en/process"];
const WIDTHS = [320, 768, 1024, 1440];

test("capture key pages", async ({ page, browserName }) => {
  test.skip(!process.env.VISUAL || browserName !== "chromium", "set VISUAL=1");
  test.setTimeout(120_000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of PAGES) {
      await page.goto(path);
      const name = `${path === "/" ? "home" : path.slice(1).replace(/\//g, "_")}-${width}`;
      await page.screenshot({ path: `test-results/screenshots/${name}.png`, fullPage: true });
    }
  }
});
