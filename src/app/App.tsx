import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle'
import { Home } from '@/pages/Home/Home'
import styles from './App.module.css'

export function App() {
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
