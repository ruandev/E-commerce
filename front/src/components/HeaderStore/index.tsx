import styles from "./styles.module.scss";
import LessThan from "../../assets/lessThan.svg";
import Logo from "../../assets/logo.svg";
import User from "../../assets/user.svg"
import useDiscardChanges from '../../hooks/DiscardChanges/useDiscardChanges';
import { useNavigate } from 'react-router-dom';
import OptionsStore from '../Modals/OptionsStore';
import { useState } from 'react';
export default function HeaderStore() {
    const [modalOptionStore, setModalOptionStore] = useState(false)
    const navigate = useNavigate()
    const { setModalDiscardChanges }: any = useDiscardChanges()
    function handleCurrentPath() {
        if (window.location.pathname === "/cadastrar-produto") {
            return setModalDiscardChanges(true)
        } else {
            navigate('/pagina-inicial')
        }
    }
  return (
      <main className={styles.main}>
          {modalOptionStore && <OptionsStore fnCloseModal={setModalOptionStore} />}
          <section>
              <img style={{cursor: "pointer"}} src={LessThan} alt="voltar" onClick={handleCurrentPath}/>
              <div className={styles.logo}>
                  <img src={Logo} alt="logo" />
                  <p>Market Place</p>
              </div>
              <div className={styles.store} onClick={() => setModalOptionStore(true)}>
                  <img src={User} alt="loja" />
                  <p>Minha Loja</p>
                 
              </div>
          </section>
    </main>
  )
}


