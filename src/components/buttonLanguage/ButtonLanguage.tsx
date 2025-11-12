import { useTranslation } from '../../i18n/LanguageContext'
import { Button } from '../button/Button'
import { LanguageIcon } from '../icons/Icons'

import styles from './ButtonLanguage.module.css'

export const ButtonLanguage = () => {
  const { language, setLanguage } = useTranslation()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <Button
      size="md"
      className={styles.languageBtn}
      variant="outlined"
      onClick={toggleLanguage}
      aria-label="Change language"
    >
      <LanguageIcon />
      <span>{language === 'en' ? 'ES' : 'EN'}</span>
    </Button>
  )
}
