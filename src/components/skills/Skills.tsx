import { useTranslation } from '../../i18n/LanguageContext'
import { Badge } from '../badge/Badge'
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
} from '../icons/Icons'

import styles from './Skills.module.css'

export const Skills = () => {
  const { t } = useTranslation()
  const skills = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'TypeScript', icon: <TypeScriptIcon /> },
    { name: 'HTML5', icon: <Html5Icon /> },
    { name: 'CSS', icon: <CssIcon /> },
    { name: 'Material Design', icon: <MaterialDesignIcon /> },
    { name: 'Accessibility', icon: <AccessibilityIcon /> },
    { name: 'Git', icon: <GitIcon /> },
    { name: 'Vite', icon: <ViteIcon /> },
    { name: 'Storybook', icon: <StorybookIcon /> },
  ]

  return (
    <div className={styles.skills}>
      <h3 className={`section-subtitle ${styles.skillsTitle}`}>
        {t('about.technologies')}
      </h3>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <Badge
            className={styles.skillBadge}
            style={{ animationDelay: `${index * 0.1}s` }}
            key={skill.name}
            variant="outlined-dashed"
            icon={skill.icon}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
