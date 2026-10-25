"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import type { ProjectCategory } from "@/content/types";
import { plural, type PluralForms } from "@/i18n/format";

export interface FilterableItem {
  id: string;
  categories: ProjectCategory[];
  node: ReactNode;
}

interface ProjectFilterProps {
  items: FilterableItem[];
  categories: { value: ProjectCategory; label: string }[];
  /** Query parameter name, e.g. "kategorie" or "category". */
  param: string;
  labels: { filter: string; all: string; empty: string; count: PluralForms };
}

/** Category filter whose state lives in the URL, so filtered views are shareable. */
export function ProjectFilter({ items, categories, param, labels }: ProjectFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const requested = searchParams.get(param);
  const active = categories.some((c) => c.value === requested) ? requested : null;
  const visible = active
    ? items.filter((item) => item.categories.includes(active as ProjectCategory))
    : items;

  const options = [{ value: null, label: labels.all }, ...categories];

  return (
    <div>
      <nav aria-label={labels.filter} className="flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-2">
          {options.map((option) => {
            const isActive = option.value === active;
            return (
              <li key={option.value ?? "all"}>
                <Link
                  href={option.value ? `${pathname}?${param}=${option.value}` : pathname}
                  scroll={false}
                  aria-current={isActive ? "true" : undefined}
                  className={`inline-flex rounded-full border px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "border-ink bg-ink text-paper"
                      : "border-rule-strong/70 text-ink-2 hover:border-ink hover:text-ink"
                  }`}
                >
                  {option.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-3" aria-live="polite">
          {plural(visible.length, labels.count)}
        </p>
      </nav>
      <ProjectList items={visible} emptyLabel={labels.empty} />
    </div>
  );
}

export function ProjectList({
  items,
  emptyLabel,
}: {
  items: FilterableItem[];
  emptyLabel: string;
}) {
  if (items.length === 0) return <p className="mt-10 text-ink-2">{emptyLabel}</p>;
  return (
    <ul className="mt-10 grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.id}>{item.node}</li>
      ))}
    </ul>
  );
}
