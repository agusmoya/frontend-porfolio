import avatarImage from '../../assets/avatar.webp'

import { useTranslation } from '../../i18n/LanguageContext'
import { Avatar } from '../../components/avatar/Avatar'
import { Badge } from '../../components/badge/Badge'

import styles from './About.module.css'
import {
  AccessibilityIcon,
  CssIcon,
  GitIcon,
  Html5Icon,
  MaterialDesignIcon,
  ReactIcon,
  StorybookIcon,
  TypeScriptIcon,
  ViteIcon,
} from '../../components/icons/Icons'

export const About = () => {
  const { t } = useTranslation()

  const skills = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'TypeScript', icon: <TypeScriptIcon /> },
    { name: 'HTML5', icon: <Html5Icon /> },
    { name: 'CSS', icon: <CssIcon /> },
    { name: 'Storybook', icon: <StorybookIcon /> },
    { name: 'Material Design', icon: <MaterialDesignIcon /> },
    { name: 'Accessibility', icon: <AccessibilityIcon /> },
    { name: 'Git', icon: <GitIcon /> },
    { name: 'Vite', icon: <ViteIcon /> },
  ]

  return (
    <section id="about" className="section aboutSection">
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.details}>
          <div className={styles.avatarContainer}>
            <Avatar src={avatarImage} alt="Agustín Moya" size="large" />
          </div>
          <div>
            <h2 className={styles.title}>{t('about.title')}</h2>
            <p className={styles.description}>{t('about.description')}</p>
          </div>
        </div>
        <div className={styles.skills}>
          <h3 className={styles.skillsTitle}>{t('about.skills')}</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <Badge key={skill.name} variant="filled" icon={skill.icon}>
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
