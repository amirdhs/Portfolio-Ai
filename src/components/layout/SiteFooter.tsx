import { cacheLife } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logo from "../../../public/brand/amir-logo-light.webp";

/** Cached so the static prerender stays deterministic; refreshed on revalidation. */
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const linkClass = "text-on-night-2 transition-colors hover:text-on-night";

export function SiteFooter({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const { email, phone } = siteConfig.contact;
  const description = content.home.hero.lead;

  return (
    <footer className="border-t border-night-rule bg-night text-on-night">
      <div className="container-page pb-10 pt-[var(--space-block)]">
        <div className="grid gap-12 border-b border-night-rule pb-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image
              src={logo}
              alt={`${siteConfig.name} – Digital · AI · Automation`}
              sizes="240px"
              className="h-auto w-[220px]"
            />
            <p className="mt-8 max-w-[36ch] leading-relaxed text-on-night-2">{description}</p>
          </div>

          <nav aria-label={t.a11y.footerNav} className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <p className="eyebrow text-gold">{t.footer.navigation}</p>
              <ul className="mt-5 grid gap-2.5">
                {[
                  ...t.nav,
                  { key: "faq" as const, label: t.labels.faq },
                  { key: "costs" as const, label: t.labels.costs },
                  { key: "glossary" as const, label: t.labels.glossary },
                ].map((item) => (
                  <li key={item.key}>
                    <Link href={link(item.key)} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-gold">{t.footer.services}</p>
              <ul className="mt-5 grid gap-2.5">
                {content.services.map((service) => (
                  <li key={service.slug}>
                    <Link href={link("service", { slug: service.slug })} className={linkClass}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-gold">{t.footer.contact}</p>
              <ul className="mt-5 grid gap-2.5">
                {email ? (
                  <li>
                    <a href={`mailto:${email}`} className={linkClass}>
                      {email}
                    </a>
                  </li>
                ) : null}
                {phone ? (
                  <li>
                    <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className={linkClass}>
                      {phone}
                    </a>
                  </li>
                ) : null}
                {!email && !phone ? (
                  <li className="text-on-night-2">{t.footer.contactFallback}</li>
                ) : null}
                <li>
                  <Link
                    href={link("contact", { hash: "anfrage" })}
                    className="text-gold transition-colors hover:text-gold-soft"
                  >
                    {t.cta.startProject} →
                  </Link>
                </li>
              </ul>
              {siteConfig.socials.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-4">
                  {siteConfig.socials.map((social) => (
                    <li key={social.url}>
                      <a
                        href={social.url}
                        className={linkClass}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-on-night-2 md:flex-row md:items-center md:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.legal.legalName ?? siteConfig.name}.{" "}
            {t.footer.copyright}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label={t.footer.legal}>
              {t.footer.legalLinks.map((item) => (
                <li key={item.key}>
                  <Link href={link(item.key)} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <LanguageSwitcher
              current={locale}
              label={t.a11y.languageSwitch}
              tone="night"
              landmark={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
