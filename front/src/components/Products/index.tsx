import { useNavigate } from "react-router-dom";
import useProduct from '../../hooks/Product/useProduct';
import { IStateProduct } from '../../interfaces/IStateProduct.type';
import styles from "./styles.module.scss";
export default function Products({allProducts}: any) {
  const {setProductDetail}: IStateProduct = useProduct()
  
  const navigate = useNavigate();
  function handleProduct(product: any) {
    setProductDetail(product)
    navigate("/detalhamento-produto")
  }
  return (
    <main className={styles.main}>
      <section>
        {allProducts?.map((product: any) => {
          return <div key={product?.id} className={styles.product} onClick={()=> handleProduct(product)}>
            <img src={product?.url_image} alt="imagem" className={styles.img} />
            <p className={styles.title}>{product?.title}</p>
            <p className={styles.price}>{Number(product?.unt_price)?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
        })}
      </section>
    </main>
  )
}
