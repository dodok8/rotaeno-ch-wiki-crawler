import type { Song } from "./src/@types";
import { fetchWiki } from "./src/fetchWiki";
import { parseSongList } from "./src/pareSongList";
import { parseSong } from "./src/parseSong";
import data from "./data/songs.json";

import { write } from "bun";
import * as semver from "semver";

const songListHtml = await fetchWiki("曲目列表");
const songList = [...parseSongList(songListHtml),
  // 2.12.1
  "Sakura rain", "ENERGY SYNERGY MATRIX", "ULTRA SYNERGY MATRIX", "QUATTUORUX", "Crossroads of the Brave", "May", "True"];

console.log(songList.length);

const allSongs: Song[] = data;

for (const song of songList) {
  console.log(song);
  if (
    allSongs.findIndex((item) => {
      return item.title_localized.default === song;
    }) !== -1 || song === "Nyarlathotep"
  ) {
    console.log("continue");
  } else {
    const songHtml = await fetchWiki(song);
    allSongs.push(parseSong(songHtml));
  }
}

const sortedSongs = allSongs.sort((a, b) => {
  if (!a.releaseVersion || !b.releaseVersion) return 0;
  return semver.compare(a.releaseVersion, b.releaseVersion);
});

console.log(allSongs.length)
await write("data/songs.json", JSON.stringify(sortedSongs, null, 2));
console.log("All songs data has been saved to songs.json");
