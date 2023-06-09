import NextLink from 'next/link'
import styles from './IconLink.module.css'

interface IconLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href?: string;
  outlined?: boolean;
}

export const IconLink: React.FC<IconLinkProps> = ({ children, href, outlined, ...rest }) => {
  return href
    ? (
      <NextLink
        className={`${styles.link} ${outlined && styles.outlined}`}
        href={href}
        {...rest}>
        {children}
      </ NextLink>
    )
    : (
      <a
        className={`${styles.link} ${outlined && styles.outlined}`}
        {...rest}
      >
        {children}
      </a>
    )
}
