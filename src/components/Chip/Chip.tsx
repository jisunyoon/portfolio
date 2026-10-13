import type { ComponentProps } from 'react'
import { cn } from '@/lib/cn'

export interface ChipProps extends ComponentProps<'button'> {
  selected?: boolean
  loading?: boolean
}

export function Chip({
  selected = false,
  loading = false,
  disabled,
  className,
  children,
  ...props
}: ChipProps) {
  const baseClass = [
    'inline-flex items-center gap-8 rounded-pill border border-line bg-surface px-16 py-4',
    'text-small text-text transition-colors',
    'enabled:hover:border-accent',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    'aria-pressed:border-text aria-pressed:bg-text aria-pressed:text-bg',
    'disabled:cursor-not-allowed disabled:not-aria-busy:bg-line disabled:not-aria-busy:text-secondary',
    'aria-busy:cursor-progress',
  ]

  return (
    <button
      type="button"
      className={cn(baseClass, className)}
      aria-pressed={selected}
      aria-busy={loading}
      disabled={disabled || loading}
      {...props}
    >
      {children}
      {loading && (
        <span aria-hidden="true" className="h-12 w-16 animate-pulse rounded-pill bg-line" />
      )}
    </button>
  )
}
