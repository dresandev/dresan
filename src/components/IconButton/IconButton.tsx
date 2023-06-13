import NextLink from 'next/link'
import styles from './styles.module.css'

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

type IconButtonProps = {
  href?: string
} & (AnchorProps | ButtonProps)

export const IconButton: React.FC<IconButtonProps> = ({ children, href, ...rest }) => {
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