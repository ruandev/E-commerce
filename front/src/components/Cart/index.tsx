import { Button, Table, TableContainer, Th, Thead, Tr } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import LessThan from "../../assets/lessThan.svg";
import CartProducts from '../CartProducts';
import styles from "./styles.module.scss";
export default function Cart() {
    const navigate = useNavigate();
    
    return (
        <main className={styles.main}>
            <section>
                <TableContainer className={styles.containerTable}>
                    <Table variant='simple'>
                       
                        <Thead>
                            <Tr>
                                <Th></Th>
                                <Th>Nome do Produto</Th>
                                <Th>Preço Únitario</Th>
                                <Th>Quantidade</Th>
                                <Th>Preço Total</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <CartProducts/>
                    </Table>
                </TableContainer>
                <div className={styles.checkout}>
                    <Button className={styles.back} onClick={() => navigate('/pagina-inicial')}><img src={LessThan} alt="voltar"/></Button>
                    <div>
                    <p>Total (0 item): R$0,00</p>
                    <Button>Continuar</Button>
                    </div>
                </div>
            </section>
        </main>
    )
}

