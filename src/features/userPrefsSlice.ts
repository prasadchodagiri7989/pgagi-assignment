import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserPrefsState {
  newsCategories: string[]
  movieCategories: string[]
  darkMode: boolean
}

const initialState: UserPrefsState = {
  newsCategories: ['Technology'],
  movieCategories: ['Drama', 'Action'],
  darkMode: false,
}

const userPrefsSlice = createSlice({
  name: 'userPrefs',
  initialState,
  reducers: {
    setNewsCategories(state, action: PayloadAction<string[]>) {
      state.newsCategories = action.payload
    },
    setMovieCategories(state, action: PayloadAction<string[]>) {
      state.movieCategories = action.payload
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
    },
  },
})

export const { setNewsCategories, setMovieCategories, toggleDarkMode } = userPrefsSlice.actions
export default userPrefsSlice.reducer
