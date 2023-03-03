import { Button, Table, TableContainer,  Th, Thead, Tr } from '@chakra-ui/react';
import styles from "./styles.module.scss";
import MyProducts from "../MyProducts"
import { useEffect, useState } from 'react';
import DeleteProduct from '../Modals/DeleteProduct';
import { useNavigate } from 'react-router-dom';
import UncreatedProducts from '../UncreatedProducts';
import api from '../../api';
import headers from '../../utils/Token';
import useStorage from '../../hooks/Storage/useStorage';
export default function TableProducts() {
  const navigate = useNavigate()
  const [modalDeleteProduct, setModalDeleteProduct] = useState(false)
  const [products, setProducts] = useState([])
  const { storage, setStorage } = useStorage()

  useEffect(() => {
    handleProducts()
  }, [])
  
  async function handleProducts() {
  try {
    const {data} = await api.get("/product/findAll", headers(storage?.token))
    setProducts(data)
  } catch (error) {
    console.log(error)
  }
  } 


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
              {products ? <UncreatedProducts/> :
              <MyProducts setModalDeleteProduct={setModalDeleteProduct}  products={products} />}
            </Table>
          </TableContainer>
        </div>
      </section>
    </main>
  )
}
