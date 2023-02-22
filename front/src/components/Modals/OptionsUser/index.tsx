import styles from "./styles.module.scss";
import Logo from "../../../assets/logo.svg"
import X from "../../../assets/x.svg"
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { removeOverflow } from '../../../utils/handleOverFlow';
import DiscardChanges from '../DiscardChanges';
import useDiscardChanges from "../../../hooks/DiscardChanges/useDiscardChanges"
import CancelDeleteUser from '../CancelDeleteUser';
import { useState } from 'react';
interface Props {
    setModalUser: any
}
export default function OptionsUser({ setModalUser }: Props) {
    const [confirmDeleteUser, setConfirmDeleteUser] = useState(false)

    const {modalDiscardChanges, setModalDiscardChanges}: any = useDiscardChanges()
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
                <form>
                    
                    <FormControl>
                        <FormLabel>Nome</FormLabel>
                        <Input type='text' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Senha</FormLabel>
                        <Input type='text' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Confirme a senha</FormLabel>
                        <Input type='text' />
                    </FormControl>
                    <div className={styles.btns}>
                    <Button>Atualizar</Button>
                        <Button style={{
                            background: "#FCFCFC", color: "#B7005C",
                            border: "1px solid #B7005C"
                    }}  onClick={ () =>
                        {
                        setModalDiscardChanges(true)
                        }
                        } className={styles.btnCancel}>Cancelar</Button>
                    </div>
                    
                    <Button className={styles.deleteUser} onClick={() => setConfirmDeleteUser(true)}>Deletar usuário</Button>
                </form>
            </section>
        </main>
    )
}

