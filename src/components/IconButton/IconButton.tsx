import NextLink from 'next/link'
import styles from './IconButton.module.css'

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

type IconLinkProps = {
  href?: string
} & (AnchorProps | ButtonProps)

export const IconLink: React.FC<IconLinkProps> = ({ children, href, ...rest }) => {
  return href
    ? (
      <NextLink className={styles.link} href={href} {...rest as AnchorProps}>
        {children}
      </NextLink>
    )
    : (
      <button className={styles.link} {...rest as ButtonProps}>
        {children}
      </button>
    )
}