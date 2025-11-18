import { useEffect, useState } from 'react'

import clsx from 'clsx'

import { UpIcon } from '../icons/Icons'
import { ButtonLink } from '../link/Link'

import styles from './ButtonUp.module.css'

export const ButtonUp = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ButtonLink
      href="#"
      size="lg"
      variant="fab"
      className={clsx(styles.btnUp, isScrolled && styles.scrolled)}
      aria-label="Go to hero section"
    >
      <UpIcon />
    </ButtonLink>
  )
}
