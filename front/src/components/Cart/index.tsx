import { Button, Table, TableContainer, Th, Thead, Tr } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import LessThan from "../../assets/lessThan.svg";
import CartProducts from '../CartProducts';
import styles from "./styles.module.scss";
import { products } from '../../products';
import { useEffect, useState } from 'react';
import Checkout from '../Modals/Checkout';
import Published from '../Modals/Published';
import api from '../../api';
import headers from '../../utils/Token';
import useStorage from '../../hooks/Storage/useStorage';
import EmptyCart from '../EmptyCart';

export default function Cart() {
    const navigate = useNavigate();
    const [phrase, setPhrase] = useState({})
    const [productsInCart, setProductsInCart] = useState([])
    const [modalCheckout, setModalCheckout] = useState(false)
    const [modalFinished, setModalFinished] = useState(false)
    const { storage } = useStorage();

    async function allProductsInCart() {
        try {
        const {data} = await api.get(`/cart-product/allProducts/${storage.user.id}`, headers(storage.token))
      
        setProductsInCart(data.allProducts)
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        allProductsInCart()
      },[])
    //   console.log(productsInCart)
    return (
        <main className={styles.main}>
            {modalCheckout && <Checkout setModalCheckout={setModalCheckout} setPhrase={setPhrase} setModalFinished={setModalFinished} />}
            {modalFinished && <Published phrase={phrase} setModalPublished={setModalFinished}  />}
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
                        {!productsInCart ? "fuck you" : <EmptyCart />}
                        {/* {productsInCart.map((product: any) => {
                            return <CartProducts product={product} key={product.id} />})} */}
                    </Table>
                </TableContainer>
                <div className={styles.checkout}>
                    <Button className={styles.back} onClick={() => navigate('/pagina-inicial')}><img src={LessThan} alt="voltar"/></Button>
                    <div>
                    <p>Total (0 item): R$0,00</p>
                        <Button onClick={() => setModalCheckout(true)}>Continuar</Button>
                    </div>
                </div>
            </section>
        </main>
    )
}

