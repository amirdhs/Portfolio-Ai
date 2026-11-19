import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(join(process.cwd(), "src/styles/tokens.css"), "utf8");

interface Oklch {
  l: number;
  c: number;
  h: number;
}

function token(name: string): Oklch {
  const match = new RegExp(
    `--color-${name}:\\s*oklch\\(([\\d.]+)%\\s+([\\d.]+)\\s+([\\d.]+)\\)`,
  ).exec(css);
  if (!match) throw new Error(`token --color-${name} not found as oklch()`);
  return { l: Number(match[1]) / 100, c: Number(match[2]), h: Number(match[3]) };
}

/** OKLCH → linear sRGB → WCAG relative luminance (channels clamped to gamut). */
function luminance({ l, c, h }: Oklch): number {
  const rad = (h * Math.PI) / 180;
  const a = c * Math.cos(rad);
  const b = c * Math.sin(rad);
  const l_ = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m_ = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s_ = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const clamp = (v: number) => Math.min(1, Math.max(0, v));
  const r = clamp(4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_);
  const g = clamp(-1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_);
  const bl = clamp(-0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_);
  return 0.2126 * r + 0.7152 * g + 0.0722 * bl;
}

function contrast(fg: string, bg: string): number {
  const [hi, lo] = [luminance(token(fg)), luminance(token(bg))].sort((x, y) => y - x);
  return (hi! + 0.05) / (lo! + 0.05);
}

describe("design tokens", () => {
  it("uses a neon-lime accent instead of champagne gold", () => {
    const { h, c } = token("accent");
    expect(h).toBeGreaterThanOrEqual(110);
    expect(h).toBeLessThanOrEqual(140);
    expect(c).toBeGreaterThan(0.15);
  });

  it("keeps dark text on the lime fill readable", () => {
    expect(contrast("on-accent", "accent")).toBeGreaterThanOrEqual(4.5);
  });

  it("keeps secondary text and lime text readable on the page surface", () => {
    expect(contrast("ink-2", "paper")).toBeGreaterThanOrEqual(4.5);
    expect(contrast("ink-3", "paper")).toBeGreaterThanOrEqual(4.5);
    expect(contrast("lime-ink", "paper")).toBeGreaterThanOrEqual(4.5);
  });
});
