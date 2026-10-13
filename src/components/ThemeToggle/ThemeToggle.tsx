import { useThemeStore } from '@/store/themeStore'

const optionClass =
  'min-h-touch rounded-base border border-transparent px-12 text-small text-secondary transition-colors hover:text-text aria-pressed:border-line aria-pressed:bg-surface aria-pressed:font-medium aria-pressed:text-text'

export function ThemeToggle() {
  const mode = useThemeStore((s) => s.mode)
  const setMode = useThemeStore((s) => s.setMode)

  return (
    <div
      className="inline-flex rounded-base border border-line bg-bg"
      role="group"
      aria-label="화면 테마"
    >
      <button
        type="button"
        className={optionClass}
        aria-pressed={mode === 'light'}
        onClick={() => setMode('light')}
      >
        라이트
      </button>
      <button
        type="button"
        className={optionClass}
        aria-pressed={mode === 'dark'}
        onClick={() => setMode('dark')}
      >
        다크
      </button>
    </div>
  )
}
