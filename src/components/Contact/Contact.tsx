import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <form className={styles.form}>
      <label>
        Nombre
        <input
          className={styles.input}
          type='text'
          name='name'
          placeholder='Pepito Pérez'
          autoComplete='off'
        />
      </label>

      <label>
        Correo
        <input
          className={styles.input}
          type='email'
          name='email'
          placeholder='pepito@gmail.com'
          autoComplete='off'
        />
      </label>

      <label className={styles.textareaLabel}>
        Mensaje
        <textarea
          className={styles.textarea}
          name='message'
          placeholder='Hola, quisiera saber si...'
        />
      </label>

      <button className={styles.submit}>Enviar</button>
    </form>
  )
}
