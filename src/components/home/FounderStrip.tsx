import { DepthPortrait } from "@/components/fx/DepthPortrait";
import { GlitchReveal } from "@/components/fx/GlitchReveal";
import { ButtonLink } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

const PORTRAIT_DARK = "/brand/amir-dehestani-dark.webp";
const PORTRAIT_DEPTH = "/brand/amir-dehestani-depth.webp";

/** "Who is behind this": large depth-effect portrait and short bio. Renders only with a founder profile. */
export function FounderStrip({ locale }: { locale: Locale }) {
  const founder = siteConfig.founder;
  if (!founder) return null;
  const { t, link } = getI18n(locale);
  return (
    <section aria-labelledby="founder-strip-heading" className="section grain overflow-hidden">
      <div className="container-page grid items-center gap-10 md:grid-cols-[minmax(0,24rem)_1fr] md:gap-16 lg:grid-cols-[minmax(0,30rem)_1fr]">
        <div className="scroll-reveal relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 -z-10 rounded-[1.75rem] border border-lime/30 bg-[radial-gradient(60%_50%_at_50%_30%,oklch(85%_0.22_128/0.25),transparent_70%)]"
          />
          <DepthPortrait
            src={PORTRAIT_DARK}
            depthSrc={PORTRAIT_DEPTH}
            width={founder.image.width}
            height={founder.image.height}
            alt={`${founder.name}, ${founder.role[locale]}`}
            sizes="(min-width: 1024px) 480px, (min-width: 768px) 384px, 100vw"
            className="rounded-[1.5rem] border border-rule-strong"
          />
          <p
            aria-hidden="true"
            className="absolute bottom-4 left-4 rounded-md bg-night/80 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-lime-ink backdrop-blur"
          >
            depth.map · {founder.name.split(" ")[0]}
          </p>
        </div>
        <div className="scroll-reveal">
          <Pill>{t.labels.behindAmir}</Pill>
          <GlitchReveal>
            <h2 id="founder-strip-heading" className="mt-6 text-display">
              {founder.name}
            </h2>
          </GlitchReveal>
          <p className="mt-2 font-mono text-sm uppercase tracking-[0.12em] text-lime-ink">
            {founder.role[locale]}
          </p>
          <div className="mt-6 space-y-4 text-lead text-ink-2">
            {founder.bio[locale].slice(0, 2).map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
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
    </section>
  );
}
