export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur'> {
  name: string
  label: string
  id?: string
  hint?: string
  error?: string | null
  touched?: boolean
  withFeedback?: boolean
  initialStateIcon?: React.ElementType | null
  finalStateIcon?: React.ElementType | null
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}
