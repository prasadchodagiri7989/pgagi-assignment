'use client'

import { useEffect, useState } from 'react'
import { fetchSocialPosts } from '@/src/services/socialAPI'

const SocialFeed = ({ tagOrUser }: { tagOrUser: string }) => {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchSocialPosts(tagOrUser)
        setPosts(data)
      } catch (error) {
        console.error('Failed to fetch social posts', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [tagOrUser])

  return (
    <section className="my-8">
      <h2 className="text-xl font-bold mb-4">📱 Social Feed – {tagOrUser}</h2>

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div className="overflow-x-auto whitespace-nowrap flex gap-4 scrollbar-hide">
          {posts.map(post => (
            <div key={post.id} className="min-w-[280px] p-4 border rounded shadow">
              <img src={post.image} alt="Post Image" className="rounded mb-2 h-36 w-full object-cover" />
              <p className="text-sm font-medium">{post.user}</p>
              <p className="text-xs text-gray-600">{post.platform}</p>
              <p className="mt-2 text-sm">{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default SocialFeed
