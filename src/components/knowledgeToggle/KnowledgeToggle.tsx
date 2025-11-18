import { useState } from 'react'

import clsx from 'clsx'

import { useTranslation } from '../../i18n/LanguageContext'

import { Button } from '../../components/button/Button'

import styles from './KnowledgeToggle.module.css'

type KnowledgeItem = {
  title: string
  company?: string
  institution?: string
  period: string
  description: string
}

export const KnowledgeToggle = () => {
  const { t, translations } = useTranslation()
  const [activeKnowledge, setActiveKnowledge] = useState<'experience' | 'education'>(
    'experience'
  )
  const [isAnimating, setIsAnimating] = useState(false)

  const knowledgeData = {
    experience: (translations.about.experience || []) as KnowledgeItem[],
    education: (translations.about.education || []) as KnowledgeItem[],
  }

  const handleClickActive = (type: 'experience' | 'education') => {
    if (type === activeKnowledge) return
    setIsAnimating(true)
    setActiveKnowledge(type)
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <div className={styles.knowledge}>
      <h3 className={`section-subtitle ${styles.knowledgeTitle}`}>
        {t('about.knowledgeTitle')}
      </h3>
      <div className={clsx(styles.knowledgeToggle)} role="tablist" aria-label="Knowledge sections">
        <Button
          className={clsx(activeKnowledge === 'experience' && styles.activeTab)}
          role="tab"
          aria-selected={activeKnowledge === 'experience'}
          aria-controls="tabpanel-experience"
          id="tab-experience"
          tabIndex={activeKnowledge === 'experience' ? 0 : -1}
          onClick={() => handleClickActive('experience')}
          variant="text"
        >
          {t('about.knowledgeExperience')}
        </Button>
        <span className={styles.separator} aria-hidden="true">
          |
        </span>
        <Button
          className={clsx(activeKnowledge === 'education' && styles.activeTab)}
          role="tab"
          aria-selected={activeKnowledge === 'education'}
          aria-controls="tabpanel-education"
          id="tab-education"
          tabIndex={activeKnowledge === 'education' ? 0 : -1}
          onClick={() => handleClickActive('education')}
          variant="text"
        >
          {t('about.knowledgeEducation')}
        </Button>
      </div>
      <div
        className={styles.knowledgeContainer}
        role="tabpanel"
        id={`tabpanel-${activeKnowledge}`}
        aria-labelledby={`tab-${activeKnowledge}`}
      >
        <ul
          className={clsx(styles.knowledgeItemsTimeline, isAnimating && styles.animating)}
        >
          {knowledgeData[activeKnowledge].map((item, index) => (
            <li key={index} className={styles.knowledgeItem}>
              <span className={clsx(styles.knowledgeItemMarker)}></span>
              <div className={styles.knowledgeItemContent}>
                <p className={styles.knowledgeItemPeriod}>{item.period}</p>
                <h4 className={styles.knowledgeItemTitle}>{item.title}</h4>
                <p className={styles.knowledgeItemMeta}>
                  {item.company || item.institution}
                </p>
                <p className={styles.knowledgeItemDescription}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
