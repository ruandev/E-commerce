import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import DELIVERY from "../../../assets/delivery.svg";
import styles from "./styles.module.scss";
interface Props{
    setModalCheckout: any
}
export default function Checkout({setModalCheckout}: Props) {
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
                        <Button>Confirmar</Button>
                        <Button style={{background: "#FCFCFC", color: "#B7005C", border: "1px solid #B7005C"}}onClick={() => setModalCheckout(false)}>Cancelar</Button>
                    </div>
                </form>

            </section>
        </main>
    )
}