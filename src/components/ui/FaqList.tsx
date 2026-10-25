import type { FaqItem } from "@/content/types";

interface FaqListProps {
  items: FaqItem[];
  headingLevel?: "h3" | "h4";
}

/** Accessible accordion built on native <details>/<summary>. */
export function FaqList({ items, headingLevel: Heading = "h3" }: FaqListProps) {
  return (
    <div className="border-t border-rule">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-rule">
          <summary className="flex items-start justify-between gap-6 py-6 text-left transition-colors hover:text-bronze-strong">
            <Heading className="text-lg font-medium leading-snug tracking-[-0.01em] md:text-xl">
              {item.question}
            </Heading>
            <span
              aria-hidden="true"
              className="relative mt-1.5 size-4 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:-translate-y-1/2 before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-current after:transition-transform after:duration-300 group-open:after:scale-y-0"
            />
          </summary>
          <p className="max-w-[68ch] pb-7 pr-10 leading-relaxed text-ink-2">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
