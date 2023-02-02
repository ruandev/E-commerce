import { useNavigate } from "react-router-dom";
import useProduct from '../../hooks/Product/useProduct';
import { IStateProduct } from '../../interfaces/Product/IStateProduct.type';
import { products } from '../../products';
import styles from "./styles.module.scss";
export default function Products() {
  const {setProductDetail}: IStateProduct = useProduct()
  
  const navigate = useNavigate();

  function handleProduct(product: any) {
    setProductDetail(product)
    navigate("/detalhamento-produto")
  }

  return (
    <main className={styles.main}>
      <section>
        {products.map((product: any) => {
          return <div key={product?.id} className={styles.product} onClick={()=> handleProduct(product)}>
            <img src={product?.image} alt="imagem" className={styles.img} />
            <p className={styles.title}>{product?.title}</p>
            <p className={styles.price}>{product?.price}</p>
          </div>
        })}
      </section>
    </main>
  )
}
