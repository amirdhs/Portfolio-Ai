import type { ReactNode } from "react";
import { Pill } from "@/components/ui/Pill";
import type { Locale } from "@/i18n/config";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { LastUpdated } from "./LastUpdated";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  breadcrumbs: Crumb[];
  breadcrumbsLabel: string;
  /** When set, the last-updated date is shown under the lead. */
  locale?: Locale;
  children?: ReactNode;
}

/** Intro block for inner pages: breadcrumbs, eyebrow, h1, lead. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  breadcrumbsLabel,
  locale,
  children,
}: PageHeaderProps) {
  return (
    <section className="grain border-b border-rule bg-paper">
      <div className="container-page pb-[var(--space-block)] pt-10 md:pt-14">
        <Breadcrumbs items={breadcrumbs} label={breadcrumbsLabel} />
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center text-center md:mt-16">
          <Pill>{eyebrow}</Pill>
          <h1 data-speakable className="rise mt-6 max-w-[22ch] text-display">
            {title}
          </h1>
          {lead ? (
            <p
              data-speakable
              className="reveal mt-6 max-w-[58ch] text-lead text-ink-2 [--reveal-delay:120ms]"
            >
              {lead}
            </p>
          ) : null}
          {locale ? (
            <LastUpdated locale={locale} className="reveal mt-6 [--reveal-delay:160ms]" />
          ) : null}
          {children ? (
            <div className="reveal mt-10 w-full [--reveal-delay:200ms]">{children}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
