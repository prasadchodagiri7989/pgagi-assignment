import { configureStore } from '@reduxjs/toolkit';
import userPrefsReducer from '../features/userPrefsSlice';
import recommendationReducer from './recommendationSlice' // ✅ import


export const store = configureStore({
  reducer: {
    userPrefs: userPrefsReducer,
    recommendation: recommendationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
