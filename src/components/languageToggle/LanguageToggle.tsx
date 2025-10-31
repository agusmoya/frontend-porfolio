import { useTranslation } from '../../i18n/LanguageContext'
import { Button } from '../button/Button'
import { LanguageIcon } from '../icons/Icons'

import styles from './LanguageToggle.module.css'

export const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <Button
      className={styles.toggle}
      variant="text"
      onClick={toggleLanguage}
      aria-label="Change language"
    >
      <div className={styles.iconWrapper}>
        <LanguageIcon />
        <span>{language === 'en' ? 'ES' : 'EN'}</span>
      </div>
    </Button>
  )
}
