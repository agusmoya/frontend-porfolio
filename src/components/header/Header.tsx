import { useEffect, useMemo, useState } from 'react'

import clsx from 'clsx'

import { useTranslation } from '../../i18n/LanguageContext'

import { CloseIcon, MenuIcon } from '../icons/Icons'
import { ThemeToggle } from '../themeToggle/ThemeToggle'
import { Button } from '../button/Button'
import { LanguageToggle } from '../languageToggle/LanguageToggle'

import styles from './Header.module.css'

export const Header = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const MENU__ITEMS = useMemo(
    () => [
      { label: t('header.about'), href: '#about' },
      { label: t('header.projects'), href: '#projects' },
      { label: t('header.contact'), href: '#contact' },
    ],
    [t]
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
    <header className={clsx(styles.header, isScrolled && styles.headerScrolled)}>
      <div className={clsx('container', styles.headerContainer)}>
        <div className={styles.logoContainer}>
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
          <a href="#">
            <p className={styles.logo}>AM</p>
          </a>
        </div>
        <nav className={clsx(styles.headerNav, isMenuOpen && styles.headerNavOpen)}>
          {MENU__ITEMS.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.headerExtras}>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
