import styles from './styles.module.css'

export const ContactForm = () => {
  return (
    <section>
      <h2 className='sr-only'>Formulario de contacto</h2>
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
    </section>
  )
}
