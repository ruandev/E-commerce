import "./styles.scss"
import Logo from "../../assets/logo.svg"
interface Props{

}
export default function SignUp() {
  return (
      <main className='main'>
          <section>
            <div className='div1'>
          <img src={Logo} alt="logo" />
          <h1>Market Cubos</h1>
        </div>
          </section>
    </main>
  )
}

