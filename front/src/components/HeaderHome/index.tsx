import { FormControl, Input } from '@chakra-ui/react'
import Cart from "../../assets/cart.svg"
import Store from "../../assets/store.svg"
import User from "../../assets/user.svg"
import Logo from "../../assets/logo.svg"
import styles from "./styles.module.scss"

export default function Header() {
  return (
      <main className={styles.main}>
      <section>
        <div>
          <img src={Logo} alt="logo" />
          <p>Market Place</p>
          <div className={styles.icons}>    
        <img src={Cart} alt="carrinho" />
              <img src={Store} alt="lojinha" />
              <img src={User} alt="usuario" />
          </div> 
          </div>
        <FormControl >
              <Input type='text' placeholder="Ex: Fone de ouvido" />
          </FormControl>
        
          </section>
    </main>
  )
}

 