import { downloadAvif } from "./src/downloadAvif";
import { fetchWiki } from "./src/fetchWiki";
import { parseSongList } from "./src/pareSongList";
import { parseSong } from "./src/parseSong";

import { write } from "bun";
import * as semver from "semver";

const songListHtml = await fetchWiki("曲目列表");
const songList = parseSongList(songListHtml);
// const songList = ["After Rain"];

console.log(songList.length);

const allSongs = [];

for (const song of songList) {
  console.log(song);
  const songHtml = await fetchWiki(song);
  allSongs.push(parseSong(songHtml));
}

const sortedSongs = allSongs.sort((a, b) => {
  if (!a.releaseVersion || !b.releaseVersion) return 0;
  return semver.compare(a.releaseVersion, b.releaseVersion);
});

await write("data/songs_after_rain.json", JSON.stringify(sortedSongs, null, 2));
console.log("All songs data has been saved to songs.json");


