import { useState } from 'react'
import Pencil from "../../assets/pencil.svg"
import Trash from "../../assets/trash.svg"
import DeleteProduct from '../Modals/DeleteProduct'
import styles from "./styles.module.scss"
import useProductToEdit from '../../hooks/ProductToEdit/useProductToEdit'
import { useNavigate } from 'react-router-dom'
interface Props {
    products: any,
    handleProducts: any

}
export default function MyProducts({products, handleProducts}: Props) {
    const [modalDeleteProduct, setModalDeleteProduct] = useState(false)
    const [productForDelete, setProductForDelete] = useState(false)
    const { setProductToEdit } = useProductToEdit()
    const navigate = useNavigate()
    
    return (
        <tbody className={styles.tbody}>
            {modalDeleteProduct && <DeleteProduct setModalDeleteProduct={setModalDeleteProduct} productForDelete={productForDelete} handleProducts={handleProducts} />}
        {products.map((product: any) => {
            return <tr key={product.id}>
            <td className={styles.tdImage}><img src={product.url_image} alt={product.name}/></td>
                <td className={styles.title}>{product.title}</td>
              <td>{product.stock}</td>
              <td>20</td>
              <td>{product.unt_price}</td>
              <td className={styles.btns}>
                    <img src={Pencil} alt="editar" onClick={() => {
                        setProductToEdit(product)
                        navigate("/editar-produto")
                    }} />
                    <img src={Trash} alt="excluir" onClick={() => {
                        setProductForDelete(product)
                        setModalDeleteProduct(true)
                    }} />
              </td>  
            </tr>          
        })}
        </tbody>    
    )
}