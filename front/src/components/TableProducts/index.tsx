import { Button, Table, TableContainer,  Th, Thead, Tr } from '@chakra-ui/react';
import styles from "./styles.module.scss";
import MyProducts from "../MyProducts"
import { useState } from 'react';
import DeleteProduct from '../Modals/DeleteProduct';
import { useNavigate } from 'react-router-dom';
import UncreatedProducts from '../UncreatedProducts';
export default function TableProducts() {
  const navigate = useNavigate()
  const [modalDeleteProduct, setModalDeleteProduct] = useState(false)
  return (
    <main className={styles.main}>
      {modalDeleteProduct && <DeleteProduct setModalDeleteProduct={setModalDeleteProduct} />}
      <section className={styles.createProduct}> 
          <p>Meus produtos</p>
          <Button onClick={() => navigate("/cadastrar-produto")}>Criar anúncio</Button>
      </section>
      <section className={styles.table}>
        <div className={styles.myProducts}>
          <TableContainer className={styles.tableContainer}>
            <Table>
              <Thead style={{position: "relative"}}>
                <Tr>
                <Th></Th>
                  <Th >Nome</Th>
                  <Th>Estoque</Th>
                  <Th>Vendidos</Th>
                  <Th>Valor</Th>
                  <Th>Editar/Apagar</Th>
                </Tr>
              </Thead>
              <UncreatedProducts/>
              {/* <MyProducts setModalDeleteProduct={setModalDeleteProduct} /> */}
            </Table>
          </TableContainer>
        </div>
      </section>
    </main>
  )
}
