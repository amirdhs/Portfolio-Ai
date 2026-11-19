import type { ReactNode } from "react";
import type { ProjectCategory } from "@/content/types";

interface ProjectArtProps {
  category: ProjectCategory;
  /** Varies the drawing per project; the same seed always draws the same picture. */
  seed: string;
  className?: string;
}

const W = 400;
const H = 220;
const LIME = "oklch(91% 0.21 125)";
const DIM = "oklch(91% 0.21 125 / 0.35)";

/** Small deterministic PRNG (mulberry32) seeded from a string hash. */
function random(seed: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  let a = h >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const round = (value: number) => Math.round(value * 10) / 10;

function browser(rnd: () => number): ReactNode {
  const blocks = Array.from({ length: 4 }, (_, i) => ({
    x: 90 + (i % 2) * 115,
    y: 86 + Math.floor(i / 2) * 50,
    w: round(70 + rnd() * 35),
    lit: rnd() > 0.6,
  }));
  return (
    <>
      <rect x="70" y="36" width="260" height="160" rx="10" stroke={LIME} strokeWidth="1.5" />
      <line x1="70" y1="58" x2="330" y2="58" stroke={DIM} />
      {[84, 96, 108].map((cx) => (
        <circle key={cx} cx={cx} cy="47" r="3" fill={DIM} />
      ))}
      <rect x="90" y="68" width={round(80 + rnd() * 90)} height="8" rx="4" fill={LIME} />
      {blocks.map((b) => (
        <rect
          key={`${b.x}-${b.y}`}
          x={b.x}
          y={b.y}
          width={b.w}
          height="36"
          rx="5"
          stroke={b.lit ? LIME : DIM}
          fill={b.lit ? "oklch(91% 0.21 125 / 0.12)" : "none"}
        />
      ))}
    </>
  );
}

function network(rnd: () => number): ReactNode {
  const layers = [3, 4, 2].map((count, li) =>
    Array.from({ length: count }, (_, i) => ({
      x: 110 + li * 90,
      y: round(H / 2 + (i - (count - 1) / 2) * 42 + (rnd() - 0.5) * 8),
      lit: rnd() > 0.55,
    })),
  );
  const links = layers
    .slice(0, -1)
    .flatMap((layer, li) =>
      layer.flatMap((a) => (layers[li + 1] ?? []).map((b) => ({ a, b, lit: a.lit && b.lit }))),
    );
  return (
    <>
      {links.map(({ a, b, lit }) => (
        <line
          key={`${a.x},${a.y}-${b.x},${b.y}`}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke={lit ? LIME : DIM}
          strokeWidth={lit ? 1.5 : 1}
        />
      ))}
      {layers.flat().map((n) => (
        <circle
          key={`${n.x},${n.y}`}
          cx={n.x}
          cy={n.y}
          r="9"
          fill={n.lit ? LIME : "oklch(17% 0.014 150)"}
          stroke={LIME}
          strokeWidth="1.5"
        />
      ))}
    </>
  );
}

function flow(rnd: () => number): ReactNode {
  const steps = Array.from({ length: 4 }, (_, i) => ({
    x: 60 + i * 80,
    y: round(80 + (i % 2) * 50 + (rnd() - 0.5) * 16),
  }));
  const active = Math.floor(rnd() * steps.length);
  return (
    <>
      <path
        d={steps.map((s, i) => `${i ? "L" : "M"}${s.x + 22} ${s.y + 14}`).join(" ")}
        stroke={DIM}
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
      {steps.map((s, i) => (
        <rect
          key={s.x}
          x={s.x}
          y={s.y}
          width="44"
          height="28"
          rx="6"
          stroke={LIME}
          strokeWidth="1.5"
          fill={i === active ? LIME : "oklch(17% 0.014 150)"}
        />
      ))}
      <circle cx="340" cy={steps[3]!.y + 14} r="14" stroke={LIME} strokeWidth="1.5" />
      <path d={`M333 ${steps[3]!.y + 14}l5 5 9-10`} stroke={LIME} strokeWidth="2" />
    </>
  );
}

function hub(rnd: () => number): ReactNode {
  const count = 5 + Math.floor(rnd() * 3);
  const spokes = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + rnd() * 0.3;
    const radius = 70 + rnd() * 18;
    return {
      x: round(200 + Math.cos(angle) * radius * 1.4),
      y: round(H / 2 + Math.sin(angle) * radius * 0.85),
      lit: rnd() > 0.5,
    };
  });
  return (
    <>
      {spokes.map((s) => (
        <line
          key={`l${s.x},${s.y}`}
          x1="200"
          y1={H / 2}
          x2={s.x}
          y2={s.y}
          stroke={s.lit ? LIME : DIM}
          strokeWidth="1.2"
        />
      ))}
      {spokes.map((s) => (
        <rect
          key={`n${s.x},${s.y}`}
          x={s.x - 11}
          y={s.y - 11}
          width="22"
          height="22"
          rx="5"
          stroke={LIME}
          strokeWidth="1.5"
          fill={s.lit ? "oklch(91% 0.21 125 / 0.2)" : "oklch(17% 0.014 150)"}
        />
      ))}
      <circle cx="200" cy={H / 2} r="22" fill={LIME} />
      <circle cx="200" cy={H / 2} r="34" stroke={DIM} />
    </>
  );
}

const MOTIFS: Record<ProjectCategory, (rnd: () => number) => ReactNode> = {
  web: browser,
  ai: network,
  automation: flow,
  integrations: hub,
};

/** Code-drawn lime wireframe artwork for a project card (stands in until real screenshots exist). */
export function ProjectArt({ category, seed, className = "" }: ProjectArtProps) {
  const rnd = random(`${category}:${seed}`);
  return (
    <svg
      aria-hidden="true"
      data-art={category}
      viewBox={`0 0 ${W} ${H}`}
      fill="none"
      className={className}
    >
      <g stroke="oklch(91% 0.21 125 / 0.08)">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2={H} />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 44} x2={W} y2={i * 44} />
        ))}
      </g>
      {MOTIFS[category](rnd)}
    </svg>
  );
}
