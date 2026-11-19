export interface TiltRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface Tilt {
  /** Rotation around the X axis in degrees (positive tips the top towards the viewer). */
  rx: number;
  /** Rotation around the Y axis in degrees (positive turns the right edge away). */
  ry: number;
  /** Pointer position across the element, 0 (left) to 1 (right). */
  px: number;
  /** Pointer position down the element, 0 (top) to 1 (bottom). */
  py: number;
}

const FLAT: Tilt = { rx: 0, ry: 0, px: 0.5, py: 0.5 };
const DEFAULT_MAX_DEG = 8;

const clamp01 = (value: number): number => Math.min(1, Math.max(0, value));
/** Rounds to 3 decimals and normalises -0 to 0 so CSS values stay short and stable. */
const tidy = (value: number): number => Math.round(value * 1000) / 1000 + 0;

/** Converts a pointer position over an element into a 3D tilt that leans towards the pointer. */
export function tiltFromPointer(
  clientX: number,
  clientY: number,
  rect: TiltRect,
  maxDeg: number = DEFAULT_MAX_DEG,
): Tilt {
  if (rect.width <= 0 || rect.height <= 0) return FLAT;
  const px = clamp01((clientX - rect.left) / rect.width);
  const py = clamp01((clientY - rect.top) / rect.height);
  return {
    rx: tidy((0.5 - py) * 2 * maxDeg),
    ry: tidy((px - 0.5) * 2 * maxDeg),
    px: tidy(px),
    py: tidy(py),
  };
}
