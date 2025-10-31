import React from 'react'

import clsx from 'clsx'

import { VARIANT, type VariantType } from '../../types/button'

import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType
  disabled?: boolean
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({
  variant = VARIANT.filled,
  type = 'button',
  disabled = false,
  children,
  className,
  ...props
}) => {
  const classNames = clsx(
    styles.btn,
    styles[`btn--${variant}`],
    disabled && styles['btn--disabled'],
    className
  )

  return (
    <button type={type} className={classNames} disabled={disabled} {...props}>
      <span className={styles.btn__content}>{children}</span>
    </button>
  )
}
