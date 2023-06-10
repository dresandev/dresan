import Image from 'next/image'

import { OctocatIcon, LinkIcon } from '@components/Icons'
import { Tag } from '@components/Tag'
import { IconLink } from '@components/IconLink'
import projectImage from '@assets/project.png'
import styles from './Projects.module.css'

export const ProjectCard = () => {
  return (
    <article className={styles.card}>
      <h2 className='sr-only'>Proyectos</h2>
      <Image src={projectImage} alt='Project image' />
      <h3>BurgerShop</h3>
      <p>
        Web para mostrar la carta de restaurante, enfocado en UX reflejando la experiencia que los productos y servicios de companyName brindan
      </p>

      <footer className={styles.cardFooter}>
        <div className={styles.tags}>
          <Tag>React</Tag>
          <Tag>Next.js</Tag>
          <Tag>Css modules</Tag>
          <Tag>Css modules</Tag>
        </div>

        <div className={styles.links}>
          <IconLink>
            <OctocatIcon />
          </IconLink>

          <IconLink>
            <LinkIcon />
          </IconLink>
        </div>
      </footer>
    </article>
  )
}
