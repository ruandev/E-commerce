import { Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cart from "../../assets/cart.svg"
import Logo from "../../assets/logo.svg"
import Search from "../../assets/search2.svg"
import Store from "../../assets/store.svg"
import User from "../../assets/user.svg"
import { addOverFlow } from "../../utils/handleOverFlow"
import OptionsUser from '../Modals/OptionsUser'
import styles from "./styles.module.scss"
export default function Header({ handleProducts, setQuery, query}: any) {
  const navigate = useNavigate()
  const [modalUser, setModalUser] = useState(false);
  function handleOnChangeInput(e: any) {
    setQuery(e.target.value)
  }
  
  return (
    <main className={styles.main}>
      {modalUser && <OptionsUser setModalUser={setModalUser} />}
      <section className={styles.secLogo}>
        <div className={styles.logo} onClick={() => {
          navigate("/pagina-inicial")
          handleProducts()
        }}>
          <img src={Logo} alt="logo" />
          <p>Market Place</p>
        </div>
      </section>
      <section className={styles.secInput}>
        {window.location.pathname === "/pagina-inicial" && <form className={styles.input} >
          <Input placeholder='Ex: Fone de ouvido' onChange={handleOnChangeInput} value={query} />
          <button type='button' style={{ zIndex: "2" }} onClick={() => {
            handleProducts()
            
          }} >
            <img src={Search} alt="pesquisar" /></button>
        </form>}
        <div className={styles.icons}>
          <div onClick={() => navigate('/carrinho')}>
            <img src={Cart} alt="carrinho" />
            <p>Meu carrinho</p>
          </div>
          <div onClick={() => navigate("/minha-loja")}>
            <img src={Store} alt="loja" />
            <p>Minha loja</p>
          </div>
          <div onClick={() => {
            setModalUser(true)
            addOverFlow()
          }}>
            <img src={User} alt="usuario" />
            <p>Usuário</p>
          </div>

        </div>
      </section>
    </main>
  )
}

