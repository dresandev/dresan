import Image from 'next/image'
import { Project } from '@interfaces'
import { IconButton, Tags } from '@components'
import { OctocatIcon, LinkIcon } from '@components/Icons'
import styles from './styles.module.css'

interface ProjectCardProps extends Project { }

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tags,
  sourceCode,
  liveDemo
}) => {
  return (
    <article className={styles.card}>
      <h2 className='sr-only'>Proyectos</h2>
      <Image
        className={styles.cardImage}
        src={image}
        alt='Project image'
        priority={true}
      />
      <h3>{title}</h3>
      <p>{description}</p>

      <footer className={styles.cardFooter}>
        <Tags tags={tags} />

        <div className={styles.links}>
          <IconButton
            href={sourceCode}
            target='_blank'
            title='Ver Codigo'
          >
            <OctocatIcon />
          </IconButton>

          <IconButton
            href={liveDemo}
            target='_blank'
            title='Visitar web'
          >
            <LinkIcon />
          </IconButton>
        </div>
      </footer>
    </article>
  )
}
