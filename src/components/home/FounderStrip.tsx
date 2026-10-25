import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

/** Short "who is behind this" block; renders only once a founder profile is configured. */
export function FounderStrip({ locale }: { locale: Locale }) {
  const founder = siteConfig.founder;
  if (!founder) return null;
  const { t, link } = getI18n(locale);
  return (
    <section aria-labelledby="founder-strip-heading" className="section grain">
      <div className="container-page">
        <div className="scroll-reveal panel mx-auto grid max-w-4xl items-center gap-8 p-6 md:grid-cols-[11rem_1fr] md:gap-10 md:p-10">
          <Image
            src={founder.image.src}
            alt={`${founder.name}, ${founder.role[locale]}`}
            width={founder.image.width}
            height={founder.image.height}
            sizes="176px"
            className="aspect-[4/5] w-36 rounded-2xl border border-rule object-cover object-top md:w-full"
          />
          <div>
            <Pill>{t.labels.behindAmir}</Pill>
            <h2 id="founder-strip-heading" className="mt-5 text-title">
              {founder.name}
            </h2>
            <p className="mt-1 text-bronze">{founder.role[locale]}</p>
            <p className="mt-4 leading-relaxed text-ink-2">{founder.bio[locale][0]}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <ButtonLink href={link("about")} variant="secondary">
                {t.cta.aboutFounder}
              </ButtonLink>
              {siteConfig.socials.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="link-underline text-sm text-ink-2 hover:text-ink"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
