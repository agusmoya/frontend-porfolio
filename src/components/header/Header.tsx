import { useEffect, useMemo, useState } from 'react'

import clsx from 'clsx'

import { useTranslation } from '../../i18n/LanguageContext'

import { Button } from '../button/Button'
import { ButtonLink } from '../link/Link'
import { ButtonLanguage } from '../buttonLanguage/ButtonLanguage'
import { ButtonTheme } from '../buttonTheme/ButtonTheme'
import { AMLogo, CloseIcon, MenuIcon } from '../icons/Icons'

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
          <ButtonLink
            size="md"
            variant="text"
            href="#"
            className={styles.logoLink}
            aria-label="Go to home"
          >
            <AMLogo width={150} height={52} />
          </ButtonLink>
        </div>
        <nav className={clsx(styles.headerNav, isMenuOpen && styles.headerNavOpen)}>
          {MENU__ITEMS.map((item) => (
            <ButtonLink
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={styles.headerNavLink}
            >
              {item.label}
            </ButtonLink>
          ))}
        </nav>
        <div className={styles.headerExtras}>
          <ButtonLanguage />
          <ButtonTheme />
        </div>
      </div>
    </header>
  )
}
