import CreateStore from '../../components/CreateStore';
import styles from "./styles.module.scss";
export default function Store() {
  return (
    <main className={styles.main}>
      <section>
        <CreateStore/>
      </section>
    </main>
  )
}

