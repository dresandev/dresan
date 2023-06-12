import { Tag } from './Tag'
import styles from './Tags.module.css'

interface TagsProps {
  tags: string[]
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {
        tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))
      }
    </div>
  )
}
