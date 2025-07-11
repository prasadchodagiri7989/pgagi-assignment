'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/src/store'
import { fetchNewsByCategory } from '@/src/services/newsAPI'
import ContentCard from '@/src/components/ContentCard'
import NewsSkeletonCard from '@/src/components/NewsSkeletonCard'

interface NewsArticle {
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  source: { name: string }
}

const NewsPage = () => {
  const newsCategories = useSelector((state: RootState) => state.userPrefs.newsCategories)
  const [newsByCategory, setNewsByCategory] = useState<Record<string, NewsArticle[]>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAllNews = async () => {
      setLoading(true)
      try {
        const results: Record<string, NewsArticle[]> = {}

        for (const category of newsCategories) {
          const articles = await fetchNewsByCategory(category.toLowerCase())
          results[category] = articles
        }

        setNewsByCategory(results)
      } catch (err) {
        console.error('Failed to load news:', err)
      } finally {
        setLoading(false)
      }
    }

    if (newsCategories.length > 0) {
      loadAllNews()
    } else {
      setNewsByCategory({})
      setLoading(false)
    }
  }, [newsCategories])

  return (
    <main className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">📰 Personalized News Feed</h1>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <NewsSkeletonCard key={i} />
          ))}
        </div>
      ) : newsCategories.length === 0 ? (
        <p className="text-gray-500">No preferences selected. Go to Settings to choose your favorite news categories.</p>
      ) : (
        newsCategories.map(category => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{category} News</h2>

            {newsByCategory[category]?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsByCategory[category].map((article, index) => (
                  <ContentCard
                    key={index}
                    title={article.title}
                    image={article.urlToImage || '/placeholder.jpg'}
                    description={article.description || 'No description available.'}
                    actionLabel="Read More"
                    onClick={() => window.open(article.url, '_blank')}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No articles found in the {category} category.</p>
            )}
          </section>
        ))
      )}
    </main>
  )
}

export default NewsPage
