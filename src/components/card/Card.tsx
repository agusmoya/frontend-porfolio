import { useEffect, useRef, useState } from 'react'

import { useTranslation } from '../../i18n/LanguageContext'

import { Badge } from '../badge/Badge'
import { ExternalLinkIcon, GitHubIcon, MoreOptionsIcon } from '../icons/Icons'
import { Button } from '../button/Button'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

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
        <header className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{title}</h3>

          <Button
            variant="icon"
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-label="Project options menu"
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
          >
            <MoreOptionsIcon />
          </Button>

          {isMenuOpen && (
            <div ref={menuRef} className={styles.dropdownMenu}>
              {demoUrl && (
                <a
                  className={styles.menuItem}
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  <ExternalLinkIcon />
                  <span>{t('projects.viewDemo')}</span>
                </a>
              )}
              {repoBackendUrl && (
                <a
                  className={styles.menuItem}
                  href={repoBackendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  <GitHubIcon />
                  <span>{t('projects.viewCodeBackend')}</span>
                </a>
              )}
              {repoFrontendUrl && (
                <a
                  className={styles.menuItem}
                  href={repoFrontendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  <GitHubIcon />
                  <span>{t('projects.viewCodeFrontend')}</span>
                </a>
              )}
            </div>
          )}
        </header>

        <div className={styles.cardDescription}>{description}</div>

        <footer className={styles.footer}>
          {tags.map((tag) => (
            <Badge key={tag} variant="outlined">
              {tag}
            </Badge>
          ))}
        </footer>
      </div>
    </article>
  )
}
