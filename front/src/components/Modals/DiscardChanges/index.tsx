import styles from "./styles.module.scss"
import X from "../../../assets/x.svg"
import { Button } from '@chakra-ui/react'
interface Props {
}
export default function DiscardChanges() {
  return (
      <main className={styles.main}>
          <section>
              <img src={X} alt="x" />
              <h1>Descartar alterações</h1>
              <p>As alterações realizadas não foram salvas, deseja descartá-las?</p>
              <div>
                  <Button style={{background: " #B7005C", color: "#F3F3F3"}}>Descartar</Button>
                  <Button>Continuar editando</Button>
              </div>
          </section>
    </main>
  )
}