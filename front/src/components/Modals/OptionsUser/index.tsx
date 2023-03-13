import styles from "./styles.module.scss";
import Logo from "../../../assets/logo.svg"
import X from "../../../assets/x.svg"
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { addOverFlow, removeOverflow } from '../../../utils/handleOverFlow';
import DiscardChanges from '../DiscardChanges';
import useDiscardChanges from "../../../hooks/DiscardChanges/useDiscardChanges"
import CancelDeleteUser from '../CancelDeleteUser';
import { useState } from 'react';
import useStorage from '../../../hooks/Storage/useStorage';
import api from '../../../api';
import headers from '../../../utils/Token';
import { useNavigate } from 'react-router-dom';
interface Props {
    setModalUser: any
}
export default function OptionsUser({ setModalUser }: Props) {
    const [confirmDeleteUser, setConfirmDeleteUser] = useState(false)
    const {storage, remove, setStorage} = useStorage()
    const { modalDiscardChanges, setModalDiscardChanges }: any = useDiscardChanges()
    const [circle, setCircle] = useState(false)
    const navigate = useNavigate()
    const [form, setForm] = useState<any>({
        first_name: storage.user.first_name,
        last_name: storage.user.last_name,
        email: storage.user.email,
        password: ""

    })

    function handleChangeInput(e: any){
        setForm({...form, [e.target.name]: e.target.value})
    }
    async function handleSubmit(e: any) {
        e.preventDefault()
        delete form?.cpassword
        try {
            await api.patch(`/user/update/${storage.user.id}`, form, headers(storage.token))
            storage.user = {
                id: storage.user.id,
                first_name: form?.first_name,
                last_name: form?.last_name,
                email: form?.email}
            setStorage(storage)
            addOverFlow()
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <main className={styles.main}>
            {confirmDeleteUser && <CancelDeleteUser setConfirmDeleteUser={setConfirmDeleteUser} />}
            {modalDiscardChanges && <DiscardChanges fnCloseModal={setModalUser} />}
            <section>
                <Button className={styles.x} onClick={ () => setModalDiscardChanges(true)}>
                    <img src={X} alt="x" />
                </Button>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo" />
                    <p>Market Place</p>
                </div>
                <form onSubmit={handleSubmit}>
                    
                    <FormControl>
                        <FormLabel>Nome</FormLabel>
                        <Input type='text' name="first_name" value={form.first_name} onChange={handleChangeInput} />
                    </FormControl>
                    
                    <FormControl>
                        <FormLabel>Sobrenome</FormLabel>
                        <Input type='text' name="last_name" value={form.last_name} onChange={handleChangeInput}/>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' name="email" value={form.email} onChange={handleChangeInput}/>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Senha</FormLabel>
                        <Input type='text' name="password" onChange={handleChangeInput}/>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Confirme a senha</FormLabel>
                        <Input type='text' name="cpassword" onChange={handleChangeInput}/>
                    </FormControl>
                    <div className={styles.btns}>
                    <Button type="submit">Atualizar</Button>
                        <Button style={{
                            background: "#FCFCFC", color: "#B7005C",
                            border: "1px solid #B7005C"
                    }}  onClick={ () =>
                        {
                        setModalDiscardChanges(true)
                        }
                        } className={styles.btnCancel}>Cancelar</Button>
                    </div>
                    
                    <Button className={styles.deleteUser} style={{ marginBottom: "20px" }} onClick={() => {
                        remove()
                        navigate("/")
                    }}>Sair</Button>
                    
                    <Button className={styles.deleteUser} onClick={() => setConfirmDeleteUser(true)}>Deletar usuário</Button>
                    
                </form>
            </section>
        </main>
    )
}

