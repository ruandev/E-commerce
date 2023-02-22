import styles from "./styles.module.scss";
import Logo from "../../../assets/logo.svg"
import X from "../../../assets/x.svg"
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import useDiscardChanges from '../../../hooks/DiscardChanges/useDiscardChanges';
import DiscardChanges from '../DiscardChanges';
interface Props {   
    setModalOptionStore: any
}
export default function OptionsStore({ setModalOptionStore }: Props) {
    const {modalDiscardChanges, setModalDiscardChanges} = useDiscardChanges()
    return (
        <main className={styles.main}>
            {modalDiscardChanges && <DiscardChanges fnCloseModal={setModalOptionStore}/>}
            <section>
                <Button className={styles.x} onClick={() => setModalDiscardChanges(true)}>
                    <img src={X} alt="x" />
                </Button>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo" />
                    <p>Market Place</p>
                </div>
                <form>
                    
                    <FormControl>
                        <FormLabel>Nome da loja</FormLabel>
                        <Input type='text' />
                    </FormControl>

                    
                    <div className={styles.btns}>
                    <Button>Atualizar</Button>
                        <Button style={{
                            background: "#FCFCFC", color: "#B7005C",
                            border: "1px solid #B7005C"
                    }} onClick={() => setModalDiscardChanges(true)} className={styles.btnCancel}>Cancelar</Button>
                    </div>
                    
                    <Button className={styles.deleteUser}>Deletar loja</Button>
                </form>
            </section>
        </main>
    )
}

