interface CheckListProps {
  items: string[];
  className?: string;
  tone?: "paper" | "night";
}

export function CheckList({ items, className = "", tone = "paper" }: CheckListProps) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span
            aria-hidden="true"
            className={`mt-[0.6em] h-px w-4 shrink-0 ${tone === "night" ? "bg-gold" : "bg-bronze"}`}
          />
          <span className={tone === "night" ? "text-on-night-2" : "text-ink-2"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
