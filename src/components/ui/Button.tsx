import { ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-white' | 'ghost'
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
const baseStyles =
  'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-navy text-white hover:bg-petrol active:bg-petrol/90 focus-visible:ring-navy shadow-md hover:shadow-lg hover:translate-y-[-1px] tracking-wide',

  secondary:
    'bg-white text-navy hover:bg-gray-50 active:bg-gray-100 focus-visible:ring-navy shadow-lg hover:shadow-xl hover:translate-y-[-1px] border border-white/20',

  outline:
    'border-2 border-navy text-navy hover:bg-navy hover:text-white active:bg-petrol focus-visible:ring-navy transition-colors',

  // För mörka bakgrunder (hero/CTA): vit kontur som fylls vid hover.
  'outline-white':
    'border-2 border-white text-white hover:bg-white hover:text-navy active:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-0 shadow-md transition-colors',

  ghost:
    'text-white hover:bg-white/15 active:bg-white/25 focus-visible:ring-white focus-visible:ring-offset-0',
}

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'px-3 py-1.5 text-xs',
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
  xl: 'px-10 py-4 text-lg',
}

/**
 * Returnerar de delade knapp-klasserna. Använd på <a>/<Link> (t.ex. tel:-länkar)
 * som behöver se ut exakt som en <Button> men inte kan vara ett <button>.
 */
export function buttonClasses({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
} = {}): string {
  return cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className
  )
}

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
    const combinedClassName = cn(
      buttonClasses({ variant, size, fullWidth, className }),
      props.disabled && 'opacity-50 cursor-not-allowed hover:shadow-none hover:translate-y-0'
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
