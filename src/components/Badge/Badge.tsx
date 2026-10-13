import type { ComponentProps } from 'react'
import { cn } from '@/lib/cn'

export interface BadgeProps extends ComponentProps<'span'> {
  status?: 'success' | 'warning' | 'danger'
}

const dotClass = {
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
}

export function Badge({ status, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-8 rounded-pill px-12 py-4 text-label font-medium text-text',
        status ? 'border border-line bg-surface' : 'bg-accent-soft',
        className,
      )}
      {...props}
    >
      {status && <span aria-hidden="true" className={cn('size-8 rounded-pill', dotClass[status])} />}
      {children}
    </span>
  )
}
