/** Pure motion maths for the hero robot (no three.js import, so it is unit-testable and tiny). */

const MAX_YAW = 0.6;
const MAX_PITCH = 0.35;
const WAVE_DURATION = 2.4;
const WAVE_SWINGS = 3;
const WAVE_AMPLITUDE = 0.55;
const LEAN_MAX_ROT = 0.9;
const LEAN_MAX_DROP = -0.6;

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));
const zero = (value: number): number => value + 0;

export interface HeadPose {
  /** Left/right turn in radians. */
  yaw: number;
  /** Up/down tilt in radians (positive looks down). */
  pitch: number;
}

/** Where the head should look for a pointer at (px, py), both normalised to -1..1 across the hero. */
export function headTarget(px: number, py: number): HeadPose {
  return {
    yaw: zero(clamp(px, -1, 1) * MAX_YAW),
    pitch: zero(clamp(py, -1, 1) * MAX_PITCH),
  };
}

/** Frame-rate independent exponential smoothing towards a target. */
export function damp(current: number, target: number, lambda: number, dt: number): number {
  return current + (target - current) * (1 - Math.exp(-lambda * dt));
}

/** Right-arm swing (radians) `t` seconds after the robot appears: three swings, then rest. */
export function waveAngle(t: number): number {
  if (t <= 0 || t >= WAVE_DURATION) return 0;
  const progress = t / WAVE_DURATION;
  const envelope = Math.sin(progress * Math.PI);
  return Math.sin(progress * WAVE_SWINGS * 2 * Math.PI) * WAVE_AMPLITUDE * envelope;
}

const WAVE_RAISE = 2.2;
const WAVE_RAISE_EASE = 0.4;

/** How far (radians) the waving arm is lifted `t` seconds after the robot appears. */
export function waveRaise(t: number): number {
  if (t <= 0 || t >= WAVE_DURATION) return 0;
  const up = Math.min(1, t / WAVE_RAISE_EASE);
  const down = Math.min(1, (WAVE_DURATION - t) / WAVE_RAISE_EASE);
  const amount = Math.min(up, down);
  return WAVE_RAISE * Math.sin((amount * Math.PI) / 2);
}

export interface Lean {
  rotY: number;
  posY: number;
}

/** How far the robot turns away and sinks as the hero scrolls out (progress 0..1). */
export function scrollLean(progress: number): Lean {
  const p = clamp(progress, 0, 1);
  const eased = p * p * (3 - 2 * p);
  return { rotY: zero(eased * LEAN_MAX_ROT), posY: zero(eased * LEAN_MAX_DROP) };
}

/** Device pixel ratio for the canvas: at least 1, at most 2 (sharp but affordable). */
export function capPixelRatio(dpr: number): number {
  if (!Number.isFinite(dpr)) return 1;
  return clamp(dpr, 1, 2);
}
