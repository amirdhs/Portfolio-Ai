import { ProjectCard } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

export function FeaturedProjects({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const section = content.home.projectsSection;
  return (
    <section id="work" aria-labelledby="projects-heading" className="section grain">
      <div className="container-page">
        <SectionHeading
          id="projects-heading"
          label={section.title}
          heading={section.heading}
          lead={section.lead}
        />
        <ul className="mt-[var(--space-block)] grid gap-5 md:grid-cols-3 md:items-stretch">
          {content
            .getFeaturedProjects()
            .slice(0, 3)
            .map((project, index) => (
              <li key={project.slug} className={index === 1 ? "md:-my-4" : ""}>
                <ProjectCard project={project} locale={locale} featured={index === 1} />
              </li>
            ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <ButtonLink href={link("projects")} variant="secondary">
            {t.cta.allProjects}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
