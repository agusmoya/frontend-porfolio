import { useRef, useState } from 'react'

import emailjs from '@emailjs/browser'

import { useTranslation } from '../../i18n/LanguageContext'
import { getEnvVariables } from '../../helpers/getEnvVariables'

import { Input } from '../../components/input/Input'
import { Button } from '../../components/button/Button'
import { Textarea } from '../../components/text-area/Textarea'
import { ErrorIcon, CheckIcon } from '../../components/icons/Icons'

import styles from './Contact.module.css'

export const Contact = () => {
  const {
    DEV,
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY,
  } = getEnvVariables()
  const { t } = useTranslation()
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')

    try {
      await emailjs.sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      if (DEV) console.error('❌ Error al enviar email:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="section contactSection">
      <div className={`container ${styles.contactContainer}`}>
        <h2 className={styles.title}>{t('contact.title')}</h2>
        <p className={styles.description}>{t('contact.description')}</p>
        <div className="contactContent">
          <form ref={formRef} className={`${styles.contactForm}`} onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              label={t('contact.name')}
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <Input
              name="email"
              type="email"
              label={t('contact.email')}
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <Textarea
              id="message"
              label={t('contact.message')}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
            />

            {status === 'success' && (
              <p className={styles.sendEmailResultContent}>
                <CheckIcon className={styles.sendEmailSuccessIcon} />
                <span className={styles.sendEmailSuccessText}>
                  {t('contact.success')}
                </span>
              </p>
            )}

            {status === 'error' && (
              <p className={styles.sendEmailResultContent}>
                <ErrorIcon className={styles.sendEmailErrorIcon} />
                <span className={styles.sendEmailErrorText}>{t('contact.error')}</span>
              </p>
            )}

            <Button type="submit" loading={isLoading}>
              {isLoading ? t('contact.sending') : t('contact.send')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
