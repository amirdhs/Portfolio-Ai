/**
 * Lists business and legal details that are still missing before going live.
 * Run: pnpm check:launch   (exits with code 1 while required details are missing)
 */
import { readSmtpConfig } from "../src/lib/env";
import { findMissingBusinessInfo } from "../src/lib/launch-check";

const missing = findMissingBusinessInfo();
const required = missing.filter((item) => item.required);
const optional = missing.filter((item) => !item.required);

const lines: string[] = ["", "AMIR – Launch-Check", "===================", ""];

lines.push(
  required.length
    ? "Fehlende Pflichtangaben (src/config/site.ts):"
    : "Alle Pflichtangaben sind ausgefüllt.",
);
for (const item of required) lines.push(`  ✗ ${item.label}  (${item.key})`);

if (optional.length) {
  lines.push("", "Optionale Angaben, die noch fehlen:");
  for (const item of optional) lines.push(`  · ${item.label}  (${item.key})`);
}

const smtp = readSmtpConfig();
lines.push("", "Kontaktformular (SMTP):");
lines.push(
  smtp.status === "configured"
    ? "  ✓ konfiguriert"
    : smtp.status === "invalid"
      ? `  ✗ ungültige Werte: ${smtp.keys.join(", ")}`
      : "  ✗ nicht konfiguriert – Formular zeigt einen Hinweis statt zu senden (siehe README)",
);
if (!process.env.NEXT_PUBLIC_SITE_URL)
  lines.push("", "  ✗ NEXT_PUBLIC_SITE_URL ist nicht gesetzt (Canonical-URLs, Sitemap)");

lines.push(
  "",
  "Außerdem vor Veröffentlichung: Impressum und Datenschutzerklärung rechtlich prüfen lassen.",
  "",
);
process.stdout.write(lines.join("\n"));
process.exitCode = required.length > 0 ? 1 : 0;
