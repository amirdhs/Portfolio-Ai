import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { sitemapPaths } from "./helpers";

test("no serious or critical accessibility violations", async ({ page, request, browserName }) => {
  test.skip(browserName !== "chromium", "axe once per page is enough");
  const paths = await sitemapPaths(request);
  const failures: string[] = [];
  for (const path of paths) {
    await page.goto(path);
    await page.emulateMedia({ reducedMotion: "reduce" });
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    for (const v of results.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical",
    )) {
      failures.push(`${path}: ${v.id} (${v.nodes.length}) ${v.nodes[0]?.target.join(" ")}`);
    }
  }
  expect(failures).toEqual([]);
});
