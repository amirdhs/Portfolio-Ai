import { expect, test, type Page } from "@playwright/test";

const hero = (page: Page) => page.locator("section[aria-labelledby='hero-heading']");

test("hero shows the headline, call to action and three points", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Digitale Lösungen.");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Intelligente Automatisierung.",
  );
  await expect(hero(page).getByRole("link", { name: "Projekt anfragen" })).toBeVisible();
  await expect(hero(page).getByRole("link", { name: "Leistungen ansehen" })).toBeVisible();
  await expect(hero(page).locator("ul li")).toHaveCount(3);
});

test("the background video loops on its own, silently, once the page has loaded", async ({
  page,
  browserName,
}) => {
  test.skip(browserName === "webkit", "headless WebKit does not autoplay media reliably");
  await page.goto("/");
  const video = hero(page).locator("video");
  await expect(video).toHaveAttribute("src", /hero-(desktop|mobile)\.mp4$/);
  expect(await video.evaluate((el: HTMLVideoElement) => [el.muted, el.loop, el.controls])).toEqual([
    true,
    true,
    false,
  ]);
  await expect
    .poll(() => video.evaluate((el: HTMLVideoElement) => el.currentTime), { timeout: 15_000 })
    .toBeGreaterThan(0.3);
});

test("the hero ignores mouse movement", async ({ page, isMobile }) => {
  test.skip(isMobile, "no pointer on touch devices");
  await page.goto("/");
  const box = (await hero(page).boundingBox())!;
  await page.mouse.move(box.x + box.width * 0.1, box.y + box.height * 0.3, { steps: 8 });
  await page.mouse.move(box.x + box.width * 0.9, box.y + box.height * 0.6, { steps: 8 });
  const transform = await hero(page)
    .locator("video")
    .evaluate((el) => getComputedStyle(el.parentElement as HTMLElement).transform);
  expect(transform).toBe("none");
});

test("the hero does not hijack scrolling", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop layout");
  await page.goto("/");
  const height = await hero(page).evaluate((el) => el.getBoundingClientRect().height);
  expect(height).toBeLessThan(1400);
  await page.evaluate(() => window.scrollTo(0, 1500));
  await expect(page.getByRole("heading", { level: 1 })).not.toBeInViewport();
});

test("reduced motion keeps the still poster and never loads the video", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/");
  await expect(hero(page).getByRole("img")).toBeVisible();
  await expect(hero(page).locator("video")).toBeHidden();
  await expect(hero(page).locator("video")).not.toHaveAttribute("src", /.+/);
  await context.close();
});

test("English hero", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Digital solutions.");
  await expect(hero(page).getByRole("link", { name: "Start a project" })).toBeVisible();
});
