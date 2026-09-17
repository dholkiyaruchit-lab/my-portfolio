import { cn } from '../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-mono rounded-full',
        {
          'bg-bg-tertiary text-text-secondary': variant === 'default',
          'bg-accent/10 text-accent': variant === 'accent',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
