import { ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className,
      asChild,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'font-semibold rounded-lg transition-colors duration-200 inline-flex items-center justify-center whitespace-nowrap'

    const variantStyles: Record<ButtonVariant, string> = {
      primary: 'bg-brand-green text-white hover:bg-green-600 active:bg-green-700',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400',
      outline:
        'border-2 border-brand-green text-brand-green hover:bg-green-50 active:bg-green-100',
    }

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      props.disabled && 'opacity-50 cursor-not-allowed',
      className
    )

    if (asChild) {
      return (
        <span className={combinedClassName} {...props}>
          {children}
        </span>
      )
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
