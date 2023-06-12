import { IconLink } from '@components/IconButton'
import { GitHubIcon, EmailIcon, LinkedinIcon } from '@components/Icons'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer>
      <div className={styles.links}>
        <IconLink
          href='https://github.com/dresandev'
          title='GitHub'
          target='_blank'
        >
          <GitHubIcon />
        </IconLink>
        <IconLink
          href='mailto:javiandres.016@gmail.com'
          title='Correo electrónico'
          target='_blank'
        >
          <EmailIcon />
        </IconLink>
        <IconLink
          href='https://www.linkedin.com/in/dresandev/'
          title='LinkedIn'
          target='_blank'
        >
          <LinkedinIcon />
        </IconLink>
      </div>
    </footer>
  )
}
