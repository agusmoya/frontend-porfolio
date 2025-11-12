import { useRef, useState } from 'react'

import emailjs from '@emailjs/browser'

import { useTranslation } from '../../i18n/LanguageContext'
import { getEnvVariables } from '../../helpers/getEnvVariables'

import { Tooltip } from '../../components/tooltip/Tooltip'
import { Input } from '../../components/input/Input'
import { Button } from '../../components/button/Button'
import { Textarea } from '../../components/text-area/Textarea'
import { ErrorIcon, CheckIcon, CopyIcon } from '../../components/icons/Icons'
import { FloatingShapes } from '../../components/background-effects/FloatingShapes'

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
  const [copyEmail, setCopyEmail] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t('contact.emailAddress'))
    setCopyEmail(true)
    setTimeout(() => {
      setCopyEmail(false)
    }, 2000)
  }

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
    <section id="contact" className={`section ${styles.contactSection}`}>
      <FloatingShapes
        shapes={[
          {
            cx: 1100,
            cy: 700,
            r: 120,
            color: 'var(--color-primary)',
            duration: 9,
            yOffset: 50,
          },
          {
            cx: 300,
            cy: 100,
            r: 50,
            color: 'var(--color-tertiary)',
            duration: 7,
            yOffset: 50,
          },
        ]}
        blur={20}
        opacity={0.5}
      />
      <div className={`container ${styles.contactContainer}`}>
        <h2 className={styles.title}>{t('contact.title')}</h2>
        <p className={styles.description}>{t('contact.description')}</p>
        <div className={styles.contactContent}>
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

            <Button type="submit" variant="outlined" loading={isLoading}>
              {isLoading ? t('contact.sending') : t('contact.send')}
            </Button>
          </form>

          <hr className={`${styles.contactDivider}`} />

          <div className={styles.contactEmailAddress}>
            <p className={styles.contactOptionEmail}>{t('contact.contactOptionEmail')}</p>
            <div className={styles.contactCopyEmail}>
              <span>{t('contact.emailAddress')}</span>
              <Tooltip content={copyEmail ? 'Copied!' : 'Copy'} position="right">
                <Button
                  className={styles.copyEmailBtn}
                  variant="icon"
                  onClick={() => {
                    handleCopyEmail()
                  }}
                  aria-label="Copy email address"
                >
                  {copyEmail ? (
                    <CheckIcon className={styles.iconCopyEmailAction} size={20} />
                  ) : (
                    <CopyIcon className={styles.iconCopyEmailAction} size={20} />
                  )}
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
