import Image from 'next/image'
import { IconLink, Tags } from '@components'
import { OctocatIcon, LinkIcon } from '@components/Icons'
import projectImage from '@assets/project.png'
import styles from './Projects.module.css'

// TODO: implement data from props
const tags = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']

export const ProjectCard = () => {
  return (
    <article className={styles.card}>
      <h2 className='sr-only'>Proyectos</h2>
      <Image
        className={styles.cardImage}
        src={projectImage}
        alt='Project image'
      />
      <h3>BurgerShop</h3>
      <p>
        Web para mostrar la carta de restaurante, enfocado en UX reflejando la experiencia que los productos y servicios de companyName brindan
      </p>

      <footer className={styles.cardFooter}>
        <Tags tags={tags} />

        <div className={styles.links}>
          <IconLink
            href='#'
            target='_blank'
            title='Ver Codigo'
          >
            <OctocatIcon />
          </IconLink>

          <IconLink
            href='#'
            target='_blank'
            title='Visitar web'
          >
            <LinkIcon />
          </IconLink>
        </div>
      </footer>
    </article>
  )
}
