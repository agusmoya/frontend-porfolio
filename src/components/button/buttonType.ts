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
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}
