import { Button, CircularProgress, FormControl, FormLabel, Input, Stack, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api'
import Logo from "../../assets/logo.svg"
import styles from "./styles.module.scss"
import { IFormCadaster } from '../../interfaces/FormCadasterUser'
export default function SignUp() {
  const [circle, setCircle] = useState(false)
  const navigate = useNavigate()
  const [form, setForm] = useState<IFormCadaster>({
    frist_name: "",
    last_name: "",
    email: "",
    password: "",
    cpassword: ""
  })
  const toast = useToast()
  function handleToast() {
    toast({
      title: 'Conta criada com sucesso!',
      position: 'top-right',
      duration: 700,
      isClosable: true,
      status: 'success',
    })
  }
  function handleInput(e: any) {
    setForm({...form, [e.target.name]: e.target.value})
  }
  async function handleSubmit(e: any) {
    e.preventDefault()
    delete form.cpassword
    try {
      setCircle(true)
      await api.post("/user/cadaster", form)
      handleToast()
      setTimeout(() => {
      navigate("/entrar")
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
        <strong>Cadastre-se</strong>

        <form onSubmit={handleSubmit}>
          <FormControl >
            <FormLabel className={styles.label}>Nome</FormLabel>
            <Input type='text' placeholder="Insira seu nome" onChange={handleInput} name="frist_name"/>
          </FormControl>

          <FormControl >
            <FormLabel className={styles.label}>Sobrenome</FormLabel>
            <Input type='text' placeholder="Insira seu Sobrenome" onChange={handleInput} name="last_name"/>
          </FormControl>

          <FormControl >
            <FormLabel className={styles.label}>E-mail</FormLabel>
            <Input type='email' placeholder="exemplo@email.com" onChange={handleInput} name="email"/>
          </FormControl>

          <FormControl >
            <FormLabel className={styles.label}>Senha</FormLabel>
            <Input type='password' placeholder="Insira sua senha" onChange={handleInput} name="password"/>
          </FormControl>

          <FormControl >
            <FormLabel className={styles.label}>Confirme sua senha</FormLabel>
            <Input type='password' placeholder="Confirme sua senha" onChange={handleInput} name="cpassword"/>
          </FormControl>
          <p className={styles.policyText}>Ao criar uma conta, você concorda com a nossa <span style={{ color: "#D10070" }}>Política de Privacidade</span> e <span style={{ color: "#D10070" }}>Termos de serviço</span></p>

          <Stack spacing={4} direction='row' align='center'>
          
            <Button className='btn-create-account' size='lg' type='submit'>
            {circle ? <CircularProgress isIndeterminate color='green.400' thickness='10px' size='35px' /> : "Criar conta"}
          </Button>
        </Stack>
        </form>

        
        
        <p className='sign-in'>Já tem uma conta? <span style={{ color: "#B7005C", textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate("/entrar")}>Fazer login</span></p>
      </section>
    </main>
  )
}

