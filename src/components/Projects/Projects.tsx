import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  )
}
