import { Button, CircularProgress, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import Logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";
import { useNavigate } from 'react-router-dom';
import headers from '../../utils/Token';
import api from '../../api';
import { useState } from 'react';
import useStorage from '../../hooks/Storage/useStorage';
export default function CreateStore({ setProfileStore }: any) {
  const [circle, setCircle] = useState(false)
  const [form, setForm] = useState({
    store_name: ""
  })
  const {storage, setStorage} = useStorage()
  const toast = useToast()
  function handleToast() {
    toast({
      title: 'Loja criada com sucesso!',
      position: 'top-right',
      duration: 700,
      isClosable: true,
      status: 'success',
    })
  }
  const navigate = useNavigate()
  function handleForm(e: any) {
    setForm({...form, [e.target.name]: e.target.value})
  }
  async function handleSubmit(e: any) {
    e.preventDefault()
    try {
      setCircle(true)
      const { data } = await api.post(`/merchant/cadaster/${storage?.user.id}`, form, headers(storage?.token))
      storage.merchant = { id: data.id, store_name: data.store_name }
      handleToast()
      setTimeout(() => {
        setStorage(storage)
      },1000)
    } catch (error) {
      console.log(error)
      setCircle(false)
    }
  }
  return (
    <main className={styles.main}>
      <section>
        <img src={Logo} alt="logo" />
        <h1>Market Place</h1>
        <p className={styles.welcome}>Bem vindo!</p>
        <p>Aqui você poderá criar sua loja e anunciar seus produtos.</p>
        <form onSubmit={handleSubmit}>
          <FormControl style={{position: "relative"}}>
            <FormLabel>Nome da loja</FormLabel>
            <Input type='text' placeholder='Ex: Lojinha da Maria' name='store_name' onChange={handleForm}/>
        <span onClick={() => navigate('/pagina-inicial')}>{'<'}&ensp; Voltar</span>
          </FormControl>
          <Button type='submit'>{circle ? <CircularProgress isIndeterminate color='green.400' thickness='10px' size='35px' /> : "Criar loja"}</Button>
        </form>
      </section>
    </main>
  )
}

