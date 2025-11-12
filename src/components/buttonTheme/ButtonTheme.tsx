import clsx from 'clsx'

import { useTheme } from '../../hooks/useTheme'

import { Button } from '../button/Button'
import { MoonIcon, SunIcon } from '../icons/Icons'

import styles from './ButtonTheme.module.css'

const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export const ButtonTheme = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="icon"
      id="button-theme"
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
