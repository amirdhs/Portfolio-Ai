import { describe, expect, it } from "vitest";
import {
  capPixelRatio,
  damp,
  headTarget,
  scrollLean,
  waveAngle,
  waveRaise,
} from "@/lib/robot/motion";

describe("headTarget", () => {
  it("turns fully right with the pointer at the right edge", () => {
    expect(headTarget(1, 0).yaw).toBeCloseTo(0.6);
  });

  it("clamps a pointer far outside the hero", () => {
    expect(headTarget(-5, 0).yaw).toBeCloseTo(-0.6);
    expect(headTarget(0, 9).pitch).toBeCloseTo(0.35);
  });

  it("looks straight ahead with the pointer centred", () => {
    expect(headTarget(0, 0)).toEqual({ yaw: 0, pitch: 0 });
  });
});

describe("damp", () => {
  it("moves part of the way towards the target each frame", () => {
    const next = damp(0, 1, 10, 1 / 60);
    expect(next).toBeGreaterThan(0);
    expect(next).toBeLessThan(1);
    expect(damp(next, 1, 10, 1 / 60)).toBeGreaterThan(next);
  });

  it("does not overshoot after a long frame", () => {
    expect(damp(0, 1, 10, 5)).toBeLessThanOrEqual(1);
  });
});

describe("waveAngle", () => {
  it("waves shortly after appearing", () => {
    expect(waveAngle(0.6)).not.toBe(0);
  });

  it("rests once the wave is over", () => {
    expect(waveAngle(3)).toBe(0);
    expect(waveAngle(-1)).toBe(0);
  });
});

describe("waveRaise", () => {
  it("is lowered before and after the wave", () => {
    expect(waveRaise(0)).toBe(0);
    expect(waveRaise(3)).toBe(0);
  });

  it("holds the arm fully raised mid-wave", () => {
    expect(waveRaise(1.2)).toBeCloseTo(2.2);
  });

  it("lifts the arm gradually instead of snapping", () => {
    expect(waveRaise(0.2)).toBeGreaterThan(0);
    expect(waveRaise(0.2)).toBeLessThan(2.2);
  });
});

describe("scrollLean", () => {
  it("stands upright at the top of the page", () => {
    expect(scrollLean(0)).toEqual({ rotY: 0, posY: 0 });
  });

  it("clamps progress beyond the hero", () => {
    expect(scrollLean(2)).toEqual(scrollLean(1));
    expect(scrollLean(-1)).toEqual(scrollLean(0));
  });
});

describe("capPixelRatio", () => {
  it("never renders above 2x", () => {
    expect(capPixelRatio(3)).toBe(2);
  });

  it("never renders below 1x", () => {
    expect(capPixelRatio(0.5)).toBe(1);
    expect(capPixelRatio(Number.NaN)).toBe(1);
  });
});
