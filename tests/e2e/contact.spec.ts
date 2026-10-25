import { expect, test, type Page } from "@playwright/test";

async function fillValid(page: Page) {
  await page.getByLabel("Vor- und Nachname").fill("Erika Beispiel");
  await page.getByLabel("Geschäftliche E-Mail-Adresse").fill("erika@example.de");
  await page.getByLabel("Unternehmen").fill("Beispiel GmbH");
  await page.getByLabel("Gewünschte Leistung").selectOption("seo");
  await page
    .getByLabel("Projektbeschreibung")
    .fill("Wir möchten bei Google für unsere Leistungen besser gefunden werden.");
  await page
    .getByLabel("Größte geschäftliche Herausforderung")
    .fill("Kaum Anfragen über die Website");
  await page.getByRole("checkbox").check();
}

test("shows field errors and focuses the first invalid field", async ({ page }) => {
  await page.goto("/kontakt");
  await page.getByRole("button", { name: "Anfrage senden" }).click();
  await expect(page.getByText("Bitte prüfen Sie die markierten Felder.")).toBeVisible();
  await expect(page.getByLabel("Vor- und Nachname")).toBeFocused();
  await expect(page.getByLabel("Vor- und Nachname")).toHaveAttribute("aria-invalid", "true");
  await page.getByLabel("Geschäftliche E-Mail-Adresse").fill("keine-mail");
  await page.getByLabel("Geschäftliche E-Mail-Adresse").blur();
  await expect(page.getByText("Bitte geben Sie eine gültige E-Mail-Adresse ein.")).toBeVisible();
});

test("prefills service and request type from the URL", async ({ page }) => {
  await page.goto("/kontakt?leistung=ki-agenten&art=erstgespraech");
  await expect(page.getByLabel("Gewünschte Leistung")).toHaveValue("ki-agenten");
  await expect(page.getByLabel("Unverbindliches Erstgespräch")).toBeChecked();
});

test("shows a confirmation only after the server accepted the inquiry", async ({ page }) => {
  await page.route("**/api/inquiry", async (route) => {
    const body = route.request().postDataJSON();
    expect(body).toMatchObject({
      email: "erika@example.de",
      service: "seo",
      consent: true,
      locale: "de",
    });
    await new Promise((r) => setTimeout(r, 300));
    await route.fulfill({ json: { success: true, data: { referenceId: "AMIR-20261014-TEST01" } } });
  });
  await page.goto("/kontakt");
  await fillValid(page);
  await page.getByRole("button", { name: "Anfrage senden" }).click();
  await expect(page.getByRole("button", { name: "Wird gesendet …" })).toBeDisabled();
  await expect(page.getByRole("status")).toContainText("Ihre Anfrage ist eingegangen");
  await expect(page.getByText("AMIR-20261014-TEST01")).toBeVisible();
});

test("is honest when the form is not configured or delivery fails", async ({ page }) => {
  let code = "NOT_CONFIGURED";
  await page.route("**/api/inquiry", (route) =>
    route.fulfill({
      status: code === "NOT_CONFIGURED" ? 503 : 502,
      json: { success: false, error: { code } },
    }),
  );
  await page.goto("/kontakt");
  await fillValid(page);
  await page.getByRole("button", { name: "Anfrage senden" }).click();
  await expect(
    page.getByRole("alert").filter({ hasText: "noch nicht freigeschaltet" }),
  ).toBeVisible();
  await expect(page.getByText("Ihre Nachricht wurde nicht übermittelt.")).toBeVisible();
  code = "DELIVERY_FAILED";
  await page.getByRole("button", { name: "Anfrage senden" }).click();
  await expect(
    page.getByRole("alert").filter({ hasText: "konnte nicht gesendet werden" }),
  ).toBeVisible();
});

test("English form uses English labels and messages", async ({ page }) => {
  await page.goto("/en/contact");
  await page.getByRole("button", { name: "Send inquiry" }).click();
  await expect(page.getByText("Please check the highlighted fields.")).toBeVisible();
});

test("API reports NOT_CONFIGURED without SMTP settings", async ({ request }) => {
  const res = await request.post("/api/inquiry", {
    data: {
      requestType: "projekt",
      name: "Erika Beispiel",
      email: "erika@example.de",
      company: "Beispiel GmbH",
      service: "seo",
      description: "Wir möchten bei Google besser gefunden werden.",
      challenge: "Kaum Sichtbarkeit",
      consent: true,
      locale: "de",
      leave_empty: "",
      elapsedMs: 60_000,
    },
  });
  test.skip(res.status() === 200, "SMTP is configured in this environment");
  expect(res.status()).toBe(503);
  expect(await res.json()).toEqual({ success: false, error: { code: "NOT_CONFIGURED" } });
});
