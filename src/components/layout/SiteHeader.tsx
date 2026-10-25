import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";
import wordmark from "../../../public/brand/amir-wordmark.webp";

export function SiteHeader({ locale }: { locale: Locale }) {
  const { t, link } = getI18n(locale);
  const ctaHref = link("contact", { hash: "anfrage" });
  const homeHref = link("home");
  const items = t.nav.map((item) => ({ href: link(item.key), label: item.label }));

  return (
    <header className="header-scroll sticky top-0 isolate z-50 border-b border-rule/50 bg-paper/70 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/55">
      <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-4">
        <Link href={homeHref} className="relative z-50 shrink-0" aria-label={t.a11y.homeLink}>
          <Image
            src={wordmark}
            alt=""
            priority
            sizes="104px"
            className="h-[22px] w-auto md:h-[26px]"
          />
        </Link>

        <nav aria-label={t.a11y.mainNav} className="hidden lg:block">
          <NavLinks
            items={items}
            exactPaths={[homeHref]}
            className="flex items-center gap-0.5 rounded-full border border-rule bg-paper-2/70 p-1 shadow-[inset_0_1px_0_oklch(100%_0_0/0.05)]"
            linkClassName="block whitespace-nowrap rounded-full px-3 py-1.5 text-[0.9rem] text-ink-2 transition-colors hover:text-ink data-[active]:bg-paper-3 data-[active]:text-ink"
          />
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher current={locale} label={t.a11y.languageSwitch} />
          </div>
          <div className="hidden sm:block">
            <ButtonLink href={ctaHref} className="!px-5 !py-2.5">
              {t.cta.startProject}
            </ButtonLink>
          </div>
          <MobileNav
            locale={locale}
            items={items}
            exactPaths={[homeHref]}
            ctaLabel={t.cta.startProject}
            ctaHref={ctaHref}
            labels={{
              open: t.a11y.openMenu,
              close: t.a11y.closeMenu,
              nav: t.a11y.mainNav,
              language: t.a11y.languageSwitch,
            }}
          />
        </div>
      </div>
    </header>
  );
}
