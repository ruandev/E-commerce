import { useNavigate } from "react-router-dom";
import useProduct from '../../hooks/useProduct';
import { IStateProduct } from '../../interfaces/Product/IStateProduct.type';
import { products } from '../../products';
import styles from "./styles.module.scss";
export default function Products() {
  const {setProductDetail}: any = useProduct()
  
  const navigate = useNavigate();

  function handleProduct(product: any) {
    setProductDetail({id: 2})
    // navigate("/")
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
