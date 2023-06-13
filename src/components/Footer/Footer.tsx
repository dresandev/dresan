import { IconButton } from '@components/IconButton'
import { GitHubIcon, EmailIcon, LinkedinIcon } from '@components/Icons'
import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer>
      <div className={styles.links}>
        <IconButton
          href='https://github.com/dresandev'
          title='GitHub'
          target='_blank'
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href='mailto:javiandres.016@gmail.com'
          title='Correo electrónico'
          target='_blank'
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          href='https://www.linkedin.com/in/dresandev/'
          title='LinkedIn'
          target='_blank'
        >
          <LinkedinIcon />
        </IconButton>
      </div>
    </footer>
  )
}
