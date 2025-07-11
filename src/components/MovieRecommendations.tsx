'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/src/store'
import { fetchMoviesBySearch } from '@/src/services/movieAPI'
import ContentCard from '@/src/components/ContentCard'
import MovieSkeletonCard from '@/src/components/MovieSkeletonCard'
const availableGenres = [
  'Drama', 'Documentary', 'Comedy', 'Action', 'Romance', 'Thriller', 'Crime',
  'Horror', 'Music', 'Adventure', 'Family', 'Animation', 'Reality-TV',
  'Mystery', 'Biography', 'Talk-Show', 'History', 'Sport', 'Fantasy', 'Sci-Fi',
  'Musical', 'News', 'War', 'Adult', 'Game-Show', 'Western', 'Short', 'Film-Noir',
]

const MovieRecommendations = () => {
  const { movieCategories } = useSelector((state: RootState) => state.userPrefs)
  const [movies, setMovies] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const isValidGenre = (genre: string) => availableGenres.includes(genre)


  useEffect(() => {
    const loadMovies = async () => {
  try {
    setLoading(true)
    let allMovies: any[] = []
    for (const genre of movieCategories) {
      if (!isValidGenre(genre)) continue // Skip invalid ones
      const movieResults = await fetchMoviesBySearch(genre)
      allMovies = [...allMovies, ...movieResults]
    }
    setMovies(allMovies)
  } catch (error) {
    console.error('Error fetching movies:', error)
  } finally {
    setLoading(false)
  }
}

    loadMovies()
  }, [movieCategories])

  return (
    <section className="my-8">
      <h2 className="text-xl font-bold mb-4">🎬 Movies For You</h2>
      {loading ? (
        <div className="flex overflow-x-auto whitespace-nowrap space-x-4 no-scrollbar">
          {Array.from({ length: 4 }).map((_, i) => (
            <MovieSkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div className="flex overflow-x-auto whitespace-nowrap space-x-4 no-scrollbar">
          {movies.map((movie, index) => (
            <div key={index} className="inline-block min-w-[250px]">
              <ContentCard
                title={movie.primaryTitle}
                image={movie.primaryImage || '/placeholder.jpg'}
                description={`Year: ${movie.startYear || 'N/A'} • Rating: ${movie.averageRating || 'N/A'}`}
                actionLabel="View"
                onClick={() => window.open(movie.url, '_blank')}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default MovieRecommendations
