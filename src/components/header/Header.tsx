import { useEffect, useState } from 'react'

import clsx from 'clsx'

import { CloseIcon, MenuIcon } from '../Icons/Icons'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { Button } from '../button/Button'

import styles from './Header.module.css'

const MENU__ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={clsx(styles.header, isScrolled && styles.headerScrolled)}
    >
      <div className={clsx('container', styles.headerContainer)}>
        <Button
          className={`${styles.headerMenuButton}`}
          variant="icon"
          onClick={toggleMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.iconContainer}>
            <MenuIcon className={styles.menuIcon} />
            <CloseIcon className={styles.closeIcon} />
          </span>
        </Button>
        <nav
          className={clsx(styles.headerNav, isMenuOpen && styles.headerNavOpen)}
        >
          {MENU__ITEMS.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
