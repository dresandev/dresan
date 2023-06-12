'use client'

import Draggable, { type ControlPosition } from 'react-draggable'
import styles from './Skills.module.css'

interface SkillProps {
  name: string;
  defaultPosition?: ControlPosition;
}

export const Skill: React.FC<SkillProps> = ({ name, defaultPosition }) => {
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