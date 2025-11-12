import { useTranslation } from '../../i18n/LanguageContext'

import { LinkedInIcon, GmailIcon, ExternalLinkIcon } from '../icons/Icons'

import styles from './Footer.module.css'

export const Footer = () => {
  const { t } = useTranslation()

  const LINKS = [
    {
      href: 'https://www.linkedin.com/in/agustin-moya-natt',
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      ariaLabel: 'Connect on LinkedIn',
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
      <p className={styles.footerContact}>{t('footer.contact')}</p>
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
