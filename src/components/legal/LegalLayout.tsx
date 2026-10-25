import type { ReactNode } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import type { Crumb } from "@/components/layout/Breadcrumbs";
import type { Dictionary } from "@/i18n/dictionaries/de";

interface LegalLayoutProps {
  title: string;
  crumbs: Crumb[];
  t: Dictionary;
  showReviewBanner: boolean;
  children: ReactNode;
}

export function LegalLayout({ title, crumbs, t, showReviewBanner, children }: LegalLayoutProps) {
  return (
    <>
      <PageHeader
        eyebrow={t.footer.legal}
        title={title}
        breadcrumbs={crumbs}
        breadcrumbsLabel={t.a11y.breadcrumbs}
      />
      <div className="container-page grid gap-10 py-[var(--space-block)] md:grid-cols-12">
        <div className="md:col-span-8 md:col-start-4">
          {showReviewBanner ? (
            <p
              role="note"
              className="mb-8 rounded-xl border border-danger/30 bg-danger-soft px-5 py-4 text-sm leading-relaxed text-danger"
            >
              {t.legal.reviewBanner}
            </p>
          ) : null}
          {t.legal.translationNote ? (
            <p
              role="note"
              className="mb-8 rounded-xl bg-paper-2 px-5 py-4 text-sm leading-relaxed text-ink-2"
            >
              {t.legal.translationNote}
            </p>
          ) : null}
          <div className="prose-legal">{children}</div>
        </div>
      </div>
    </>
  );
}
