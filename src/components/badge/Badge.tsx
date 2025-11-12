import clsx from 'clsx'

import styles from './Badge.module.css'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'filled' | 'outlined' | 'outlined-dashed'
  icon?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export const Badge = ({
  children,
  variant = 'filled',
  icon,
  style,
  className,
}: BadgeProps) => {
  return (
    <span className={clsx(styles.badge, styles[variant], className)} style={style}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  )
}
