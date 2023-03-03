import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Pix from "../../assets/pix.svg"
import PurpleCart from "../../assets/purple_cart.svg"
import useProduct from '../../hooks/Product/useProduct'
import useStorage from '../../hooks/Storage/useStorage'
import { IStateProduct } from '../../interfaces/IStateProduct.type'
import styles from "./styles.module.scss"

export default function DetailProduct() {
    const {storage} = useStorage()
const navigate = useNavigate()
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
            <p className={styles.introduction}>
                <span style={{cursor: "pointer"}} onClick={() => navigate("/pagina-inicial")}>Página inicial</span>
                &nbsp; &nbsp; 
                {'>'}
                &nbsp; &nbsp;
                <span className={styles.productTitle}>{productDetail?.title} </span></p>
            <section className={styles.product}>

                <img src={productDetail?.url_image} alt="produto" />
                <div className={styles.infoProduct}>
                    <h1>{productDetail?.title}</h1>
                    <p className={styles.soldBy}>Vendido e entregue por | <span>{storage?.merchant.store_name}</span></p>
                    <p className={styles.price}>{productDetail?.unt_price}</p>
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
                            <p>{productDetail?.stock} disponíveis</p>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <Button className={styles.cart}><img src={PurpleCart} alt="carrinho" />Adicionar ao carrinho</Button>
                    </div>
                </div>
            </section>
            <section className={styles.description}>
                <p className={styles.descriptionProduct}> Descrição do produto</p>
                <p>{productDetail?.product_description}</p>
            </section>
        </main>
    )
}
