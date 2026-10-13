import { useEffect } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle'
import { Home } from '@/pages/Home/Home'
import { useThemeStore } from '@/store/themeStore'

export function App() {
  const mode = useThemeStore((s) => s.mode)

  useEffect(() => {
    document.documentElement.dataset.theme = mode
  }, [mode])

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-bg">
        <div className="container-page flex items-center justify-between py-24">
          <a href="/" className="font-display text-subtitle">
            윤지선
          </a>
          <ThemeToggle />
        </div>
      </header>
      <Home />
    </>
  )
}
