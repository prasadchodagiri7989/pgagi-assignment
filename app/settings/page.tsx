'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/src/store'
import { setNewsCategories, setMovieCategories } from '@/src/features/userPrefsSlice'
import { useState } from 'react'

const availableNewsCategories = [
  'Business',
  'Entertainment',
  'General',
  'Health',
  'Science',
  'Sports',
  'Technology',
]

const availableMovieGenres = [
  'Drama', 'Documentary', 'Comedy', 'Action', 'Romance', 'Thriller', 'Crime',
  'Horror', 'Music', 'Adventure', 'Family', 'Animation', 'Reality-TV',
  'Mystery', 'Biography', 'Talk-Show', 'History', 'Sport', 'Fantasy', 'Sci-Fi',
  'Musical', 'News', 'War', 'Adult', 'Game-Show', 'Western', 'Short', 'Film-Noir',
]

const SettingsPage = () => {
  const dispatch = useDispatch()
  const { newsCategories, movieCategories } = useSelector((state: RootState) => state.userPrefs)

  const [newsPrefs, setNewsPrefs] = useState<string[]>(newsCategories)
  const [moviePrefs, setMoviePrefs] = useState<string[]>(movieCategories)

  const handleToggle = (category: string, type: 'news' | 'movie') => {
    const setPrefs = type === 'news' ? setNewsPrefs : setMoviePrefs
    const currentPrefs = type === 'news' ? newsPrefs : moviePrefs

    setPrefs(
      currentPrefs.includes(category)
        ? currentPrefs.filter(c => c !== category)
        : [...currentPrefs, category]
    )
  }

  const handleSave = () => {
    dispatch(setNewsCategories(newsPrefs))
    dispatch(setMovieCategories(moviePrefs))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">⚙️ Personalize Your Content</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">📰 News Preferences</h2>
        <div className="flex flex-wrap gap-4">
          {availableNewsCategories.map(category => (
            <button
              key={`news-${category}`}
              onClick={() => handleToggle(category, 'news')}
              className={`px-4 py-2 border rounded ${
                newsPrefs.includes(category)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">🎬 Movie Genre Preferences</h2>
        <div className="flex flex-wrap gap-4">
          {availableMovieGenres.map(genre => (
            <button
              key={`movie-${genre}`}
              onClick={() => handleToggle(genre, 'movie')}
              className={`px-4 py-2 border rounded ${
                moviePrefs.includes(genre)
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Save Preferences
      </button>
    </div>
  )
}

export default SettingsPage
