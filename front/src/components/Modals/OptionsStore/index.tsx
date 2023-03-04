import styles from "./styles.module.scss";
import Logo from "../../../assets/logo.svg"
import X from "../../../assets/x.svg"
import { Button, CircularProgress, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import useDiscardChanges from '../../../hooks/DiscardChanges/useDiscardChanges';
import DiscardChanges from '../DiscardChanges';
import CancelDeleteStore from '../CancelDeleteStore';
interface Props {   
    fnCloseModal: any
}
import useStorage from '../../../hooks/Storage/useStorage';
import api from '../../../api';
import headers from '../../../utils/Token';

export default function OptionsStore({ fnCloseModal }: Props) {
    const { storage } = useStorage()
    const toast = useToast()
  function handleToast() {
    toast({
      title: 'Loja atualizada com sucesso!',
      position: 'top-right',
      duration: 700,
      isClosable: true,
      status: 'success',
    })
  }
    const [storeName, setStoreName] = useState({
    store_name: storage.merchant.store_name
    })
    const [circle,setCircle] = useState(false)
    const { modalDiscardChanges, setModalDiscardChanges } = useDiscardChanges()
    const [confirmDeleteStore, setConfirmDeleteStore] = useState(false)
    function handleStoreName(e: any) {
        setStoreName({...storeName,[e.target.name]: e.target.value})
    }
    async function updateStoreName(e: any) {
        e.preventDefault()
        try {
            setCircle(true)
            await api.patch(`/merchant/update/${storage.user.id}`, storeName, headers(storage.token))
            handleToast()
            setTimeout(() => {
                fnCloseModal(false)
            }, 1000);
        } catch (error) {
            setCircle(true)
            console.log(error)
        }
    }
    return (
        <main className={styles.main}>
            {confirmDeleteStore && <CancelDeleteStore setConfirmDeleteStore={setConfirmDeleteStore}/>}
            {modalDiscardChanges && <DiscardChanges fnCloseModal={fnCloseModal}/>}
            <section>
                <Button className={styles.x} onClick={() => setModalDiscardChanges(true)}>
                    <img src={X} alt="x" />
                </Button>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo" />
                    <p>Market Place</p>
                </div>
                <form onSubmit={updateStoreName}>
                    
                    <FormControl>
                        <FormLabel>Nome da loja</FormLabel>
                        <Input type='text' value={storeName.store_name} name="store_name" onChange={handleStoreName}/>
                    </FormControl>

                    
                    <div className={styles.btns}>
                    <Button type='submit'>{circle ? <CircularProgress isIndeterminate color='green.400' thickness='10px' size='35px' /> : "Atualizar"}</Button>
                        <Button style={{
                            background: "#FCFCFC", color: "#B7005C",
                            border: "1px solid #B7005C"
                    }} onClick={() => setModalDiscardChanges(true)} className={styles.btnCancel}>Cancelar</Button>
                    </div>
                    
                    <Button className={styles.deleteUser} onClick={() => setConfirmDeleteStore(true)}>Deletar loja</Button>
                </form>
            </section>
        </main>
    )
}

