/**
 * Poster image for the hero video: the resting frame (3.5 s into the clip), shown before the video
 * loads, for visitors with reduced motion, and as the first frame.
 * Extract the frame with ffmpeg first (see README → "Hero video"), then run:
 *   node scripts/build-hero-assets.mjs
 */
import sharp from "sharp";

const info = await sharp("assets/hero/poster.jpg")
  .webp({ quality: 82 })
  .toFile("public/hero/hero-poster.webp");
console.log("hero-poster.webp", info.width, info.height, info.size);
