import styles from "./styles.module.scss"
import useProduct from '../../hooks/Product/useProduct'
import { IStateProduct } from '../../interfaces/Product/IStateProduct.type'
import Pix from "../../assets/pix.svg"
export default function DetailProduct() {
    const { productDetail }: IStateProduct = useProduct()
    
  return (
      <main className={styles.main}>
          <p>Página inicial {'>'} {productDetail?.title} </p>
          <section className={styles.product}>
              
              <img src={productDetail?.image} alt="" />
              <div>
              <h1>{productDetail?.title}</h1>
              <p className={styles.soldBy}>Vendido e entregue por |    <span style={{color: "v"}}> NOME DA LOJA</span> </p>
              <span className={styles.price}>{productDetail?.price}</span>
              <div>
                  <p>Formas de pagamento</p>
                  <p>Pix</p>  
                  <img src={Pix} alt="pix" />
              </div>
              <div>
                  <p>Quantidade</p>
                  <span>CONTADOR</span> <span>quantidade disponiveis</span>
              </div>
              </div>
          </section>
          <section>{productDetail?.description}</section>
          <section>Other products</section>
          
    </main>
    )
}
