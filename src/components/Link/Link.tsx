import NextLink from 'next/link'
import styles from './Link.module.css'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href: string;
}

export const Link: React.FC<LinkProps> = (props) => {
  return (
    <NextLink
      className={styles.link}
      {...props}
    >
      {props.children}
    </NextLink>
  )
}
