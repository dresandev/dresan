import { projects } from '@data'
import { ProjectCard } from './ProjectCard'
import styles from './styles.module.css'

export const Projects = () => {
  return (
    <section className={styles.projects}>
      {
        projects.map(project => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))
      }
    </section>
  )
}
