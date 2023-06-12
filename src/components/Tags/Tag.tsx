import styles from './Tags.module.css'

interface TagProps {
  children: React.ReactNode | string
}

export const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className={styles.tag}>
      {children}
    </span>
  )
}
