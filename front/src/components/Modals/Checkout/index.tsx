import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import { useState } from 'react';
import DELIVERY from "../../../assets/delivery.svg";
import styles from "./styles.module.scss";
interface Props{
    setModalCheckout: any
    setPhrase: any
    setModalFinished?: any
}
export default function Checkout({ setModalCheckout, setPhrase, setModalFinished }: Props) {
    return (
        <main className={styles.container}>
            <section className={styles.sec}>
                <div className={styles.title}>
                    <h1>Frete grátis para todo o Brasil</h1>
                    <img src={DELIVERY} alt="caminhão" />
                </div>
                <form>
                    <FormControl>
                        <FormLabel>CEP</FormLabel>
                        <Input type='text' placeholder='Digite seu CEP' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>MÉTODO DE PAGAMENTO</FormLabel>
                        <Select placeholder='Select option'>
                        <option value='option1'>Pix</option>
                        </Select>
                    </FormControl>
                    <div className={styles.btnsCheckout}>
                        <Button onClick={() => {
                            setModalCheckout(false)
                            setModalFinished(true)
                            setPhrase({
                                h1: "A compra foi concluida ",
                                p: "Dentro de alguns instantes sua compra será enviada"
                             })
                        }}>Confirmar</Button>
                        <Button style={{background: "#FCFCFC", color: "#B7005C", border: "1px solid #B7005C"}}onClick={() => setModalCheckout(false)}>Cancelar</Button>
                    </div>
                </form>

            </section>
        </main>
    )
}