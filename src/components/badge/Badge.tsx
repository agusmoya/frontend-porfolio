import clsx from 'clsx'

import styles from './Badge.module.css'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'filled' | 'outlined'
  icon?: React.ReactNode
}

export const Badge = ({ children, variant = 'filled', icon }: BadgeProps) => {
  return (
    <span className={clsx(styles.badge, styles[variant])}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  )
}
