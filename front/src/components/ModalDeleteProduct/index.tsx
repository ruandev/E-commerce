import styles from "./styles.module.scss"
import X from "../../assets/x.svg"
import { Button } from '@chakra-ui/react'
interface Props {
    setModalDeleteProduct: any
}
export default function DeleteProduct({setModalDeleteProduct}: Props) {
  return (
      <main className={styles.main}>
          <section>
              <img src={X} alt="x" onClick={() => setModalDeleteProduct(false)}/>
              <h1>Remover produto</h1>
              <p>Tem certeza que deseja remover esse produto do estoque? A ação não poderá ser desfeita.</p>
              <div>
                  <Button style={{background: " #B7005C", color: "#F3F3F3"}}>Remover</Button>
                  <Button onClick={() => setModalDeleteProduct(false)}>Cancelar</Button>
              </div>
          </section>
    </main>
  )
}