import type { VariantType } from '../button/buttonType'

export interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: VariantType
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
  className?: string
  external?: boolean
}
