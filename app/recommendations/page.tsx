'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/src/store'
import { fetchMoviesBySearch } from '@/src/services/movieAPI'
import ContentCard from '@/src/components/ContentCard'
import MovieSkeletonCard from '@/src/components/MovieSkeletonCard'

const MovieRecommendations = () => {
  const { movieCategories } = useSelector((state: RootState) => state.userPrefs)
  const [movies, setMovies] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true)
      try {
        let allMovies: any[] = []

        for (const genre of movieCategories) {
          const results = await fetchMoviesBySearch(genre)
          allMovies = [...allMovies, ...results]
        }

        setMovies(allMovies)
      } catch (error) {
        console.error('Error fetching movies:', error)
      } finally {
        setLoading(false)
      }
    }

    if (movieCategories.length > 0) {
      loadMovies()
    }
  }, [movieCategories])

  return (
    <section className="my-8">
      <h2 className="text-xl font-bold mb-4">🎬 Personalized Movie Recommendations</h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <MovieSkeletonCard key={i} />
          ))}
        </div>
      ) : movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <ContentCard
              key={index}
              title={movie.primaryTitle}
              image={movie.primaryImage || '/placeholder.jpg'}
              description={`Year: ${movie.startYear || 'N/A'} • Rating: ${movie.averageRating || 'N/A'}`}
              actionLabel="View"
              onClick={() => window.open(movie.url, '_blank')}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No movies found. Try selecting a different genre in Settings.</p>
      )}
    </section>
  )
}

export default MovieRecommendations
