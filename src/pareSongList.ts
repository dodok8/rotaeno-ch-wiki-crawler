import * as cheerio from "cheerio";

/**
 * Parse song lists from all matching tables in the document
 * @param html - HTML string
 * @returns Array of song titles from all tables
 */
export function parseSongList(html: string): string[] {
  const $ = cheerio.load(html);

  // Select the third table (index 2)
  const tables = $('table');
  if (tables.length < 3) {
    console.log("NO - Less than 3 tables found");
    return [];
  }

  const titles: string[] = [];

  // Process the third table only
  const thirdTable = tables.eq(2);
  
  thirdTable
    .find("tbody tr")
    .each((_, row) => {
      const cell = $(row).find("td:nth-child(2)");
      const link = cell.find("a");

      if (link.length > 0) {
        const title = link.text().trim();

        if (title !== "") {
          if (title == "^/7(L|?[_(L+#<>+&|^(o)") {
            titles.push("Nyarlathotep");
          } else {
            titles.push(title);
          }
        }
      }
    });

  return titles;
}
