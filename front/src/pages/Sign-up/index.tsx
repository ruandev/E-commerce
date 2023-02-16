import styles from "./styles.module.scss"
import Logo from "../../assets/logo.svg"
import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
interface Props {

}
export default function SignUp() {
  const navigate = useNavigate()
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.icon}>
          <img src={Logo} alt="logo" />
          <h1>Market Cubos</h1>
        </div>
        <strong>Cadastre-se</strong>

        <form>
        <FormControl >
            <FormLabel className={styles.label}>Nome</FormLabel>
            <Input type='text' placeholder="Insira seu nome" />
          </FormControl>

          <FormControl >
            <FormLabel className={styles.label}>E-mail</FormLabel>
            <Input type='email' placeholder="exemplo@email.com" />
          </FormControl>

          <FormControl >
            <FormLabel className={styles.label}>Senha</FormLabel>
            <Input type='password' placeholder="Insira sua senha" />
          </FormControl>

          <FormControl >
            <FormLabel className={styles.label}>Confirme sua senha</FormLabel>
            <Input type='password' placeholder="Confirme sua senha" />
          </FormControl>
        </form>

        <p className={styles.policyText}>Ao criar uma conta, você concorda com a nossa <span style={{ color: "#D10070" }}>Política de Privacidade</span> e <span style={{ color: "#D10070" }}>Termos de serviço</span></p>

        <Stack spacing={4} direction='row' align='center'>
          <Button className='btn-create-account' size='lg'>
          Criar conta
          </Button>
        </Stack>
        <p className='sign-in'>Já tem uma conta? <span style={{ color: "#B7005C", textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate("/entrar")}>Fazer login</span></p>
      </section>
    </main>
  )
}

