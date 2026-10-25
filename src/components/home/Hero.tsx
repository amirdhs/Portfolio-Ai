import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { VideoHero } from "./VideoHero";

export function Hero({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const { hero, heroVisual } = content.home;
  return (
    <VideoHero
      badge={hero.eyebrow}
      headline={hero.headline}
      emphasisIndex={1}
      lead={hero.lead}
      points={hero.points}
      posterAlt={heroVisual.posterAlt}
      chat={heroVisual.chat}
      primaryCta={{ href: link("contact", { hash: "anfrage" }), label: t.cta.startProject }}
      secondaryCta={{ href: link("services"), label: t.cta.exploreServices }}
    />
  );
}
