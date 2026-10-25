import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

/** Slowly scrolling row of the tools AMIR works with (tools, not clients). Static when motion is reduced. */
export function TechMarquee({ locale }: { locale: Locale }) {
  const { tools } = getI18n(locale).content.home;
  const item = "flex items-center gap-3 whitespace-nowrap text-lg font-medium text-ink-3";
  const dot = <span aria-hidden="true" className="size-1.5 rounded-full bg-bronze/60" />;
  return (
    <section aria-labelledby="tools-heading" className="border-b border-rule/60 py-10">
      <h2 id="tools-heading" className="container-page text-center text-sm font-normal text-ink-3">
        {tools.title}
      </h2>
      <div className="group mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max motion-safe:animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:justify-center">
          <ul className="flex shrink-0 items-center gap-10 pr-10 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-3">
            {tools.items.map((tool) => (
              <li key={tool} className={item}>
                {dot}
                {tool}
              </li>
            ))}
          </ul>
          <ul
            aria-hidden="true"
            className="flex shrink-0 items-center gap-10 pr-10 motion-reduce:hidden"
          >
            {tools.items.map((tool) => (
              <li key={tool} className={item}>
                {dot}
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
