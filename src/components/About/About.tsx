import { DresanSignature } from '@components/Icons'
import styles from './styles.module.css'

export const About = () => {
  return (
    <section className={styles.about}>
      <h2>Hola, ¡encantado de conocerte!👋🏻</h2>
      <p>
        Soy Javier andres, me puedes decir Dresan, un apasionado del desarrollo de software y un entusiasta del mundo del Frontend. Me encanta convertir ideas en realidad.
      </p>
      <p>
        Desde que descubrí mi pasión por el desarrollo web, me he centrado en el ámbito del Frontend. Me apasiona el desafío de implementar diseños creativos en código funcional y atractivo. Disfruto explorando nuevas tecnologías y tendencias en el mundo del desarrollo de software, siempre me esfuerzo por estar al tanto de las últimas herramientas y prácticas.
      </p>

      <p>
        Cuando no estoy sumergido en el mundo del desarrollo web, me encanta el mundo de los videojuegos, disfruto jugar y consumir contenido sobre Esports. Creo firmemente en mantener un equilibrio entre el trabajo y la vida personal para recargar energías y mantenerme creativo.
      </p>

      <p>
        Resumiendo, soy un apasionado del Frontend con habilidades técnicas sólidas y una mentalidad orientada a la calidad. Estoy constantemente buscando nuevos desafíos y oportunidades para crecer y mejorar como desarrollador. Siempre estoy emocionado de colaborar en proyectos interesantes y desafiantes, así que no dudes en ponerte en contacto conmigo si crees que puedo ser una buena incorporación a tu equipo.
      </p>

      <footer className={styles.aboutFooter}>
        <strong>No te preocupes, se feliz 💙</strong>
        <DresanSignature />
      </footer>
    </section>
  )
}
