import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import NewsPage from '@/app/news/page'
import * as api from '@/src/services/newsAPI'

const mockStore = configureStore([thunk])

const mockArticles = [
  {
    title: 'Test Article',
    description: 'This is a test description',
    url: 'https://example.com',
    urlToImage: 'https://example.com/image.jpg',
    publishedAt: '2023-01-01T00:00:00Z',
    source: { name: 'Test Source' },
  },
]

jest.mock('@/src/services/newsAPI', () => ({
  fetchNewsByCategory: jest.fn(),
}))

describe('NewsPage', () => {
  it('renders loading skeletons initially', () => {
    const store = mockStore({
      userPrefs: { newsCategories: ['Technology'] },
    })

    render(
      <Provider store={store}>
        <NewsPage />
      </Provider>
    )

    expect(screen.getByText('📰 Personalized News Feed')).toBeInTheDocument()
  })

  it('renders news articles after loading', async () => {
    (api.fetchNewsByCategory as jest.Mock).mockResolvedValue(mockArticles)

    const store = mockStore({
      userPrefs: { newsCategories: ['Technology'] },
    })

    render(
      <Provider store={store}>
        <NewsPage />
      </Provider>
    )

    await waitFor(() => {
      expect(screen.getByText('Test Article')).toBeInTheDocument()
      expect(screen.getByText('This is a test description')).toBeInTheDocument()
    })
  })

  it('shows fallback if no categories are selected', async () => {
    const store = mockStore({
      userPrefs: { newsCategories: [] },
    })

    render(
      <Provider store={store}>
        <NewsPage />
      </Provider>
    )

    expect(screen.getByText(/No preferences selected/)).toBeInTheDocument()
  })
})
