interface HeroChatProps {
  chat: {
    title: string;
    example: string;
    question: string;
    answer: string;
    replies: string[];
    handover: string;
    inputPlaceholder: string;
  };
}

const RAIL_ICONS = [
  "M4 5h16v11H8l-4 4z",
  "M4 12h16M4 6h16M4 18h10",
  "M12 3l2.4 5.6L20 11l-5.6 2.4L12 19l-2.4-5.6L4 11l5.6-2.4z",
  "M5 12a7 7 0 1014 0 7 7 0 00-14 0m7-3v3l2 2",
];

/** Illustrative chat window: a sample dialogue, not a screenshot of a real product or client. */
export function HeroChat({ chat }: HeroChatProps) {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[34rem]">
      <div className="absolute -inset-8 -z-10 [background:radial-gradient(50%_50%_at_30%_30%,oklch(66%_0.1_58/0.28),transparent_70%),radial-gradient(40%_40%_at_85%_80%,oklch(56%_0.11_48/0.22),transparent_70%)]" />
      <div className="panel overflow-hidden !rounded-[1.5rem] shadow-[0_40px_90px_-40px_oklch(0%_0_0/0.9)]">
        <div className="flex items-center justify-between border-b border-rule px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-rule-strong" />
              <span className="size-2.5 rounded-full bg-rule-strong" />
              <span className="size-2.5 rounded-full bg-rule-strong" />
            </span>
            <span className="text-sm text-ink-2">{chat.title}</span>
          </div>
          <span className="rounded-full border border-rule-strong px-2.5 py-0.5 text-[0.65rem] uppercase tracking-[0.1em] text-ink-3">
            {chat.example}
          </span>
        </div>

        <div className="flex">
          <div className="hidden w-14 shrink-0 flex-col items-center gap-3 border-r border-rule py-4 sm:flex">
            {RAIL_ICONS.map((path, index) => (
              <span
                key={path}
                className={`grid size-8 place-items-center rounded-lg ${index === 0 ? "bg-accent text-on-accent" : "text-ink-3"}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={path} />
                </svg>
              </span>
            ))}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-4 p-4 sm:p-5">
            <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-accent px-4 py-2.5 text-sm leading-snug text-on-accent motion-safe:animate-[pop-in_0.5s_var(--ease-out-expo)_0.6s_both]">
              {chat.question}
            </p>
            {/* The answer bubble appears, "types" for a moment, then reveals its text; space is reserved throughout. */}
            <div className="relative max-w-[92%] rounded-2xl rounded-bl-md border border-rule bg-paper-3/70 px-4 py-3 text-sm leading-relaxed text-ink motion-safe:animate-[pop-in_0.5s_var(--ease-out-expo)_1.2s_both]">
              <span className="absolute left-4 top-4 hidden gap-1 motion-safe:flex motion-safe:animate-[typing-life_1.2s_ease_1.3s_both]">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className="size-1.5 rounded-full bg-ink-2 animate-[typing-dot_0.9s_ease-in-out_infinite]"
                    style={{ animationDelay: `${dot * 0.15}s` }}
                  />
                ))}
              </span>
              <span className="block motion-safe:animate-[fade-in_0.6s_ease_2.5s_both]">
                {chat.answer}
              </span>
              <span className="mt-3 flex flex-wrap gap-2">
                {chat.replies.map((reply, index) => (
                  <span
                    key={reply}
                    className="rounded-full border border-bronze/40 px-3 py-1 text-xs text-bronze-strong motion-safe:animate-[pop-in_0.45s_var(--ease-out-expo)_both]"
                    style={{ animationDelay: `${2.9 + index * 0.15}s` }}
                  >
                    {reply}
                  </span>
                ))}
              </span>
            </div>
            <p className="flex items-center gap-2 self-start rounded-full bg-paper-3/80 px-3 py-1.5 text-xs text-ink-2 motion-safe:animate-[pop-in_0.5s_var(--ease-out-expo)_3.5s_both]">
              <svg
                viewBox="0 0 24 24"
                className="size-3.5 text-bronze"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
              {chat.handover}
            </p>
            <div className="mt-1 flex items-center justify-between rounded-xl border border-rule bg-paper/60 px-3.5 py-2.5 text-sm text-ink-3">
              <span>
                {chat.inputPlaceholder}
                <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-ink-2 motion-safe:animate-[caret_1s_steps(1)_infinite]" />
              </span>
              <span className="grid size-6 place-items-center rounded-full bg-accent text-on-accent">
                <svg
                  viewBox="0 0 16 16"
                  className="size-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 8h11M9 4l4 4-4 4" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
