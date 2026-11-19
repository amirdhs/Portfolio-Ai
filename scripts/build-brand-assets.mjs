/**
 * Generates web-optimised brand assets from the source logo.
 * Run: pnpm brand:build  (only needed when assets/brand/amir-logo-source.png changes)
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SOURCE = "assets/brand/amir-logo-source.png";
const OUT_DIR = "public/brand";
/** Fraction of the trimmed logo height occupied by the letters (above the tagline). */
const LETTERS_HEIGHT_RATIO = 0.8;

await mkdir(OUT_DIR, { recursive: true });

const { data: trimmed, info } = await sharp(SOURCE).trim().toBuffer({ resolveWithObject: true });

const lettersRaw = await sharp(trimmed)
  .extract({
    left: 0,
    top: 0,
    width: info.width,
    height: Math.round(info.height * LETTERS_HEIGHT_RATIO),
  })
  .toBuffer();
const letters = await sharp(lettersRaw).trim().toBuffer();

const outputs = [
  // Full lockup (letters + tagline) for dark bands and footer.
  sharp(trimmed).resize({ width: 1200 }).webp({ quality: 88 }).toFile(`${OUT_DIR}/amir-logo.webp`),
  sharp(trimmed)
    .resize({ width: 1200 })
    .png({ compressionLevel: 9 })
    .toFile(`${OUT_DIR}/amir-logo.png`),
  // Letters only for the header (rendered ~30px high → 2x/3x density).
  sharp(letters)
    .resize({ height: 120 })
    .webp({ quality: 90 })
    .toFile(`${OUT_DIR}/amir-wordmark.webp`),
  sharp(letters)
    .resize({ height: 120 })
    .png({ compressionLevel: 9 })
    .toFile(`${OUT_DIR}/amir-wordmark.png`),
  // Chrome (desaturated, brightened) variants for the lime-on-black portfolio theme.
  sharp(letters)
    .resize({ height: 120 })
    .modulate({ saturation: 0, brightness: 1.55 })
    .webp({ quality: 90 })
    .toFile(`${OUT_DIR}/amir-wordmark-light.webp`),
  sharp(trimmed)
    .resize({ width: 1200 })
    .modulate({ saturation: 0, brightness: 1.55 })
    .webp({ quality: 88 })
    .toFile(`${OUT_DIR}/amir-logo-light.webp`),
];

const results = await Promise.all(outputs);
for (const r of results) console.log(`${r.width}x${r.height}  ${r.size} bytes`);

// ---- Social preview (1200×630) and app icons, on the brand's night colour ----
const NIGHT = { r: 22, g: 24, b: 30, alpha: 1 };

const ogLogo = await sharp(trimmed).resize({ width: 760 }).toBuffer();
const ogLogoMeta = await sharp(ogLogo).metadata();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: NIGHT } })
  .composite([
    {
      input: ogLogo,
      left: Math.round((1200 - 760) / 2),
      top: Math.round((630 - ogLogoMeta.height) / 2),
    },
  ])
  .png({ compressionLevel: 9 })
  .toFile(`${OUT_DIR}/og-image.png`);

// The "A" glyph: the first ~29% of the letters' width.
const lettersMeta = await sharp(letters).metadata();
const glyph = await sharp(letters)
  .extract({
    left: 0,
    top: 0,
    width: Math.round(lettersMeta.width * 0.29),
    height: lettersMeta.height,
  })
  .trim()
  .toBuffer();

async function icon(size, file, padding) {
  const inner = Math.round(size * (1 - padding * 2));
  const mark = await sharp(glyph).resize({ width: inner, height: inner, fit: "inside" }).toBuffer();
  const meta = await sharp(mark).metadata();
  await sharp({ create: { width: size, height: size, channels: 4, background: NIGHT } })
    .composite([
      {
        input: mark,
        left: Math.round((size - meta.width) / 2),
        top: Math.round((size - meta.height) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toFile(file);
}

await icon(512, "src/app/icon.png", 0.2);
await icon(180, "src/app/apple-icon.png", 0.2);
console.log("og-image.png, icon.png, apple-icon.png written");
