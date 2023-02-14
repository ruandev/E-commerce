import styles from "./styles.module.scss"
import PublishedImage from "../../../assets/published.svg"
import { Button } from '@chakra-ui/react'
interface Props { 
    setModalPublised: any
}

export default function Published({setModalPublised}: Props) {
  return (
      <main className={styles.main}>
          <section>
              <img src={PublishedImage} alt="publicado" />
              <h1>O anúncio foi publicado</h1>
              <p>O anúncio está ativo e o produto disponível para venda</p>
              
                  <Button style={{background: " #B7005C", color: "#F3F3F3"}} onClick={() => setModalPublised(false)}>Fechar</Button>
                  
           
          </section>
    </main>
  )
}