import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'light' | 'dark'

const getSystemTheme = (): ThemeMode =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

interface ThemeState {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: getSystemTheme(),
      setMode: (mode) => {
        document.documentElement.dataset.theme = mode
        set({ mode })
      },
    }),
    { name: 'theme' },
  ),
)
