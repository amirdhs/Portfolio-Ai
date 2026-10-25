import { ButtonLink } from "@/components/ui/Button";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

export function FaqPreview({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  return (
    <section aria-labelledby="faq-heading" className="section">
      <div className="container-page">
        <SectionHeading
          id="faq-heading"
          label={content.home.faqSection.title}
          heading={content.home.faqSection.heading}
        />
        <div className="mx-auto mt-[var(--space-block)] max-w-3xl">
          <FaqList items={content.coreFaqs} />
          <div className="mt-10 flex justify-center">
            <ButtonLink href={link("faq")} variant="secondary">
              {t.cta.allFaqs}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
