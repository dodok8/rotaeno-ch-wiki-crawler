import * as cheerio from "cheerio";
import type { Song } from "./@types";
import { validateLocaleAndSetLanguage } from "typescript";

export function parseSong(html: string): Song {
  const $ = cheerio.load(html);

  const imageLinkNode = $("td.toppic > a");
  const imageHref = imageLinkNode.attr("href") || "";
  const imageUrl = imageLinkNode.find("img").attr("src") || "";
  const idMatch = imageHref.match(/Songs_(.+?)\.png/);
  const id = idMatch ? idMatch[1] || "" : "";

  const title = $("#firstHeading").text();
  const composer = $('td:contains("曲师")').next().text();
  const chapter = $('td:contains("曲包")').next().text();
  const releaseVersion = $('td:contains("更新版本")')
    .next()
    .text()
    .replace("v", "");
  const source_localized = $('td:contains("来源")').next().text() || "Original";

  const constTable = $("h3:contains('曲目定数')").next();
  const constValues: number[] = [];
  constTable
    .find("tr")
    .eq(1)
    .find("td")
    .each((i, td) => {
      const val = parseFloat($(td).text().trim());
      if (!isNaN(val)) {
        constValues.push(val);
      }
    });
  const constLabels = ["I", "II", "III", "IV", "IV-α"];

  return {
    artist: composer,
    title_localized: {
      default: title,
    },
    id,
    imageUrl,
    releaseVersion,
    chapter,
    charts: constValues.map((val, idx) => ({
      difficultyDecimal: val,
      difficultyLevel: constLabels[idx] || "",
      chartDesigner: "",
      jacketDesigner: "",
    })),
    source_localized: {
      default: source_localized,
    },
  };
}
