import { expect, test } from "@playwright/test";

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  for (const path of ["/", "/en"]) {
    test(`every section heading on ${path} is visible`, async ({ page }) => {
      await page.goto(path);
      const headings = page.locator("main h2");
      expect(await headings.count()).toBeGreaterThan(3);
      for (const heading of await headings.all()) {
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        expect(await heading.evaluate((el) => getComputedStyle(el).opacity)).toBe("1");
      }
    });
  }
});

test("project cards stay flat for visitors who prefer reduced motion", async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, "no pointer on touch devices");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const card = page.locator(".tilt-card").first();
  await card.scrollIntoViewIfNeeded();
  const box = (await card.boundingBox())!;
  await page.mouse.move(box.x + 5, box.y + 5, { steps: 4 });
  expect(await card.evaluate((el) => getComputedStyle(el).transform)).toBe("none");
});

test("a project card leans towards the pointer and settles when it leaves", async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, "no pointer on touch devices");
  await page.goto("/");
  const card = page.locator(".tilt-card").first();
  await card.scrollIntoViewIfNeeded();
  const box = (await card.boundingBox())!;
  await page.mouse.move(box.x + 8, box.y + 8, { steps: 4 });
  await expect
    .poll(() => card.evaluate((el) => el.style.getPropertyValue("--rx")))
    .not.toBe("0deg");
  await page.mouse.move(box.x + box.width + 200, box.y - 200, { steps: 4 });
  await expect.poll(() => card.evaluate((el) => el.style.getPropertyValue("--rx"))).toBe("0deg");
});

test("section headings still appear when the app bundle fails to load", async ({ page }) => {
  await page.route("**/_next/static/chunks/**", (route) => route.abort());
  await page.goto("/");
  const heading = page.locator("#projects-heading");
  await heading.scrollIntoViewIfNeeded();
  await expect
    .poll(() => heading.evaluate((el) => getComputedStyle(el.closest(".glitch-reveal")!).opacity), {
      timeout: 6000,
    })
    .toBe("1");
});
