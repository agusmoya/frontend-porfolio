import clsx from 'clsx'

import type { ButtonLinkProps } from './linkType'

import { VARIANT } from '../button/buttonType'

import styles from '../button/Button.module.css'

export const ButtonLink = ({
  href,
  variant = VARIANT.text,
  disabled = false,
  children,
  className,
  external,
  ...props
}: ButtonLinkProps) => {
  const classNames = clsx(
    styles.btn,
    styles[`btn--${variant}`],
    disabled && styles['btn--disabled'],
    className
  )

  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault()
    }
  }

  return (
    <a
      href={disabled ? undefined : href}
      className={classNames}
      aria-disabled={disabled}
      onClick={handleClick}
      tabIndex={disabled ? -1 : undefined}
      {...externalProps}
      {...props}
    >
      <span className={styles.btn__content}>{children}</span>
    </a>
  )
}
