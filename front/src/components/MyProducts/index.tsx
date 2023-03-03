import Pencil from "../../assets/pencil.svg"
import Trash from "../../assets/trash.svg"
import { products } from '../../products'
import styles from "./styles.module.scss"
interface Props {
    setModalDeleteProduct: any,
    products: any,

}
export default function MyProducts({setModalDeleteProduct, products}: Props) {
    function handleDeleteProduct(product: any) {
        setModalDeleteProduct(true)    
    }
    
    return (
        <tbody className={styles.tbody}>
        {products.map((product: any) => {
            return <tr key={product.id}>
            <td className={styles.tdImage}><img src={product.url_image} alt={product.name}/></td>
                <td>{product.title}</td>
              <td>{product.stock}</td>
              <td>20</td>
              <td>{product.unt_price}</td>
              <td className={styles.btns}>
              <img src={Pencil} alt="editar"/>
              <img src={Trash} alt="excluir" onClick={() => handleDeleteProduct(product)} />
              </td>  
            </tr>          
        })}
        </tbody>    
    )
}