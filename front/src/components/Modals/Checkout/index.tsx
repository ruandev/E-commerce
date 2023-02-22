import { Button, Input, Select } from '@chakra-ui/react';
import styles from "./styles.module.scss";
export default function Checkout() {
    return (
        <main className={styles.container}>
            <section className={styles.sec}>
                <p>Frete Grátis para todo o Brasil</p>
                <Input></Input>
            <Select placeholder='Select option'>
  <option value='option1'>Pix</option>
                </Select>
                <div>
                    <Button>Confirmar</Button> 
                    <Button>Cancelar</Button> 
                </div>
            </section>
        </main>
    )
}