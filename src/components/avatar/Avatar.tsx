import clsx from 'clsx'

import styles from './Avatar.module.css'

interface AvatarProps {
  src?: string
  alt: string
  size?: 'small' | 'medium' | 'large'
}

export const Avatar = ({ src, alt, size = 'large' }: AvatarProps) => {
  return (
    <div className={clsx(styles.avatar, styles[size])}>
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <span className={styles.placeholder}>{alt.charAt(0)}</span>
      )}
    </div>
  )
}
