const RAPIDAPI_HOST = process.env.NEXT_PUBLIC_RAPIDAPI_HOST!
const RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY!

export const fetchMoviesBySearch = async (genre: string) => {
  const url = `https://${RAPIDAPI_HOST}/api/imdb/search?type=movie&genre=${genre}&rows=10&sortOrder=DESC&sortField=averageRating`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': RAPIDAPI_HOST,
      'x-rapidapi-key': RAPIDAPI_KEY,
    },
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Fetch failed:', response.status, errorText)
    throw new Error('Failed to fetch popular movies')
  }

  const data = await response.json()
  return data.results || []
}
