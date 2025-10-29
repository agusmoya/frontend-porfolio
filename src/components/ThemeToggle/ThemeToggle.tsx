import clsx from 'clsx'
import { useTheme } from '../../hooks/useTheme'
import { Button } from '../button/Button'
import { MoonIcon, SunIcon } from '../Icons/Icons'

import styles from './ThemeToggle.module.css'

const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="icon"
      id="button-theme"
      className={styles.buttonTheme}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span
        className={clsx(
          styles.buttonThemeIcon,
          theme === THEME.LIGHT && styles.buttonThemeIconLight,
          theme === THEME.DARK && styles.buttonThemeIconDark
        )}
      >
        {theme === THEME.LIGHT ? <MoonIcon /> : <SunIcon />}
      </span>
    </Button>
  )
}
