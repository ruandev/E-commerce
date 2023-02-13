import { Button, Table, TableContainer, Tbody, Td,  Th, Thead, Tr } from '@chakra-ui/react';
import styles from "./styles.module.scss";
import MyProducts from "../MyProducts"
export default function TableProducts() {
  return (
    <main className={styles.main}>
      <section className={styles.createProduct}> 
          <p>Meus produtos</p>
          <Button>Criar anúncio</Button>
      </section>
      <section className={styles.table}>
        <div className={styles.myProducts}>
          <TableContainer className={styles.tableContainer}>
            <Table>
              <Thead >
                <Tr >
                <Th></Th>
                  <Th >Nome</Th>
                  <Th>Estoque</Th>
                  <Th>Vendidos</Th>
                  <Th>Valor</Th>
                  <Th>Editar/Apagar</Th>
                </Tr>
              </Thead>
                <MyProducts/>
            </Table>
          </TableContainer>
        </div>
      </section>
    </main>
  )
}
