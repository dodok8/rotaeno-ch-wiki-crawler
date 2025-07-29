import songsData from "./data/songs.json";
import type { Song } from "./src/@types";
import { downloadAvif } from "./src/downloadAvif";

const songs = songsData as Song[];

songs.map(async (song) => {
  await downloadAvif(song);
  // console.log(`Downloaded and converted image for ${song.id}`);
});
