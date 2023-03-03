import styles from "./styles.module.scss"
import Logo from "../../assets/logo.svg"
import { Button, CircularProgress, FormControl, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import api from '../../api'
import useStorage from '../../hooks/Storage/useStorage'
interface Props {}
export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password:""
  })
  const {setStorage} = useStorage()
  const [circle, setCircle] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()
  function handleToast() {
    toast({
      title: 'Login feito com sucesso!',
      position: 'top-right',
      duration: 700,
      isClosable: true,
      status: 'success',
    })
  }
  function handleInput(e: any) {
    setForm({...form, [e.target.name]: e.target.value})
  }
  async function handleForm(e: any) {
    e.preventDefault()
    try {
      setCircle(true)
      const { data } = await api.post("/user/login", form)
      setStorage(data)
      handleToast()
      setTimeout(() => {
        navigate("/pagina-inicial")
      }, 1000)
    } catch (error) {
      setCircle(false)
      console.log(error)
    }
  }
 
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
        <form onSubmit={handleForm}>
            <FormControl >
             <FormLabel >E-mail</FormLabel>
              <Input type='email' name="email" placeholder="exemplo@email.com" onChange={handleInput} />
          </FormControl>
          
          <FormControl >
             <FormLabel >Senha</FormLabel>
              <Input style={{marginBottom: "48px"}} name="password" type='password' placeholder="Insira sua senha" onChange={handleInput}/>
          </FormControl>
          
          <Stack spacing={4} direction='row' align='center'>
            <Button type='submit' size='lg'>
               {circle ? <CircularProgress isIndeterminate color='green.400' thickness='10px' size='35px' /> : "Fazer login"}
              </Button>
              </Stack>
        </form>
        <p>Não possui conta? <span style={{color:  '#B7005C', textDecoration: "underline", cursor: "pointer"}} onClick={() => navigate("/cadastro")}>Cadastra-se</span></p>
      </section>
    </main>
  )
}



