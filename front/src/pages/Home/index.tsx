import Products from '../../components/Products'
import styles from "./styles.module.scss"
export default function Home() {
  return (
    <main className={styles.main}>
      <section><Products/></section>
    </main>
  )
}

