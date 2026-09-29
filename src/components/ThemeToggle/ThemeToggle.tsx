import { useThemeStore } from '@/store/themeStore'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const mode = useThemeStore((s) => s.mode)
  const setMode = useThemeStore((s) => s.setMode)

  return (
    <div className={styles.group} role="group" aria-label="화면 테마">
      <button
        type="button"
        className={styles.option}
        aria-pressed={mode === 'light'}
        onClick={() => setMode('light')}
      >
        라이트
      </button>
      <button
        type="button"
        className={styles.option}
        aria-pressed={mode === 'dark'}
        onClick={() => setMode('dark')}
      >
        다크
      </button>
    </div>
  )
}
