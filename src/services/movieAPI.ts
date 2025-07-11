const RAPIDAPI_HOST = 'imdb236.p.rapidapi.com'
const RAPIDAPI_KEY = 'b5383b3dc8msh1444dab0d8a6121p1afec2jsn4b91ed4c9324'

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

