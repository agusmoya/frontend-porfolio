import { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import { useTranslation } from '../../i18n/LanguageContext'

import { CardProject } from '../../components/card/Card'

import styles from './Projects.module.css'

export const Projects = () => {
  const { t, translations } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects = translations.projects.items

  // Detect scroll to update active indicator
  const handleScroll = () => {
    if (!carouselRef.current) return
    const scrollLeft = carouselRef.current.scrollLeft
    const itemWidth = carouselRef.current.offsetWidth
    const newIndex = Math.round(scrollLeft / itemWidth)
    setActiveIndex(newIndex)
  }

  // Scroll to a specific project
  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return
    const itemWidth = carouselRef.current.offsetWidth
    carouselRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth',
    })
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && activeIndex > 0) {
      scrollToSlide(activeIndex - 1)
    } else if (e.key === 'ArrowRight' && activeIndex < projects.length - 1) {
      scrollToSlide(activeIndex + 1)
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    carousel.addEventListener('scroll', handleScroll)
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className={`container ${styles.projectsContainer}`}>
        <h2 className={`section-title ${styles.title}`}>{t('projects.title')}</h2>
        <div
          ref={carouselRef}
          className={styles.carousel}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Projects carousel"
        >
          {projects.map((p, index) => {
            return (
              <div key={p.id} className={styles.carouselItem}>
                <CardProject
                  key={p.id}
                  index={index}
                  title={p.title}
                  description={p.description}
                  image={p.image}
                  tags={p.tags}
                  demoUrl={p.demoUrl}
                  repoBackendUrl={p.repoBackendUrl}
                  repoFrontendUrl={p.repoFrontendUrl}
                />
              </div>
            )
          })}
        </div>

        <div className={styles.indicators} aria-hidden="true">
          {projects.map((_, index) => (
            <span
              key={index}
              className={clsx(
                styles.indicator,
                index === activeIndex && styles.indicatorActive
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
