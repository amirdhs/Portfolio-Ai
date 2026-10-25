import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import { href } from "@/i18n/routes";
import { plexMono, schibsted } from "@/lib/fonts";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "404 – Seite nicht gefunden / Page not found | AMIR",
  robots: { index: false, follow: true },
};

/** Unmatched URLs have no language context, so this page is bilingual. */
export default function GlobalNotFound() {
  const de = getDictionary("de");
  const en = getDictionary("en");
  return (
    <html lang="de" className={`${schibsted.variable} ${plexMono.variable} antialiased`}>
      <body className="grain grid min-h-dvh place-items-center">
        <main className="container-page py-20">
          <p className="eyebrow text-bronze">404</p>
          <h1 className="mt-6 text-display">{de.notFound.title}</h1>
          <p className="mt-4 max-w-[52ch] text-lead text-ink-2">{de.notFound.text}</p>
          <a href={href("home")} className="link-underline mt-6 inline-block text-ink">
            {de.cta.backHome}
          </a>
          <div lang="en" className="mt-16 border-t border-rule pt-10">
            <h2 className="text-title">{en.notFound.title}</h2>
            <p className="mt-4 max-w-[52ch] text-ink-2">{en.notFound.text}</p>
            <a
              href={href("home", { locale: "en" })}
              className="link-underline mt-6 inline-block text-ink"
            >
              {en.cta.backHome}
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
