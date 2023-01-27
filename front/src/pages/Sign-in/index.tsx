import "./styles.scss"
import Logo from "../../assets/logo.svg"
import { Button, FormControl, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react'
interface Props {}
export default function SignIn() {
  return (
    <main className='main'>
      <section>
        <div className='div1'>
          <img src={Logo} alt="logo" />
          <h1>Market Cubos</h1>
        </div>
        <div className='div2'>
          <h1>Boas-vindas!</h1>
          <p>Use seu e-mail e senha para acessar a conta</p>
        </div>
        
        <form>
            <FormControl >
             <FormLabel className='label'>E-mail</FormLabel>
              <Input className='input' type='email' placeholder="exemplo@email.com" />
          </FormControl>
          
          <FormControl >
             <FormLabel className='label'>Senha</FormLabel>
              <Input style={{marginBottom: "48px"}} className='input' type='password' placeholder="Insira sua senha" />
          </FormControl>
          
          <Stack spacing={4} direction='row' align='center'>
          <Button className='button' size='lg'>
              Fazer login
              </Button>
              </Stack>
        </form>
        <p>Não possui conta? <span style={{color:  '#B7005C'}}>Cadastrar</span> </p>
      </section>
    </main>
  )
}



