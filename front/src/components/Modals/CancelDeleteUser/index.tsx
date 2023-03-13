import styles from "./styles.module.scss"
import X from "../../../assets/x.svg"
import { Button } from '@chakra-ui/react'
import { removeOverflow } from '../../../utils/handleOverFlow'
import api from '../../../api'
import headers from '../../../utils/Token'
import useStorage from '../../../hooks/Storage/useStorage'
import { useNavigate } from 'react-router-dom'
interface Props {
  setConfirmDeleteUser: any
}
export default function CancelDeleteUser({ setConfirmDeleteUser }: Props) {
  const navigate = useNavigate()
  const {storage} = useStorage()
  async function handleDeleteUser() {
    try {
      await api.delete("/user/delete/${storage.user.id}", headers(storage.token))
      navigate("/")
    } catch (error) {
        console.log("error")
    }
}
  return (
    <main className={styles.main}>
      <section className={styles.secDelete}>
        <img src={X} alt="x" onClick={() => {
          setConfirmDeleteUser(false)
        }} />
        <h1>Deseja deletar seu usuário?</h1>
        <p>Ao confirmar essa opção serão deletadas todos os dados do usuário</p>
        <div>
          <Button style={{ background: "#B7005C", color: "#F3F3F3" }}
            onClick={() => setConfirmDeleteUser(false)
            }>Não</Button>
          <Button onClick={handleDeleteUser}>Sim</Button>
        </div>
      </section>
    </main>
  )
}