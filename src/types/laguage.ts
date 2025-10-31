import { en } from '../i18n/translations/en'
import { es } from '../i18n/translations/es'

export type Language = 'en' | 'es'

export type Translations = typeof en | typeof es

export type TranslationValue = Record<string, object> | string

export interface LanguageContextType {
  language: Language
  translations: Translations
  setLanguage: (lang: Language) => void
}
