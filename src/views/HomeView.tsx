import type { Metadata } from "next";
import { CtaBand } from "@/components/cta/CtaBand";
import { FounderStrip } from "@/components/home/FounderStrip";
import { FaqPreview } from "@/components/home/FaqPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { HeroIntro } from "@/components/home/HeroIntro";
import { ProcessPreview } from "@/components/home/ProcessPreview";
import { TechMarquee } from "@/components/home/TechMarquee";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyAmir } from "@/components/home/WhyAmir";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { buildMetadata } from "@/lib/seo";
import { SPEAKABLE } from "./shared";
import { faqSchema, webPageSchema } from "@/lib/structured-data";

export function homeMetadata(locale: Locale): Metadata {
  const { content } = getI18n(locale);
  return buildMetadata({
    title: null,
    description: content.pages.home.description,
    route: "home",
    locale,
  });
}

export function HomeView({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  return (
    <>
      <Hero locale={locale} />
      <HeroIntro locale={locale} />
      <FeaturedProjects locale={locale} />
      <ServicesOverview locale={locale} />
      <TechMarquee locale={locale} />
      <ProcessPreview locale={locale} />
      <WhyAmir locale={locale} />
      <FounderStrip locale={locale} />
      <FaqPreview locale={locale} />
      <CtaBand
        locale={locale}
        heading={content.home.finalCta.heading}
        text={content.home.finalCta.text}
      />
      <JsonLd
        data={[
          webPageSchema({
            name: t.meta.defaultTitle,
            description: content.pages.home.description,
            path: link("home"),
            locale,
            speakable: SPEAKABLE,
          }),
          faqSchema(content.coreFaqs, { path: link("home"), locale }),
        ]}
      />
    </>
  );
}
