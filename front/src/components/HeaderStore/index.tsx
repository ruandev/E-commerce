import styles from "./styles.module.scss";
import LessThan from "../../assets/lessThan.svg";
import Logo from "../../assets/logo.svg";
import User from "../../assets/user.svg"
export default function HeaderStore() {
  return (
      <main className={styles.main}>
          <section>
              <img src={LessThan} alt="voltar" />
              <div className={styles.logo}>
                  <img src={Logo} alt="logo" />
                  <p>Market Place</p>
              </div>
              <div className={styles.store}>
                  <img src={User} alt="loja" />
                 
              </div>
          </section>
    </main>
  )
}

