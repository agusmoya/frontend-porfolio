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
