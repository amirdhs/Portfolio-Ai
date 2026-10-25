import { expect, test } from "@playwright/test";

test("main navigation reaches every section", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop navigation");
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Hauptnavigation" });
  for (const [label, path] of [
    ["Leistungen", "/leistungen"],
    ["Lösungen", "/loesungen"],
    ["Projekte", "/projekte"],
    ["Über uns", "/ueber-uns"],
    ["Prozess", "/prozess"],
    ["Kontakt", "/kontakt"],
  ]) {
    await nav.getByRole("link", { name: label, exact: true }).click();
    await expect(page).toHaveURL(path);
    await expect(nav.getByRole("link", { name: label, exact: true })).toHaveAttribute(
      "aria-current",
      "page",
    );
  }
});

test("hero CTAs lead to the inquiry form and services", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("main").getByRole("link", { name: "Projekt anfragen" }).first().click();
  await expect(page).toHaveURL(/\/kontakt#anfrage$/);
  await expect(page.getByRole("heading", { name: "Projektanfrage", exact: true })).toBeVisible();
  await page.goto("/");
  await page.getByRole("link", { name: "Leistungen ansehen" }).click();
  await expect(page).toHaveURL("/leistungen");
});

test("language switcher opens the same page in the other language", async ({ page, isMobile }) => {
  test.skip(isMobile, "switcher is in the mobile menu there");
  await page.goto("/leistungen/automatisierung");
  await page.getByRole("banner").getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL("/en/services/automation");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Business Process Automation");
  await page.getByRole("banner").getByRole("link", { name: "Deutsch" }).click();
  await expect(page).toHaveURL("/leistungen/automatisierung");
});

test("mobile menu opens, navigates and closes with Escape", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Menü öffnen" });
  await toggle.click();
  await expect(page.getByRole("button", { name: "Menü schließen" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .getByRole("navigation", { name: "Hauptnavigation" })
    .getByRole("link", { name: "Prozess" })
    .click();
  await expect(page).toHaveURL("/prozess");
  await expect(page.getByRole("button", { name: "Menü öffnen" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
});

test("skip link moves focus to the main content", async ({ page, isMobile, browserName }) => {
  test.skip(isMobile, "keyboard flow");
  await page.goto("/");
  // Like Safari, WebKit only tabs to links with Option+Tab.
  await page.keyboard.press(browserName === "webkit" ? "Alt+Tab" : "Tab");
  const skip = page.getByRole("link", { name: "Zum Inhalt springen" });
  await expect(skip).toBeFocused();
  await skip.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});

test("project filter keeps its state in the URL", async ({ page }) => {
  await page.goto("/projekte");
  const filter = page.getByRole("navigation", { name: "Projekte nach Kategorie filtern" });
  await filter.getByRole("link", { name: "Integrationen" }).click();
  await expect(page).toHaveURL("/projekte?kategorie=integrations");
  await expect(page.getByText("1 Eintrag")).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: /Synchronisation/ })).toBeVisible();
  await page.goto("/en/projects?category=ai");
  await expect(page.getByText("2 entries")).toBeVisible();
});

test("concept projects are labelled and claim no results", async ({ page }) => {
  await page.goto("/projekte/ki-faq-assistent");
  await expect(page.getByText("Beispielkonzept").first()).toBeVisible();
  await expect(
    page.getByText(/keine Ergebnisse, da es nicht für einen Kunden umgesetzt wurde/),
  ).toBeVisible();
});
