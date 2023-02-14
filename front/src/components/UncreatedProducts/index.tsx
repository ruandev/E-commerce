import styles from "./styles.module.scss"
import NoProducts from "../../assets/no-products.svg"
export default function UncreatedProducts() {
  return (
      <tbody className={styles.main}>
          <tr>
              <img src={NoProducts} alt="produtos nao encontrados" />
              <h1>Estoque vazio</h1>
              <p>Parece que sua loja ainda não possui produtos à venda</p>
          </tr>
             
         
   </tbody>
  )
}
