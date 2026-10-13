import { useId, type ComponentProps } from 'react'
import { cn } from '@/lib/cn'

export interface InputProps extends ComponentProps<'input'> {
  label: string
  error?: string
}

export function Input({ label, error, id, className, ...props }: InputProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const errorId = `${inputId}-error`

  const inputClass = [
    'min-h-touch w-full rounded-base border border-line bg-surface px-16 text-small text-text',
    'transition-colors placeholder:text-caption',
    'enabled:hover:border-secondary',
    'focus-visible:border-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    'disabled:cursor-not-allowed disabled:bg-line disabled:text-caption',
    'aria-invalid:border-danger enabled:aria-invalid:hover:border-danger',
  ]

  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <label htmlFor={inputId} className="text-label font-medium text-secondary">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(inputClass)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-label text-danger">
          {error}
        </p>
      )}
    </div>
  )
}
