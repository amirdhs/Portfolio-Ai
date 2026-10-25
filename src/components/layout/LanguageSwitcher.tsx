"use client";

import { usePathname } from "next/navigation";
import { LOCALE_META, LOCALES, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/routes";

interface LanguageSwitcherProps {
  current: Locale;
  label: string;
  tone?: "paper" | "night";
  /** Render as a navigation landmark; secondary copies use a plain group to keep landmarks unique. */
  landmark?: boolean;
}

/**
 * Links to the same page in every language. Plain <a> elements on purpose:
 * each language has its own root layout, so switching is a full page load.
 */
export function LanguageSwitcher({
  current,
  label,
  tone = "paper",
  landmark = true,
}: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const onNight = tone === "night";
  const Wrapper = landmark ? "nav" : "div";
  return (
    <Wrapper aria-label={label} {...(landmark ? {} : { role: "group" })}>
      <ul className="flex items-center gap-0.5 rounded-lg border border-rule-strong bg-paper-2/60 p-0.5 font-mono text-xs tracking-[0.08em]">
        {LOCALES.map((locale) => {
          const meta = LOCALE_META[locale];
          const isCurrent = locale === current;
          return (
            <li key={locale}>
              <a
                href={switchLocalePath(pathname, locale)}
                hrefLang={meta.htmlLang}
                lang={meta.htmlLang}
                aria-current={isCurrent ? "true" : undefined}
                title={meta.name}
                className={`inline-flex min-h-8 min-w-9 items-center justify-center rounded-md px-2.5 transition-colors ${
                  isCurrent
                    ? "bg-paper-3 text-ink shadow-[0_0_0_1px_oklch(100%_0_0/0.08)_inset]"
                    : onNight
                      ? "text-on-night-2 hover:text-on-night"
                      : "text-ink-3 hover:text-ink"
                }`}
              >
                <span aria-hidden="true">{meta.label}</span>
                <span className="sr-only">{meta.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
