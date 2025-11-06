import { useTranslation } from '../../i18n/LanguageContext'
import styles from './Footer.module.css'
import { LinkedInIcon, WhatsappIcon, GmailIcon, ExternalLinkIcon } from '../icons/Icons'

export const Footer = () => {
  const { t } = useTranslation()

  const LINKS = [
    {
      href: 'https://www.linkedin.com/in/agusmoya/',
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      ariaLabel: 'Connect on LinkedIn',
    },
    {
      href: 'https://wa.me/5491122334455',
      icon: <WhatsappIcon />,
      label: 'WhatsApp',
      ariaLabel: 'Chat on WhatsApp',
    },
    {
      href: 'mailto:develop.services.natt@gmail.com',
      icon: <GmailIcon />,
      label: 'Gmail',
      ariaLabel: 'Send an email',
    },
  ]

  return (
    <footer className={styles.footer}>
      <p>{t('footer.contact')}</p>
      <div className={styles.footerContainer}>
        <nav className={styles.footerLinks} aria-label="Social media links">
          {LINKS.map(({ href, icon, label, ariaLabel }) => (
            <a
              key={href}
              className={styles.footerLink}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
            >
              {icon}
              <span>{label}</span>
              <ExternalLinkIcon className={styles.footerExternalLink} size={15} />
            </a>
          ))}
        </nav>
      </div>
      <p className={styles.footerText}>&copy; {t('footer.creator')}</p>
    </footer>
  )
}
