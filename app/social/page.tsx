import SocialFeed from '@/src/components/SocialFeed'

const SocialPage = () => {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🌐 Explore Hashtags</h1>

      <SocialFeed tagOrUser="AI" />
      <SocialFeed tagOrUser="wildlife" />
      <SocialFeed tagOrUser="@elonmusk" />
    </main>
  )
}

export default SocialPage
