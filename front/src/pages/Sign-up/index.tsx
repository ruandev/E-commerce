import "./styles.scss"
import Logo from "../../assets/logo.svg"
import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
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
        <strong>Cadastre-se</strong>

        <form>
        <FormControl >
             <FormLabel className='label'>E-mail</FormLabel>
              <Input className='input' type='email' placeholder="exemplo@email.com" />
          </FormControl>
          
          <FormControl >
             <FormLabel className='label'>Senha</FormLabel>
              <Input className='input' type='password' placeholder="Insira sua senha" />
          </FormControl>

          <FormControl >
             <FormLabel className='label'>Confirme sua senha</FormLabel>
              <Input className='input' type='password' placeholder="Confirme sua senha" />
          </FormControl>
        </form>

        <p className='privacy-policy-text'>Ao criar uma conta, você concorda com a nossa <span style={{color: "#D10070"}}>Política de Privacidade</span> e <span style={{color: "#D10070"}}>Termos de serviço</span></p>

        <Stack spacing={4} direction='row' align='center'>
          <Button className='btn-create-account' size='lg'>
              Fazer login
              </Button>
        </Stack>
        <p className='sign-in'>Já tem uma conta? <span style={{color: "#B7005C"}}>Fazer login</span></p>
      </section>
    </main>
  )
}

