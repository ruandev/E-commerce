import { Input } from '@chakra-ui/react'
import Cart from "../../assets/cart.svg"
import Logo from "../../assets/logo.svg"
import Search from "../../assets/search.svg"
import Store from "../../assets/store.svg"
import User from "../../assets/user.svg"
import styles from "./styles.module.scss"
export default function Header() {
  return (
    <main className={styles.main}>
      <section>
        <div>
          <div >
          <img src={Logo} alt="logo" style={{marginRight:"15px"}} />
            <p>Market Place</p>
            </div>
          <div className={styles.icons}>
            <div>
              <img src={Cart} alt="carrinho" />
              <p>Meu carrinho</p>
            </div>
            <div>
              <img src={Store} alt="lojinha" />
              <p>Minha loja</p>
            </div>
            <div>

              <img src={User} alt="usuario" />
              <p>Usuário</p>
            </div>
          </div>
        </div>
        <div className={styles.search}>
          <Input placeholder='Ex: Fone de ouvido' />
          <img src={Search} alt="pesquisar" />

        </div>
      </section>
    </main>
  )
}

