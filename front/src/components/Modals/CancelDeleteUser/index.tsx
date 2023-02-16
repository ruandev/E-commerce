import styles from "./styles.module.scss"
import X from "../../../assets/x.svg"
import { Button } from '@chakra-ui/react'
import { removeOverflow } from '../../../utils/handleOverFlow'
interface Props {
  setConfirmDeleteUser: any
}
export default function CancelDeleteUser({ setConfirmDeleteUser }: Props) {

  return (
    <main className={styles.main}>
      <section>
        <img src={X} alt="x" onClick={() => {
          setConfirmDeleteUser(false)
        }} />
        <h1>Deseja deletar seu usuário?</h1>
        <p>Ao confirmar essa opção serão deletadas todos os dados do usuário</p>
        <div>
          <Button style={{ background: "#B7005C", color: "#F3F3F3" }}
            onClick={() => setConfirmDeleteUser(false)
            }>Não</Button>
          <Button >Sim</Button>
        </div>
      </section>
    </main>
  )
}