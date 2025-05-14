import { expect, test, describe } from "bun:test";
import { fetchWiki } from "../src/fetchWiki";
import { parseSong } from "../src/parseSong";

describe("parseSong", () => {
  test("After Rain", async () => {
    const songHtml = await fetchWiki("After Rain");
    const result = parseSong(songHtml);

    expect(result).toEqual({
      id: "after-rain",
      imageUrl:
        "/images/thumb/0/0c/Songs_after-rain.png/256px-Songs_after-rain.png",
      artist: "HyuN & MIIM",
      releaseVersion: "1.0.3",
      chapter: "基础歌曲",
      title_localized: {
        default: "After Rain",
      },
      source_localized: {
        default: "Rotaeno Sound Collection",
      },
      charts: [
        {
          difficultyLevel: "I",
          difficultyDecimal: 2,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "II",
          difficultyDecimal: 4,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "III",
          difficultyDecimal: 8.2,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "IV",
          difficultyDecimal: 10.8,
          chartDesigner: "",
          jacketDesigner: "",
        },
      ],
    });
  });

  test("심장병", async () => {
    const songHtml = await fetchWiki("심장병");
    const result = parseSong(songHtml);

    expect(result).toEqual({
      id: "xinzang-bing",
      imageUrl:
        "/images/thumb/b/b1/Songs_xinzang-bing.png/256px-Songs_xinzang-bing.png",
      artist: "HyuN feat. HUBOG",
      releaseVersion: "1.0.3",
      chapter: "基础歌曲",
      title_localized: {
        default: "심장병",
      },
      source_localized: {
        default: "Rotaeno Sound Collection",
      },
      charts: [
        {
          difficultyLevel: "I",
          difficultyDecimal: 1,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "II",
          difficultyDecimal: 3,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "III",
          difficultyDecimal: 8.2,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "IV",
          difficultyDecimal: 9.5,
          chartDesigner: "",
          jacketDesigner: "",
        },
      ],
    });
  });

  test("アイロニ", async () => {
    const songHtml = await fetchWiki("アイロニ");
    const result = parseSong(songHtml);

    expect(result).toEqual({
      id: "irony",
      imageUrl: "/images/thumb/4/4e/Songs_irony.png/256px-Songs_irony.png",
      artist: "すこっぷ",
      releaseVersion: "1.9.0",
      chapter: "自未来的歌",
      title_localized: {
        default: "アイロニ",
      },
      source_localized: {
        default: "Original",
      },
      charts: [
        {
          difficultyLevel: "I",
          difficultyDecimal: 3,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "II",
          difficultyDecimal: 5,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "III",
          difficultyDecimal: 7,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "IV",
          difficultyDecimal: 11.6,
          chartDesigner: "",
          jacketDesigner: "",
        },
      ],
    });
  });

  test("Heaven's Cage", async () => {
    const songHtml = await fetchWiki("Heaven's Cage");
    const result = parseSong(songHtml);

    expect(result).toEqual({
      id: "heavens-cage",
      imageUrl:
        "/images/thumb/5/55/Songs_heavens-cage.png/256px-Songs_heavens-cage.png",
      artist: "ETIA.",
      releaseVersion: "2.0.0",
      chapter: "第三章 - 泾渭分明之地",
      title_localized: {
        default: "Heaven's Cage",
      },
      source_localized: {
        default: "Rotaeno Sound Collection",
      },
      charts: [
        {
          difficultyLevel: "I",
          difficultyDecimal: 3,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "II",
          difficultyDecimal: 7,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "III",
          difficultyDecimal: 10.4,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "IV",
          difficultyDecimal: 13.1,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "IV-α",
          difficultyDecimal: 13.9,
          chartDesigner: "",
          jacketDesigner: "",
        },
      ],
    });
  });
  test("Inverted World", async () => {
    const songHtml = await fetchWiki("Inverted World");
    const result = parseSong(songHtml);

    expect(result).toEqual({
      id: "inverted-world",
      imageUrl:
        "/images/thumb/c/c7/Songs_inverted-world.png/256px-Songs_inverted-world.png",
      artist: "ARForest",
      releaseVersion: "1.0.3",
      chapter: "第一章 - 旅程的开始",
      title_localized: {
        default: "Inverted World",
      },
      source_localized: {
        default: "Rotaeno Sound Collection",
      },
      charts: [
        {
          difficultyLevel: "I",
          difficultyDecimal: 4,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "II",
          difficultyDecimal: 8.1,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "III",
          difficultyDecimal: 11.4,
          chartDesigner: "",
          jacketDesigner: "",
        },
        {
          difficultyLevel: "IV",
          difficultyDecimal: 13.6,
          chartDesigner: "",
          jacketDesigner: "",
        },
      ],
    });
  });
});

// Inverted World 추가할것, 이거 차트가 전혀 파싱이 안 됨.
// IN
//
