import { useTranslation } from '../../i18n/LanguageContext'

import { CardProject } from '../../components/card/Card'

import styles from './Projects.module.css'

export const Projects = () => {
  const { t, translations } = useTranslation()

  const projects = translations.projects.items

  return (
    <section id="projects" className="section projectsSection">
      <div className={`container ${styles.projectsContainer}`}>
        <h2 className={styles.title}>{t('projects.title')}</h2>
        <div className={styles.projectsList}>
          {projects.map(
            (
              {
                title,
                description,
                image,
                tags,
                demoUrl,
                repoBackendUrl,
                repoFrontendUrl,
              },
              index
            ) => {
              return (
                <CardProject
                  key={index}
                  index={index}
                  title={title}
                  description={description}
                  image={image}
                  tags={tags}
                  demoUrl={demoUrl}
                  repoBackendUrl={repoBackendUrl}
                  repoFrontendUrl={repoFrontendUrl}
                />
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}
