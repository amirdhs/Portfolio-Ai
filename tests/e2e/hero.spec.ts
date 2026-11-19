import { expect, test, type Page } from "@playwright/test";

const hero = (page: Page) => page.locator("section[aria-labelledby='hero-heading']");

test("hero introduces Amir in first person with two calls to action", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Ich baue");
  await expect(hero(page).getByRole("link", { name: "Arbeiten ansehen" })).toBeVisible();
  await expect(hero(page).getByRole("link", { name: "Kontakt aufnehmen" })).toBeVisible();
  await expect(hero(page).locator("ul li")).toHaveCount(3);
});

test("the old background video is gone", async ({ page }) => {
  await page.goto("/");
  await expect(hero(page).locator("video")).toHaveCount(0);
});

test("the robot has an accessible description", async ({ page }) => {
  await page.goto("/");
  const robot = hero(page).getByRole("img");
  await expect(robot).toBeVisible();
  await expect(robot).toHaveAttribute("aria-label", /.+/);
});

test("the live robot replaces the drawing once loaded", async ({ page, browserName }) => {
  test.skip(browserName !== "chromium", "WebGL 2 in headless Chromium only");
  await page.goto("/");
  await expect(hero(page).locator("canvas")).toBeVisible({ timeout: 15_000 });
  await expect(hero(page).getByTestId("robot-still")).toHaveCount(0);
});

test("reduced motion shows the robot drawing and never starts 3D", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/");
  await expect(hero(page).getByTestId("robot-still")).toBeVisible();
  await page.waitForTimeout(1500);
  await expect(hero(page).locator("canvas")).toHaveCount(0);
  await context.close();
});

test("the hero does not hijack scrolling", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop layout");
  await page.goto("/");
  const height = await hero(page).evaluate((el) => el.getBoundingClientRect().height);
  expect(height).toBeLessThan(1400);
  await page.evaluate(() => window.scrollTo(0, 1500));
  await expect(page.getByRole("heading", { level: 1 })).not.toBeInViewport();
});

test("English hero", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("I build");
  await expect(hero(page).getByRole("link", { name: "See my work" })).toBeVisible();
  await expect(hero(page).getByRole("link", { name: "Get in touch" })).toBeVisible();
});
