import * as cheerio from "cheerio";

/**
 * Parse song lists from all matching tables in the document
 * @param html - HTML string
 * @returns Array of song titles from all tables
 */
export function parseSongList(html: string): string[] {
  const $ = cheerio.load(html);

  // Try first with exact class attribute match
  let tables = $('table[class="sortable rotable"]');

  // If no tables found, try with individual class selectors
  if (tables.length === 0) {
    tables = $("table.sortable.rotable");
  }

  // Return empty array if still no tables found
  if (tables.length === 0) {
    console.log("NO");
    return [];
  }

  const titles: string[] = [];

  // Process all tables
  tables.each((_, table) => {
    $(table)
      .find("tbody tr")
      .each((_, row) => {
        const dateCell = $(row).find("td:nth-child(5)");
        const dateText = dateCell.text().trim();

        if (!dateText.includes("04/01")) {
          const cell = $(row).find("td:nth-child(2)");
          const link = cell.find("a");
          const title =
            link.length > 0 ? link.text().trim() : cell.text().trim();

          if (title !== "") {
            if (title == "^/7(L|?[_(L+#<>+&|^(o)") {
              titles.push("Nyarlathotep");
            } else {
              titles.push(title);
            }
          }
        }
      });
  });

  return titles;
}
