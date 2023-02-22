import styles from "./styles.module.scss"
import X from "../../../assets/x.svg"
import { Button } from '@chakra-ui/react'
interface Props {
  setConfirmDeleteStore: any
}
export default function CancelDeleteStore({ setConfirmDeleteStore }: Props) {

  return (
    <main className={styles.main}>
      <section className={styles.secDelete}>
        <img src={X} alt="x" onClick={() => {
          setConfirmDeleteStore(false)
        }} />
        <h1>Deseja deletar sua loja?</h1>
        <p>Ao confirmar essa opção serão deletadas todos os dados da loja</p>
        <div>
          <Button style={{ background: "#B7005C", color: "#F3F3F3" }}
            onClick={() => setConfirmDeleteStore(false)
            }>Não</Button>
          <Button >Sim</Button>
        </div>
      </section>
    </main>
  )
}