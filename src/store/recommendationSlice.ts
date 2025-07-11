import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchMoviesBySearch } from '@/src/services/movieAPI'  

export const loadRecommendations = createAsyncThunk(
  'recommendation/load',
  async (genre: string) => {
    const data = await fetchMoviesBySearch(genre)
    return data
  }
)

const recommendationSlice = createSlice({
  name: 'recommendation',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRecommendations.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadRecommendations.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(loadRecommendations.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export default recommendationSlice.reducer
