import styles from "./styles.module.scss"
import { products } from '../../products'
export default function Products() {
    return (
      <main className={styles.main}>
        <section>
          {products.map((product: any) => {
            return <div key={product?.id} className={styles.product}>
              <img src={product?.image} alt="imagem" className={styles.img} />
              <p className={styles.title}>{product?.title}</p>
              <p className={styles.price}>{product?.price}</p>
            </div>
        })}
        </section>
      </main>
  )
}
