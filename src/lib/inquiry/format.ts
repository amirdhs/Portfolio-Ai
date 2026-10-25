import { randomBytes } from "node:crypto";
import { getContent } from "@/content";
import { de } from "@/i18n/dictionaries/de";
import type { Inquiry } from "./schema";

export interface InquiryMeta {
  referenceId: string;
  receivedAt: Date;
}

export interface FormattedEmail {
  subject: string;
  text: string;
}

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/** e.g. AMIR-20261014-7KQ2MX — readable reference shown to the visitor and in the email. */
export function createReferenceId(date: Date): string {
  const day = date.toISOString().slice(0, 10).replace(/-/g, "");
  const bytes = randomBytes(6);
  const suffix = Array.from(bytes, (byte) => ALPHABET[byte % ALPHABET.length]).join("");
  return `AMIR-${day}-${suffix}`;
}

const singleLine = (value: string) => value.replace(/[\r\n\t]+/g, " ").trim();

/** Internal notification email (always German, plain text — never rendered as HTML). */
export function formatInquiryEmail(inquiry: Inquiry, meta: InquiryMeta): FormattedEmail {
  const labels = de.form;
  const serviceLabel =
    inquiry.service === "unklar"
      ? "Noch unklar"
      : (getContent("de").getService(inquiry.service)?.title ?? inquiry.service);
  const typeLabel = inquiry.requestType === "erstgespraech" ? "Erstgespräch" : "Projektanfrage";
  const dash = "–";

  const subject = singleLine(
    `${typeLabel}: ${inquiry.company} (${inquiry.name}) [${meta.referenceId}]`,
  );
  const text = [
    `${typeLabel} über die Website`,
    `Referenz: ${meta.referenceId}`,
    `Eingegangen: ${meta.receivedAt.toISOString()}`,
    `Sprache der Anfrage: ${inquiry.locale.toUpperCase()}`,
    "",
    `Name: ${singleLine(inquiry.name)}`,
    `E-Mail: ${inquiry.email}`,
    `Unternehmen: ${singleLine(inquiry.company)}`,
    `Website: ${inquiry.website ?? dash}`,
    `Leistung: ${serviceLabel}`,
    `Budget: ${inquiry.budget ? labels.options.budget[inquiry.budget] : dash}`,
    `Zeitrahmen: ${inquiry.timeline ? labels.options.timeline[inquiry.timeline] : dash}`,
    "",
    "Projektbeschreibung:",
    inquiry.description,
    "",
    "Größte Herausforderung:",
    inquiry.challenge,
    "",
    "Einwilligung zur Verarbeitung der Angaben: erteilt",
  ].join("\n");

  return { subject, text };
}
