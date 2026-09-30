import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'light' | 'dark'

const getSystemTheme = (): ThemeMode =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

interface ThemeState {
  mode: ThemeMode
}
interface ThemeAction {
    setMode: (mode: ThemeMode) => void
}

type ThemeStore = ThemeState & ThemeAction;

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: getSystemTheme(),
      setMode: (mode) => set({mode})
    }),
    { name: 'theme' },
  ),
)