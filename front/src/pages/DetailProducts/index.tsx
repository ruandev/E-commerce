import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import Pix from "../../assets/pix.svg"
import useProduct from '../../hooks/Product/useProduct'
import { IStateProduct } from '../../interfaces/Product/IStateProduct.type'
import styles from "./styles.module.scss"
import PurpleCart from "../../assets/purple_cart.svg"
export default function DetailProduct() {
   
    const { productDetail }: IStateProduct = useProduct()
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
            <p className={styles.introduction}>Página inicial {'>'} {productDetail?.title} </p>
            <section className={styles.product}>

                <img src={productDetail?.image} alt="produto" />
                <div>
                    <h1>{productDetail?.title}</h1>
                    <p className={styles.soldBy}>Vendido e entregue por | <span>NOME DA LOJA</span></p>
                    <p className={styles.price}>{productDetail?.price}</p>
                    <p className={styles.paymentMethod}>Formas de pagamento</p>
                    <img className={styles.pix} src={Pix} alt="pix" />
                    <div className={styles.quantity}>
                        <p>Quantidade</p>
                        <div className={styles.count}>
                            <div>
                                <span onClick={() => handleCount('-')}>-</span>
                                {number}
                                <span
                                onClick={() => handleCount('+')}>+</span>
                                
                            </div>
                            <p>20 disponíveis</p>
                        </div>    
                    </div>
                    <div className={styles.buttons}>
                        <Button className={styles.cart}><img src={PurpleCart} alt="carrinho"/>Adicionar ao carrinho</Button>
                        <Button>Button</Button>
                    </div>
                </div>
            </section>
            <section>{productDetail?.description}</section>
            <section>Other products</section>

        </main>
    )
}
