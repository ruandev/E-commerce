import styles from "./styles.module.scss"
import X from "../../../assets/x.svg"
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import useDiscardChanges from '../../../hooks/DiscardChanges/useDiscardChanges'
interface Props {
  setModalUser: any
}
export default function DiscardChanges({setModalUser}: Props) {
  const {setModalDiscardChanges}: any = useDiscardChanges()
  const navigate = useNavigate()
  return (
      <main className={styles.main}>
          <section>
              <img src={X} alt="x" onClick={() => setModalDiscardChanges(false)} />
              <h1>Descartar alterações</h1>
              <p>As alterações realizadas não foram salvas, deseja descartá-las?</p>
              <div>
          <Button style={{ background: " #B7005C", color: "#F3F3F3" }} onClick={() => {
            setModalUser(true)
            setModalDiscardChanges(false)
            {window.location.pathname === "/cadastrar-produto" ? navigate("/minha-loja") : ""}
          }} >Descartar</Button>
                  <Button onClick={() => setModalDiscardChanges(false)}>Continuar editando</Button>
              </div>
          </section>
    </main>
  )
}