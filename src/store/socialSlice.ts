import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchSocialPosts } from '@/src/services/socialAPI'

export interface SocialPost {
  id: string
  platform: string
  user: string
  content: string
  image: string
}

interface SocialState {
  posts: SocialPost[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: SocialState = {
  posts: [],
  status: 'idle',
}

export const loadSocialPosts = createAsyncThunk<SocialPost[], string>(
  'social/load',
  async (tagOrUser: string) => {
    const data = await fetchSocialPosts(tagOrUser)
    return data
  }
)

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadSocialPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadSocialPosts.fulfilled, (state, action: PayloadAction<SocialPost[]>) => {
        state.status = 'succeeded'
        state.posts = action.payload
      })
      .addCase(loadSocialPosts.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export default socialSlice.reducer
