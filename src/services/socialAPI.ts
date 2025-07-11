export const fetchSocialPosts = async (tagOrUser: string) => {
  await new Promise(res => setTimeout(res, 800))

  return [
    {
      id: '1',
      platform: 'Twitter',
      user: '@elonmusk',
      content: 'AI will change the world 🌍 #Future',
      image: 'https://source.unsplash.com/400x200/?ai',
    },
    {
      id: '2',
      platform: 'Instagram',
      user: '@natgeo',
      content: 'Incredible wildlife from the Amazon rainforest 🐍',
      image: 'https://source.unsplash.com/400x200/?wildlife',
    },
    {
      id: '3',
      platform: 'Twitter',
      user: '@techcrunch',
      content: `Top 5 AI startups to watch in 2025 🚀 #AI`,
      image: 'https://source.unsplash.com/400x200/?technology',
    },
  ]
}
