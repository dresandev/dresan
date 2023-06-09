import { IconLink } from '@components/IconLink'
import { GitHubIcon, EmailIcon, LinkedinIcon, } from '@components/Icons'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer>
      <div className={styles.links}>
        <IconLink
          href='https://github.com/dresandev'
          target='_blank'
          outlined
        >
          <GitHubIcon />
        </IconLink>
        <IconLink
          href='mailto:javiandres.016@gmail.com'
          target='_blank'
          outlined
        >
          <EmailIcon />
        </IconLink>
        <IconLink
          href='https://www.linkedin.com/in/dresandev/'
          target='_blank'
          outlined
        >
          <LinkedinIcon />
        </IconLink>
      </div>
    </footer>
  )
}
