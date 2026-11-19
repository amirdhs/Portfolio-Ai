import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { PortfolioHero } from "./PortfolioHero";

export function Hero({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const { hero } = content.home;
  return (
    <PortfolioHero
      eyebrow={hero.eyebrow}
      headline={hero.headline}
      highlight={hero.highlight}
      lead={hero.lead}
      points={hero.points}
      robotLabel={t.a11y.robot}
      primaryCta={{ href: link("home", { hash: "work" }), label: t.cta.seeWork }}
      secondaryCta={{ href: link("contact", { hash: "anfrage" }), label: t.cta.getInTouch }}
    />
  );
}
