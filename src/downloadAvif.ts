import ky from "ky";
import type { Song } from "./@types";
import sharp from "sharp";

export async function downloadAvif(song: Song) {
  const baseUrl = "https://wiki.rotaeno.cn";
  const response = await ky.get(`${baseUrl}${song.imageUrl}`);

  const imageBuffer = await response.arrayBuffer();
  await sharp(imageBuffer)
    .avif({ quality: 100 })
    .toFile(`data/images/${song.id}.avif`);
}
