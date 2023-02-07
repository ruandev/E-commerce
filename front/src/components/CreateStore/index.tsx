import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import Logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";
import { useNavigate } from 'react-router-dom';
export default function CreateStore() {
    const navigate = useNavigate()
  return (
    <main className={styles.main}>
      <section>
        <img src={Logo} alt="logo" />
        <h1>Market Place</h1>
        <p className={styles.welcome}>Bem vindo!</p>
        <p>Aqui você poderá criar sua loja e anunciar seus produtos.</p>
        <form >
          <FormControl style={{position: "relative"}}>
            <FormLabel>Nome da loja</FormLabel>
            <Input type='text' placeholder='Lojinha da Maria' />
        <span onClick={() => navigate('/pagina-inicial')}>{'<'}&ensp; Voltar</span>
          </FormControl>
          <Button>Crie sua loja!</Button>
        </form>
      </section>
    </main>
  )
}

