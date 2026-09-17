import { forwardRef } from 'react'
import { cn } from '../lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-bg-secondary border border-border rounded-lg p-6',
          hover && 'transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.1)] cursor-pointer glow-border',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
export default Card
