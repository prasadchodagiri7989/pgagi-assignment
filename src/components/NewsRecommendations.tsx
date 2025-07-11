'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/src/store'
import { fetchNewsByCategory } from '@/src/services/newsAPI'
import ContentCard from '@/src/components/ContentCard'
import NewsSkeletonCard from '@/src/components/NewsSkeletonCard'

const NewsRecommendations = () => {
  const { newsCategories } = useSelector((state: RootState) => state.userPrefs)
  const [news, setNews] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true)
      try {
        let allArticles: any[] = []
        for (const category of newsCategories) {
          const articles = await fetchNewsByCategory(category)
          allArticles = [...allArticles, ...articles]
        }
        setNews(allArticles)
      } catch (err) {
        console.error('Failed to load news:', err)
      } finally {
        setLoading(false)
      }
    }

    loadNews()
  }, [newsCategories])

  return (
    <section className="my-8">
      <h2 className="text-xl font-bold mb-4">📰 News For You</h2>
      {loading ? (
        <div className="flex overflow-x-auto whitespace-nowrap space-x-4 no-scrollbar">
          {Array.from({ length: 4 }).map((_, i) => (
            <NewsSkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div className="flex overflow-x-auto whitespace-nowrap space-x-4 no-scrollbar">
          {news.map((item, index) => (
            <div key={`${item.title}-${index}`} className="inline-block min-w-[300px] max-w-xs">
              <ContentCard
                title={item.title}
                image={item.urlToImage || '/placeholder.jpg'}
                description={item.description || 'No description'}
                actionLabel="Read More"
                onClick={() => window.open(item.url, '_blank')}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default NewsRecommendations
