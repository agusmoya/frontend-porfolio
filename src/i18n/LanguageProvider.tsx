import { useEffect, useState, type ReactNode } from 'react'

import { LanguageContext } from './LanguageContext'

import type { Language } from '../types/laguage'

import { es } from './translations/es'
import { en } from './translations/en'

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    if (saved === 'en' || saved === 'es') return saved

    const browserLang = navigator.language.split('-')[0]
    return browserLang === 'es' ? 'es' : 'en'
  })

  const translations = language === 'es' ? es : en

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.setAttribute('lang', language)
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
