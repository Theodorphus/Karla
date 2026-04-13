import { ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  fullWidth?: boolean
}

/**
 * Premium Button Component with 4 variants
 *
 * Variants:
 * - primary: Bold green CTA (use sparingly - only for main action)
 * - secondary: Subtle gray button (secondary actions)
 * - outline: Green border (alternative CTA)
 * - ghost: No background, text only (links inside CTA banners)
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className,
      children,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

    const variantStyles: Record<ButtonVariant, string> = {
      // PRIMÄR: Bold green för main CTA (beställ, kontakta)
      primary:
        'bg-brand-green text-white hover:bg-green-600 active:bg-green-700 focus-visible:ring-brand-green shadow-md hover:shadow-lg hover:translate-y-[-2px]',

      // SEKUNDÄR: Vit knapp med skugga & hover lift för stark CTA
      secondary:
        'bg-white text-gray-900 hover:bg-gray-50 active:bg-gray-100 focus-visible:ring-brand-green shadow-lg hover:shadow-xl hover:translate-y-[-2px] border border-white',

      // OUTLINE: Grön ram för alternativ CTA
      outline:
        'border-2 border-brand-green text-brand-green hover:bg-brand-green/5 active:bg-brand-green/10 focus-visible:ring-brand-green',

      // GHOST: Transparent, bara text (för links i CTABanner)
      'ghost':
        'text-white hover:bg-white/20 active:bg-white/30 focus-visible:ring-white focus-visible:ring-offset-0',
    }

    const sizeStyles: Record<ButtonSize, string> = {
      xs: 'px-3 py-1.5 text-xs',
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2.5 text-base',
      lg: 'px-8 py-3 text-lg',
      xl: 'px-10 py-4 text-lg',
    }

    const widthClass = fullWidth ? 'w-full' : ''

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      widthClass,
      props.disabled && 'opacity-50 cursor-not-allowed hover:shadow-none hover:translate-y-0',
      className
    )

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
