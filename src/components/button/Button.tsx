import clsx from 'clsx'

import { VARIANT, type ButtonProps } from './buttonType'

import styles from './Button.module.css'

export const Button = ({
  variant = VARIANT.filled,
  size = 'md',
  type = 'button',
  disabled = false,
  loading = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  const classNames = clsx(
    styles.btn,
    styles[`btn--${size}`],
    styles[`btn--${variant}`],
    (disabled || loading) && styles['btn--disabled'],
    className
  )

  return (
    <button type={type} className={classNames} disabled={disabled} {...props}>
      <span className={styles.btn__content}>{children}</span>
    </button>
  )
}
