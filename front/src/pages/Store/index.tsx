import CreateStore from '../../components/CreateStore';
import TableProducts from '../../components/TableProducts';
import styles from "./styles.module.scss";
export default function Store() {
  return (
    <main className={styles.main}>
      <section>
        {/* <CreateStore/> */}
        <TableProducts/>
      </section>
    </main>
  )
}

