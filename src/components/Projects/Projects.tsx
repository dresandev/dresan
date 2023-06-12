import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.css'

// TODO: Add projects from contentful

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <ProjectCard />
      <ProjectCard />
    </section>
  )
}
