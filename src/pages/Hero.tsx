import { Button } from '../components/button/Button'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={`section container ${styles.hero}`}>
      <h1>Hola, soy Agustín</h1>
      <p>Frontend Developer</p>
      <Button variant="elevated">Ver proyectos</Button>
    </section>
  )
}
