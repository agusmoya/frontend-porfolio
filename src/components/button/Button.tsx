import clsx from 'clsx'

import { VARIANT, type ButtonProps } from './buttonType'

import styles from './Button.module.css'

export const Button = ({
  variant = VARIANT.filled,
  size = 'md',
  type = 'button',
  children,
  className,
  ...props
}: ButtonProps) => {
  const classNames = clsx(styles.btn, styles[size], styles[variant], className)

  return (
    <button type={type} className={classNames} {...props}>
      <span className={styles.content}>{children}</span>
    </button>
  )
}
