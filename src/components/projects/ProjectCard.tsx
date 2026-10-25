import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { ProjectTypeBadge } from "./ProjectTypeBadge";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  headingLevel?: "h2" | "h3";
  /** Raised, gold-lit treatment for the highlighted card in a row. */
  featured?: boolean;
}

export function ProjectCard({
  project,
  locale,
  headingLevel: Heading = "h3",
  featured = false,
}: ProjectCardProps) {
  const { t, link } = getI18n(locale);
  return (
    <article
      className={`scroll-reveal panel group relative flex h-full flex-col p-6 md:p-8 ${featured ? "panel-featured" : ""}`}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <ProjectTypeBadge type={project.type} locale={locale} />
        {project.categories.map((category) => (
          <span key={category} className="text-xs text-ink-3">
            {t.projects.categories[category]}
          </span>
        ))}
      </div>
      <p className="mt-8 text-sm text-ink-3">{project.industry}</p>
      <Heading className="mt-2 text-2xl leading-tight">
        <Link
          href={link("project", { slug: project.slug })}
          className="after:absolute after:inset-0 after:rounded-[1.25rem]"
        >
          {project.title}
        </Link>
      </Heading>
      <p className="mt-4 leading-relaxed text-ink-2">{project.summary}</p>
      <p
        aria-hidden="true"
        className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-bronze-strong"
      >
        {t.cta.viewProject}
        <Arrow />
      </p>
    </article>
  );
}
