import { Input } from '@chakra-ui/react'
import Cart from "../../assets/cart.svg"
import Logo from "../../assets/logo.svg"
import Search from "../../assets/search.svg"
import Store from "../../assets/store.svg"
import User from "../../assets/user.svg"
import styles from "./styles.module.scss"
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate()
  return (
    <main className={styles.main}>
      <section className={styles.secLogo}>
        <div className={styles.logo} onClick={() => navigate("/pagina-inicial")}>
          <img src={Logo} alt="logo" />
          <p>Market Place</p>
      </div>
      </section>
      <section className={styles.secInput}>
        <form className={styles.input}>
          <Input placeholder='Ex: Fone de ouvido' />
          <button><img src={Search} alt="pesquisar"/></button>
        </form>
        <div className={styles.icons}>
            <div>
            <img src={Cart} alt="carrinho" />
            <p>Meu carrinho</p>
            </div>
          <div>  
            <img src={Store} alt="loja" />
            <p>Minha loja</p>
            </div> 
          <div>
            <img src={User} alt="usuario" />
            <p>Usuário</p>
            </div>
          
        </div>
      </section>
    </main>
  )
}

