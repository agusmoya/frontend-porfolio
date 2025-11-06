import { createContext, useCallback, useContext } from 'react'

import type { LanguageContextType, TranslationValue } from '../types/laguage'

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useTranslation = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider')
  }

  const { language, translations, setLanguage } = context

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.')
      let value = translations as TranslationValue

      for (const k of keys) {
        if (typeof value === 'object' && value !== null) {
          value = (value as Record<string, TranslationValue>)[k]
        } else {
          return key
        }
      }

      return typeof value === 'string' ? value : key
    },
    [translations]
  )

  return { t, language, translations, setLanguage }
}
