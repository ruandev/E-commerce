import styles from "./styles.module.scss"
import PublishedImage from "../../../assets/published.svg"
import { Button } from '@chakra-ui/react'
interface Props { 
  setModalPublished: any
  phrase?: any
}

export default function Published({setModalPublished, phrase}: Props) {
  return (
      <main className={styles.container}>
          <section className={styles.sec}>
              <img src={PublishedImage} alt="publicado" />
              <h1>{phrase.h1}</h1>
              <p>{phrase.p}</p>
              
                  <Button style={{background: " #B7005C", color: "#F3F3F3"}} onClick={() => setModalPublished(false)}>Fechar</Button>
                  
           
          </section>
    </main>
  )
}