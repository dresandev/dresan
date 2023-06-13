'use client'

import Draggable, { type ControlPosition } from 'react-draggable'
import styles from './styles.module.css'

interface TechnologiesProps {
  name: string;
  defaultPosition?: ControlPosition;
}

export const Technology: React.FC<TechnologiesProps> = ({ name, defaultPosition }) => {
  return (
    <Draggable
      defaultPosition={defaultPosition}
      bounds='parent'
    >
      <span className={styles.skill}>
        {name}
      </span>
    </Draggable>
  )
}