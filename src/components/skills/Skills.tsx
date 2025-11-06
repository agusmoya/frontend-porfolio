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
      <h3 className={styles.skillsTitle}>{t('about.skills')}</h3>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <Badge key={skill.name} variant="filled" icon={skill.icon}>
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
