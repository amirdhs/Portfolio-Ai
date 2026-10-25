import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CheckList } from "@/components/ui/CheckList";
import type { Service, Solution } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

interface SolutionCardProps {
  solution: Solution;
  index: number;
  relatedServices: Service[];
  locale: Locale;
}

export function SolutionCard({ solution, index, relatedServices, locale }: SolutionCardProps) {
  const { t, link } = getI18n(locale);
  const headingId = `solution-${solution.slug}`;
  return (
    <article
      id={solution.slug}
      aria-labelledby={headingId}
      className="scroll-reveal scroll-mt-28 grid gap-10 border-t border-rule py-[var(--space-block)] lg:grid-cols-12"
    >
      <header className="lg:col-span-4">
        <span className="font-mono text-xs text-bronze">{String(index + 1).padStart(2, "0")}</span>
        <h2 id={headingId} className="mt-4 text-title">
          {solution.title}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.a11y.matchingServices}>
          {relatedServices.map((service) => (
            <li key={service.slug}>
              <Link
                href={link("service", { slug: service.slug })}
                className="inline-flex rounded-full border border-rule-strong/70 px-3 py-1 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:col-span-8 lg:pl-8">
        <Block title={t.solution.problem}>{solution.problem}</Block>
        <Block title={t.solution.approach}>{solution.approach}</Block>
        <Block title={t.solution.benefit}>{solution.benefit}</Block>
        <div>
          <h3 className="eyebrow mb-3 text-ink-3">{t.solution.inputs}</h3>
          <CheckList items={solution.feasibilityInputs} />
        </div>
        <aside
          className="rounded-[1.25rem] bg-paper-2 p-6 md:col-span-2"
          aria-label={`${t.labels.example}: ${solution.title}`}
        >
          <Badge tone="outline">{t.labels.example}</Badge>
          <p className="mt-4 leading-relaxed text-ink-2">{solution.exampleScenario}</p>
        </aside>
      </div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: string }) {
  return (
    <div>
      <h3 className="eyebrow mb-3 text-ink-3">{title}</h3>
      <p className="leading-relaxed text-ink-2">{children}</p>
    </div>
  );
}
