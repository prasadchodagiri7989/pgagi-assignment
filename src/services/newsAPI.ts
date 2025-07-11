const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export async function fetchNewsByCategory(category: string = 'technology') {
  const res = await fetch(`${BASE_URL}/top-headlines?category=${category}&country=us&apiKey=${API_KEY}`);
  if (!res.ok) {
    throw new Error('Failed to fetch news');
  }
  const data = await res.json();
  return data.articles;
}
