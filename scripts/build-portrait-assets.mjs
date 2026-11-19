/**
 * Builds the portfolio portrait assets from the founder photo:
 *  - amir-dehestani-dark.webp:  the light studio background swapped for the site's near-black green
 *  - amir-dehestani-depth.webp: a soft greyscale depth map (near = light) for the DepthPortrait shader
 * The background is found by flood-filling from the image border with a colour tolerance, so light
 * clothing that is enclosed by the suit is never mistaken for background.
 * Run: pnpm portrait:build
 */
import sharp from "sharp";

const SOURCE = "public/brand/amir-dehestani.jpg";
const OUT_DARK = "public/brand/amir-dehestani-dark.webp";
const OUT_DEPTH = "public/brand/amir-dehestani-depth.webp";
const LOCAL_TOLERANCE = 9;
const GLOBAL_TOLERANCE = 58;
const NEUTRAL_SPREAD = 14;
const SHADOW_MIN_SUM = 330;
const ERODE_PX = 2;
const BACKDROP = [12, 20, 15];
/** Face centre and radii as fractions of the image (measured on the source photo). */
const FACE = { x: 0.51, y: 0.26, rx: 0.15, ry: 0.19 };

const { data, info } = await sharp(SOURCE)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width, height } = info;
const px = (i) => [data[i * 3], data[i * 3 + 1], data[i * 3 + 2]];

// Reference background colour: per-channel median of the top row (the subject never touches it).
const topRow = Array.from({ length: width }, (_, x) => px(x));
const bg = [0, 1, 2].map((c) => topRow.map((p) => p[c]).sort((m, n) => m - n)[width >> 1]);
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);
/** Backdrop-like: near the reference grey, or a neutral (unsaturated) grey in the studio shadow. */
const backdropLike = (p) =>
  dist(p, bg) < GLOBAL_TOLERANCE ||
  (Math.max(...p) - Math.min(...p) < NEUTRAL_SPREAD && p[0] + p[1] + p[2] > SHADOW_MIN_SUM);

// Region growing from the border: a neighbour joins when it is close to the pixel it was reached
// from (smooth studio gradient) and still roughly backdrop-coloured (never skin, hair or suit).
const background = new Uint8Array(width * height);
const stack = [];
const seed = (i) => {
  if (!background[i] && backdropLike(px(i))) {
    background[i] = 1;
    stack.push(i);
  }
};
for (let x = 0; x < width; x++) seed(x);
for (let y = 0; y < height; y++) {
  seed(y * width);
  seed(y * width + width - 1);
}
while (stack.length) {
  const i = stack.pop();
  const here = px(i);
  const x = i % width;
  const next = [];
  if (x > 0) next.push(i - 1);
  if (x < width - 1) next.push(i + 1);
  if (i >= width) next.push(i - width);
  if (i < width * (height - 1)) next.push(i + width);
  for (const j of next) {
    if (background[j]) continue;
    const there = px(j);
    if (dist(there, here) < LOCAL_TOLERANCE && backdropLike(there)) {
      background[j] = 1;
      stack.push(j);
    }
  }
}

// Subject mask (255 = person), feathered.
const mask = Buffer.alloc(width * height);
for (let i = 0; i < mask.length; i++) mask[i] = background[i] ? 0 : 255;
// Shrink the subject slightly so no light backdrop fringe survives around hair and shoulders.
for (let pass = 0; pass < ERODE_PX; pass++) {
  const before = Buffer.from(mask);
  for (let i = 0; i < mask.length; i++) {
    if (!before[i]) continue;
    const x = i % width;
    const edge =
      (x > 0 && !before[i - 1]) ||
      (x < width - 1 && !before[i + 1]) ||
      (i >= width && !before[i - width]) ||
      (i < width * (height - 1) && !before[i + width]);
    if (edge) mask[i] = 0;
  }
}
const soft = await sharp(mask, { raw: { width, height, channels: 1 } })
  .blur(1.2)
  .extractChannel(0)
  .raw()
  .toBuffer();

// Dark version: blend the photo over the backdrop through the soft mask.
const dark = Buffer.alloc(width * height * 3);
for (let i = 0; i < width * height; i++) {
  const a = soft[i] / 255;
  for (let c = 0; c < 3; c++)
    dark[i * 3 + c] = Math.round(data[i * 3 + c] * a + BACKDROP[c] * (1 - a));
}
await sharp(dark, { raw: { width, height, channels: 3 } })
  .webp({ quality: 86 })
  .toFile(OUT_DARK);

// Depth: person at mid depth, face and chest nearer, background far.
const depth = Buffer.alloc(width * height);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = y * width + x;
    const fx = (x / width - FACE.x) / FACE.rx;
    const fy = (y / height - FACE.y) / FACE.ry;
    const face = Math.max(0, 1 - Math.hypot(fx, fy));
    const chest = Math.max(0, 1 - Math.abs(x / width - 0.5) / 0.38) * (y / height > 0.4 ? 1 : 0);
    const value = (soft[i] / 255) * (0.45 + 0.4 * face + 0.15 * chest);
    depth[i] = Math.round(Math.min(1, value) * 255);
  }
}
await sharp(depth, { raw: { width, height, channels: 1 } })
  .blur(10)
  .webp({ quality: 80 })
  .toFile(OUT_DEPTH);

console.log(`${OUT_DARK} and ${OUT_DEPTH} written (${width}x${height})`);
