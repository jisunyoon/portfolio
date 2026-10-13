import type { ComponentProps } from 'react'
import { cn } from '@/lib/cn'

export interface ButtonProps extends ComponentProps<'button'> {
  loading?: boolean
  variant?: 'primary' | 'secondary'
}

export function Button({
  variant = 'primary',
  loading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClass = [
    'inline-flex min-h-touch items-center justify-center gap-8',
    'rounded-base border px-16 py-12 text-small transition-colors',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    'disabled:cursor-not-allowed aria-busy:cursor-progress',
  ]

  const variantClass = {
    primary: [
      'border-text bg-text font-medium text-bg',
      'enabled:hover:border-accent enabled:hover:bg-accent',
      'disabled:not-aria-busy:border-line disabled:not-aria-busy:bg-line disabled:not-aria-busy:text-secondary',
    ],
    secondary: [
      'border-line bg-surface text-text',
      'enabled:hover:border-accent',
      'disabled:not-aria-busy:text-caption',
      'aria-busy:text-secondary',
    ],
  }
  return (
    <button
      type="button"
      className={cn(baseClass, variantClass[variant], className)}
      aria-busy={loading}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="size-16 animate-spin rounded-pill border-2 border-current border-t-transparent"
        />
      )}
      {children}
    </button>
  )
}
