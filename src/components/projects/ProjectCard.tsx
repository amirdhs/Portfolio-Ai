import Link from "next/link";
import { TiltCard } from "@/components/fx/TiltCard";
import { Arrow } from "@/components/ui/Button";
import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { ProjectArt } from "./ProjectArt";
import { ProjectTypeBadge } from "./ProjectTypeBadge";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  headingLevel?: "h2" | "h3";
  /** Raised, lime-lit treatment for the highlighted card in a row. */
  featured?: boolean;
}

export function ProjectCard({
  project,
  locale,
  headingLevel: Heading = "h3",
  featured = false,
}: ProjectCardProps) {
  const { t, link } = getI18n(locale);
  const category = project.categories[0] ?? "web";
  return (
    // The reveal animates transform too, so it lives on a wrapper and never fights the tilt.
    <div className="scroll-reveal h-full">
      <TiltCard
        as="article"
        className={`panel flex h-full flex-col overflow-hidden ${featured ? "panel-featured" : ""}`}
      >
        <div className="relative border-b border-rule bg-night/60">
          <ProjectArt category={category} seed={project.slug} className="aspect-[40/22] w-full" />
          <span className="absolute left-4 top-4">
            <ProjectTypeBadge type={project.type} locale={locale} />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-3">
            {project.categories.map((item) => (
              <span key={item}>{t.projects.categories[item]}</span>
            ))}
            <span aria-hidden="true">·</span>
            <span>{project.industry}</span>
          </div>
          <Heading className="mt-3 text-2xl leading-tight">
            <Link
              href={link("project", { slug: project.slug })}
              className="after:absolute after:inset-0 after:z-10 after:rounded-[1.25rem]"
            >
              {project.title}
            </Link>
          </Heading>
          <p className="mt-3 leading-relaxed text-ink-2">{project.summary}</p>
          <p
            aria-hidden="true"
            className="mt-auto flex items-center gap-2 pt-7 text-sm font-medium text-lime-ink"
          >
            {t.cta.viewProject}
            <Arrow />
          </p>
        </div>
      </TiltCard>
    </div>
  );
}
