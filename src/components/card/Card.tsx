import { useState } from 'react'

import { useTranslation } from '../../i18n/LanguageContext'

import { Badge } from '../badge/Badge'
import { ExternalLinkIcon, GitHubIcon } from '../icons/Icons'

import styles from './Card.module.css'

interface CardProjectProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  repoBackendUrl?: string
  repoFrontendUrl?: string
  index: number
}

export const CardProject = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoBackendUrl,
  repoFrontendUrl,
  index,
}: CardProjectProps) => {
  const { t } = useTranslation()
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <article
      className={styles.card}
      style={{
        animationDelay: `${index * 60}ms`,
      }}
    >
      <div className={styles.cardImage}>
        {!imageError && image ? (
          <img src={image} alt={title} onError={handleImageError} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderText}>{title}</span>
          </div>
        )}

        <div className={styles.cardOverlay}>
          <div className={styles.overlayButtons}>
            {demoUrl && (
              <a
                className={styles.overlayButton}
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLinkIcon />
                <span>{t('projects.viewDemo')}</span>
              </a>
            )}
            {repoBackendUrl && (
              <a
                className={styles.overlayButton}
                href={repoBackendUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                <span>{t('projects.viewCodeBackend')}</span>
              </a>
            )}
            {repoFrontendUrl && (
              <a
                className={styles.overlayButton}
                href={repoFrontendUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                <span>{t('projects.viewCodeFrontend')}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardTags}>
          {tags.map((tag) => (
            <Badge key={tag} variant="outlined">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
