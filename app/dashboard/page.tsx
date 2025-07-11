'use client'

import MovieRecommendations from '@/src/components/MovieRecommendations'
import NewsRecommendations from '@/src/components/NewsRecommendations'

const DashboardPage = () => {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📚 Your Personalized Feed</h1>
      
      <NewsRecommendations />
      <MovieRecommendations />
    </main>
  )
}

export default DashboardPage
