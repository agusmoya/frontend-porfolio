import Typewriter from 'typewriter-effect'

import { ButtonLink } from '../../components/link/Link'
import { useTranslation } from '../../i18n/LanguageContext'

import styles from './Hero.module.css'
import { VARIANT } from '../../components/button/buttonType'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="section">
      <div className={`container ${styles.hero}`}>
        <div className={styles.blobAnimateA}></div>
        <div className={styles.blobAnimateB}></div>
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <h2 className={styles.subtitle}>
          <Typewriter
            options={{
              strings: [
                t('hero.subtitleTypewriter.opt1'),
                t('hero.subtitleTypewriter.opt2'),
                t('hero.subtitleTypewriter.opt3'),
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h2>
        <p className={styles.description}>{t('hero.description')}</p>
        <div className={styles.ctaContainer}>
          <ButtonLink
            href="#projects"
            variant={VARIANT.elevated}
            aria-label={t('hero.cta')}
          >
            {t('hero.cta')}
          </ButtonLink>
          <ButtonLink
            href="#contact"
            variant={VARIANT.outlined}
            aria-label={t('hero.contact')}
          >
            {t('hero.contact')}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
