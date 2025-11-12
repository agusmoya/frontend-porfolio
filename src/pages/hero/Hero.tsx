import Typewriter from 'typewriter-effect'

import { ButtonLink } from '../../components/link/Link'
import { VARIANT } from '../../components/button/buttonType'
import { AnimatedBlobs } from '../../components/background-effects/AnimatedBlobs'
import { FloatingShapes } from '../../components/background-effects/FloatingShapes'
import { ButtonUp } from '../../components/buttonUp/ButtonUp'

import { useTranslation } from '../../i18n/LanguageContext'

import styles from './Hero.module.css'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className={`${styles.heroSection}`}>
      <div className={styles.blobsContainer}>
        <AnimatedBlobs blur={10} speed={8} />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <h1 className={`section-title ${styles.titleHero}`}>
          {t('hero.title')} <span className={styles.titleName}>{t('user.name')}</span>
        </h1>
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
            className={styles.projectsLink}
            size="md"
            href="#projects"
            variant={VARIANT.elevated}
            aria-label={t('hero.projects')}
          >
            {t('hero.projects')}
          </ButtonLink>
          <ButtonLink
            className={styles.contactLink}
            size="md"
            href="#contact"
            variant={VARIANT.outlined}
            aria-label={t('hero.contact')}
          >
            {t('hero.contact')}
          </ButtonLink>
        </div>
      </div>

      <FloatingShapes
        shapes={[
          {
            cx: 200,
            cy: 150,
            r: 100,
            color: 'var(--color-primary)',
            duration: 6,
            yOffset: 30,
          },
          {
            cx: 1200,
            cy: 600,
            r: 100,
            color: 'var(--color-secondary)',
            duration: 8,
            yOffset: 30,
          },
          {
            cx: 1100,
            cy: 200,
            r: 80,
            color: 'var(--color-tertiary)',
            duration: 6,
            yOffset: 50,
          },
        ]}
        blur={10}
        opacity={0.2}
      />

      <ButtonUp />
    </section>
  )
}
