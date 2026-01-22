import Typewriter from 'typewriter-effect'

import { ButtonLink } from '../../components/link/Link'
import { VARIANT } from '../../components/button/buttonType'
import { AnimatedBlobs } from '../../components/background-effects/AnimatedBlobs'
import { FloatingShapes } from '../../components/background-effects/FloatingShapes'
import { ButtonUp } from '../../components/buttonUp/ButtonUp'
import { ExternalLinkIcon } from '../../components/icons/Icons'

import { useTranslation } from '../../i18n/LanguageContext'

import styles from './Hero.module.css'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className={`${styles.heroSection}`}>
      <div className={styles.blobsContainer}>
        <AnimatedBlobs
          blur={8}
          speed={10}
          blobs={[
            {
              x: '60vw',
              y: '58vh',
              width: 'clamp(120px, 16vw, 240px)',
              height: 'clamp(90px, 12vw, 175px)',
              direction: 'right',
            },
            {
              x: '20vw',
              y: '40vh',
              width: 'clamp(90px, 15vw, 200px)',
              height: 'clamp(90px, 15vw, 200px)',
              direction: 'left',
            },
            {
              x: '65vw',
              y: '30vh',
              width: 'clamp(95px, 13vw, 190px)',
              height: 'clamp(45px, 6vw, 90px)',
              direction: 'left',
            },
          ]}
        />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <h1 className={`section-title ${styles.titleHero}`}>
          <span>{t('hero.title')}</span>
          <span className={styles.titleName}>{t('user.name')}</span>
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
            variant={VARIANT.outlined}
            size="lg"
            href="#about"
            aria-label={t('hero.about')}
          >
            {t('hero.about')}
          </ButtonLink>
          <ButtonLink
            variant={VARIANT.tonal}
            size="lg"
            href="/CV-Agustin-Moya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('hero.viewCV')}
          >
            {t('hero.viewCV')}
            <ExternalLinkIcon size={18} />
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
        blur={15}
        opacity={0.3}
      />

      <ButtonUp />
    </section>
  )
}
