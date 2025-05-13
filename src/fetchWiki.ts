import ky from "ky";

export async function fetchWiki(page: string) {
  const baseUrl = "https://wiki.rotaeno.cn";
  try {
    const response = await ky.get(`${baseUrl}/${encodeURIComponent(page)}`)
    
    return response.text()
  } catch (error) {
    if (error instanceof Error && error.name === 'TimeoutError') {
      throw new Error(`Request timeout for song: ${page}`)
    }
    if (error instanceof Error) {
      throw new Error(
        `Failed to fetch wiki page for ${page}: ${error.message}`
      )
    } else {
      throw new Error(
        `Failed to fetch wiki page for ${page}: ${String(error)}`
      )
    }
  }
}
