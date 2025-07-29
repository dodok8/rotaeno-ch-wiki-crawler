import ky from "ky";
import type { Song } from "./@types";
import sharp from "sharp";
import fs from "fs";
import path from "path";

export async function downloadAvif(song: Song) {
  const filePath = `data/images/${song.id}.avif`;

  // 파일이 이미 존재하는지 확인
  if (fs.existsSync(filePath)) {
    return;
  }

  // 디렉토리가 없으면 생성
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const baseUrl = "https://wiki.rotaeno.cn";
  try {
        const response = await ky.get(
      `${baseUrl}${song.imageUrl}`.replace("256", "512"),
      {
        timeout: false,
      }
    );

    const imageBuffer = await response.arrayBuffer();
    await sharp(imageBuffer).avif({ quality: 100 }).toFile(filePath);
  } catch (error) {
    console.log(song.id) 
  }

}
