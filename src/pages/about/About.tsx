import avatarImage from '../../assets/avatar.webp'

import { useTranslation } from '../../i18n/LanguageContext'
import { Avatar } from '../../components/avatar/Avatar'
import { KnowledgeToggle } from '../../components/knowledgeToggle/KnowledgeToggle'
import { Skills } from '../../components/skills/Skills'
import { FloatingShapes } from '../../components/background-effects/FloatingShapes'

import styles from './About.module.css'

export const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.profile}>
          <div className={styles.avatarContainer}>
            <Avatar src={avatarImage} alt="Agustín Moya" size="large" />
          </div>
          <div className={styles.description}>
            <h2 className={`section-title ${styles.title}`}>{t('about.title')}</h2>
            <p className={styles.presentation}>{t('about.presentation.p1')}</p>
            <p className={styles.presentation}>{t('about.presentation.p2')}</p>
          </div>
        </div>
        <KnowledgeToggle />
        <Skills />
      </div>

      <FloatingShapes
        shapes={[
          {
            cx: 0,
            cy: 700,
            r: 90,
            color: 'var(--color-primary)',
            duration: 10,
            yOffset: 40,
          },
          {
            cx: 1200,
            cy: 200,
            r: 110,
            color: 'var(--color-secondary)',
            duration: 9,
            yOffset: 50,
          },
          {
            cx: 300,
            cy: 200,
            r: 50,
            color: 'var(--color-tertiary)',
            duration: 7,
            yOffset: 50,
          },
        ]}
        blur={20}
        opacity={0.3}
      />
    </section>
  )
}
