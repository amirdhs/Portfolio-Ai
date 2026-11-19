import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(join(process.cwd(), "src/styles/global.css"), "utf8");

/** Body of an @keyframes block (balanced braces). */
function keyframes(name: string): string {
  const start = css.indexOf(`@keyframes ${name} {`);
  if (start < 0) throw new Error(`@keyframes ${name} not found`);
  let depth = 0;
  for (let i = css.indexOf("{", start); i < css.length; i++) {
    if (css[i] === "{") depth++;
    if (css[i] === "}" && --depth === 0) return css.slice(start, i + 1);
  }
  throw new Error("unbalanced");
}

describe("motion CSS", () => {
  it("scrolls the grid floor with a compositor-friendly transform, not background-position", () => {
    const body = keyframes("grid-scroll");
    expect(body).not.toMatch(/background-position/);
    expect(body).toMatch(/transform/);
  });

  it("reveals glitch-hidden headings on its own if the app never hydrates", () => {
    expect(css).toMatch(
      /\.glitch-reveal:not\(\[data-revealed\]\)\s*\{[^}]*animation:\s*glitch-failsafe/,
    );
    expect(keyframes("glitch-failsafe")).toMatch(/opacity:\s*1/);
  });
});
