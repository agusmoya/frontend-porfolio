export const VARIANT = {
  filled: 'filled',
  elevated: 'elevated',
  outlined: 'outlined',
  text: 'text',
  tonal: 'tonal',
  fab: 'fab',
  icon: 'icon',
} as const

export type VariantType = (typeof VARIANT)[keyof typeof VARIANT]

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}
