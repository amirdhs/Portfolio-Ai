import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { getContent } from "@/content";
import { getDictionary } from "@/i18n";

const serviceLabels = Object.fromEntries(getContent("de").services.map((s) => [s.slug, s.title]));

function setup(props: Partial<Parameters<typeof InquiryForm>[0]> = {}) {
  const user = userEvent.setup();
  render(
    <InquiryForm
      locale="de"
      t={getDictionary("de").form}
      serviceLabels={serviceLabels}
      privacyHref="/datenschutz"
      contactEmail={null}
      responseTimeDays={null}
      {...props}
    />,
  );
  return user;
}

async function fillValid(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/Vor- und Nachname/), "Erika Beispiel");
  await user.type(screen.getByLabelText(/Geschäftliche E-Mail-Adresse/), "erika@example.de");
  await user.type(screen.getByLabelText(/^Unternehmen/), "Beispiel GmbH");
  await user.selectOptions(screen.getByLabelText(/Gewünschte Leistung/), "seo");
  await user.type(
    screen.getByLabelText(/Projektbeschreibung/),
    "Wir möchten bei Google besser gefunden werden.",
  );
  await user.type(screen.getByLabelText(/Größte geschäftliche Herausforderung/), "Kaum Anfragen");
  await user.click(screen.getByRole("checkbox"));
}

const fetchMock = vi.fn();
beforeEach(() => {
  fetchMock.mockReset();
  vi.stubGlobal("fetch", fetchMock);
  window.history.replaceState(null, "", "/kontakt");
});
afterEach(() => vi.unstubAllGlobals());

describe("InquiryForm", () => {
  it("shows translated validation messages and does not submit", async () => {
    const user = setup();
    await user.click(screen.getByRole("button", { name: "Anfrage senden" }));
    expect(await screen.findByText("Bitte prüfen Sie die markierten Felder.")).toBeInTheDocument();
    expect(screen.getByLabelText(/Vor- und Nachname/)).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText(/Bitte bestätigen Sie die Einwilligung/)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("prefills service and request type from the query string", async () => {
    window.history.replaceState(null, "", "/kontakt?leistung=ki-agenten&art=erstgespraech");
    setup();
    await waitFor(() =>
      expect(screen.getByLabelText(/Gewünschte Leistung/)).toHaveValue("ki-agenten"),
    );
    expect(screen.getByLabelText("Unverbindliches Erstgespräch")).toBeChecked();
  });

  it("confirms only after the server accepted the inquiry", async () => {
    fetchMock.mockResolvedValue(
      new Response(
        JSON.stringify({ success: true, data: { referenceId: "AMIR-20261014-ABCDEF" } }),
      ),
    );
    const user = setup({ responseTimeDays: 2 });
    await fillValid(user);
    await user.click(screen.getByRole("button", { name: "Anfrage senden" }));

    expect(await screen.findByRole("status")).toHaveTextContent("Ihre Anfrage ist eingegangen");
    expect(screen.getByText("AMIR-20261014-ABCDEF")).toBeInTheDocument();
    expect(screen.getByText(/innerhalb von 2 Werktagen/)).toBeInTheDocument();
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body).toMatchObject({
      name: "Erika Beispiel",
      service: "seo",
      consent: true,
      leave_empty: "",
      locale: "de",
    });
    expect(typeof body.elapsedMs).toBe("number");

    await user.click(screen.getByRole("button", { name: "Weitere Anfrage senden" }));
    expect(screen.getByRole("button", { name: "Anfrage senden" })).toBeInTheDocument();
  });

  it("tells the visitor when the form is not configured and offers email", async () => {
    fetchMock.mockResolvedValue(
      new Response(JSON.stringify({ success: false, error: { code: "NOT_CONFIGURED" } }), {
        status: 503,
      }),
    );
    const user = setup({ contactEmail: "hallo@example.de" });
    await fillValid(user);
    await user.click(screen.getByRole("button", { name: "Anfrage senden" }));
    expect(
      await screen.findByText("Das Anfrageformular ist noch nicht freigeschaltet."),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "hallo@example.de" })).toHaveAttribute(
      "href",
      "mailto:hallo@example.de",
    );
  });

  it("handles rate limiting, network errors and server-side field errors", async () => {
    const user = setup();
    await fillValid(user);

    fetchMock.mockResolvedValueOnce(
      new Response(JSON.stringify({ success: false, error: { code: "RATE_LIMITED" } }), {
        status: 429,
      }),
    );
    await user.click(screen.getByRole("button", { name: "Anfrage senden" }));
    expect(await screen.findByText(/zu viele Anfragen/)).toBeInTheDocument();

    fetchMock.mockRejectedValueOnce(new TypeError("offline"));
    await user.click(screen.getByRole("button", { name: "Anfrage senden" }));
    expect(
      await screen.findByText("Bitte versuchen Sie es in einigen Minuten erneut."),
    ).toBeInTheDocument();

    fetchMock.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          success: false,
          error: { code: "VALIDATION", fields: { email: "email" } },
        }),
        { status: 400 },
      ),
    );
    await user.click(screen.getByRole("button", { name: "Anfrage senden" }));
    expect(
      await screen.findByText("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
    ).toBeInTheDocument();
  });
});

describe("InquiryForm timing", () => {
  it("asks to resend when the server rejects a too-fast submission", async () => {
    fetchMock.mockResolvedValue(
      new Response(JSON.stringify({ success: false, error: { code: "TOO_FAST" } }), {
        status: 422,
      }),
    );
    const user = setup();
    await fillValid(user);
    await user.click(screen.getByRole("button", { name: "Anfrage senden" }));
    expect(await screen.findByText(/ungewöhnlich schnell/)).toBeInTheDocument();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
