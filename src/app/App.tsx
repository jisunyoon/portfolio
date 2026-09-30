import { useEffect } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle'
import { Home } from '@/pages/Home/Home'
import { useThemeStore } from '@/store/themeStore'
import styles from './App.module.css'

export function App() {
  const mode = useThemeStore((s) => s.mode)

  useEffect(() => {
    document.documentElement.dataset.theme = mode
  }, [mode])

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <a href="/" className={styles.logo}>윤지선</a>
          <ThemeToggle />
        </div>
      </header>
      <Home />
    </>
  )
}
