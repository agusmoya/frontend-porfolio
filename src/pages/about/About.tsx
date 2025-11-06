import avatarImage from '../../assets/avatar.webp'

import { useTranslation } from '../../i18n/LanguageContext'
import { Avatar } from '../../components/avatar/Avatar'
import { KnowledgeToggle } from '../../components/knowledgeToggle/KnowledgeToggle'
import { Skills } from '../../components/skills/Skills'

import styles from './About.module.css'

export const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="section aboutSection">
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.description}>
          <div className={styles.avatarContainer}>
            <Avatar src={avatarImage} alt="Agustín Moya" size="large" />
          </div>
          <div>
            <h2 className={styles.title}>{t('about.title')}</h2>
            <p className={styles.presentation}>{t('about.presentation')}</p>
          </div>
        </div>
        <KnowledgeToggle />
        <Skills />
      </div>
    </section>
  )
}
