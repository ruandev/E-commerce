import CreateStore from '../../components/CreateStore';
import TableProducts from '../../components/TableProducts';
import useStorage from '../../hooks/Storage/useStorage';
import styles from "./styles.module.scss";
export default function Store() {
  const { storage } = useStorage()

  return (
    <main className={styles.main}>
      <section>
        {storage?.merchant ? <TableProducts/> : <CreateStore />}
      </section>
    </main>
  )
}

