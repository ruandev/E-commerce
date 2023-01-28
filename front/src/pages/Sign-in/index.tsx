import styles from "./styles.module.scss"
import Logo from "../../assets/logo.svg"
import { Button, FormControl, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react'
interface Props {}
export default function SignIn() {
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.icon}>
          <img src={Logo} alt="logo" />
          <h1>Market Cubos</h1>
        </div>
        <div className={styles.welcome}>
          <h1>Boas-vindas!</h1>
          <p>Use seu e-mail e senha para acessar a conta</p>
        </div>
        <form>
            <FormControl >
             <FormLabel >E-mail</FormLabel>
              <Input type='email' placeholder="exemplo@email.com" />
          </FormControl>
          
          <FormControl >
             <FormLabel >Senha</FormLabel>
              <Input style={{marginBottom: "48px"}} type='password' placeholder="Insira sua senha" />
          </FormControl>
          
          <Stack spacing={4} direction='row' align='center'>
          <Button size='lg'>
              Fazer login
              </Button>
              </Stack>
        </form>
        <p>Não possui conta? <span style={{color:  '#B7005C'}}>Cadastrar</span> </p>
      </section>
    </main>
  )
}



