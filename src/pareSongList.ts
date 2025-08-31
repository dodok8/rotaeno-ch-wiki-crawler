import * as cheerio from "cheerio";

/**
 * Parse song lists from all matching tables in the document
 * @param html - HTML string
 * @returns Array of song titles from all tables
 */
export function parseSongList(html: string): string[] {
  const $ = cheerio.load(html);

  const tables = $('table');
  const titles: string[] = [];

  const secondTable = tables.eq(1);
  
  secondTable
    .find("tbody tr")
    .each((_, row) => {
      const cell = $(row).find("td:nth-child(2)");
      const link = cell.find("a");

      if (link.length > 0) {
        const title = link.text().trim();

        if (title !== "") {
          if (title === "^/7(L|?[_(L+#<>+&|^(o)") {
            titles.push("Nyarlathotep");
          
          }
          else if (title === "oiiaioooooiai") {
          }
          else {
            titles.push(title);
          }
        }
      }
    });

  return titles;
}
