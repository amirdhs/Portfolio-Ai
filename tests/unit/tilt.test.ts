import { describe, expect, it } from "vitest";
import { tiltFromPointer } from "@/lib/fx/tilt";

const rect = { left: 100, top: 50, width: 200, height: 100 };

describe("tiltFromPointer", () => {
  it("is flat with the pointer in the centre", () => {
    expect(tiltFromPointer(200, 100, rect)).toEqual({ rx: 0, ry: 0, px: 0.5, py: 0.5 });
  });

  it("leans towards the top-left corner by the maximum angle", () => {
    expect(tiltFromPointer(100, 50, rect, 8)).toEqual({ rx: 8, ry: -8, px: 0, py: 0 });
  });

  it("clamps a pointer outside the element", () => {
    expect(tiltFromPointer(9999, -9999, rect, 8)).toEqual({ rx: 8, ry: 8, px: 1, py: 0 });
  });

  it("defaults to an 8 degree maximum", () => {
    expect(tiltFromPointer(300, 150, rect).rx).toBe(-8);
  });

  it("returns a flat tilt for an element with no size", () => {
    const flat = tiltFromPointer(10, 10, { left: 0, top: 0, width: 0, height: 0 });
    expect(flat).toEqual({ rx: 0, ry: 0, px: 0.5, py: 0.5 });
  });
});
