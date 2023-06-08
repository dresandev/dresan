import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={styles.btn}
      {...props}
    >
      <span className={styles.content}>
        {props.children}
      </span>
    </ button>
  )
}
