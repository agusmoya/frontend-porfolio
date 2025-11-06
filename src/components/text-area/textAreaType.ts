export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
  id?: string
  value?: string
  placeholder?: string
  error?: string | null
  touched?: boolean
  hint?: string
  disabled?: boolean
  required?: boolean
  rows?: number
  cols?: number
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
}
