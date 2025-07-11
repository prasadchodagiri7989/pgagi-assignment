'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/src/store'
import { toggleDarkMode } from '@/src/features/userPrefsSlice';

const DarkModeToggle = () => {
  const dispatch = useDispatch()
  const isDarkMode = useSelector((state: RootState) => state.userPrefs.darkMode)

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded"
    >
      {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  )
}

export default DarkModeToggle
