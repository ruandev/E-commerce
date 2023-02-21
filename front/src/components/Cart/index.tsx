import { Button, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import styles from "./styles.module.scss";
import Caderno from "../../assets/caderno.png"
import { useState } from 'react';
import Trash from "../../assets/trash.svg";
export default function Cart() {
    const [number, setNumber] = useState(1)
    function handleCount(signal: string) {
        if (number >= 1 && signal === '+') {
            return setNumber(number + 1)
        }
        if (number >= 2 && signal === '-') {
            return setNumber(number - 1)
        }
    }
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
                        <Tbody>
                            <Tr>
                                <Td className={styles.tdImage }><img src={Caderno} alt="" /></Td>
                                <Td>Caderno Capa Dura Floral</Td>
                                <Td isNumeric>79.90</Td>
                                <Td isNumeric>
                                <div className={styles.count}>
                            <div>
                                <span onClick={() => handleCount('-')}>-</span>
                                {number}
                                <span
                                    onClick={() => handleCount('+')}>+</span>
                            </div>
                        </div>
                                </Td>
                                <Td>{30.48 * 2}</Td>
                                <Td><img src={Trash} alt="lixo" /></Td>
                            </Tr>
                        </Tbody>

                    </Table>
                </TableContainer>
                <div className={styles.checkout}>
                    <p>Total (0 item): R$0,00</p>
                    <Button>Continuar</Button>
                </div>
            </section>
        </main>
    )
}

