import styles from "./styles.module.scss"
import Trash from "../../assets/trash.svg"
import Pencil from "../../assets/pencil.svg"
import { products } from '../../products'
import { useState } from 'react'
interface Props {
    setModalDeleteProduct: any
}
export default function MyProducts({setModalDeleteProduct}: Props) {
    function handleDeleteProduct(product: any) {
        setModalDeleteProduct(true)
        console.log(product)
    }
    return (
        <tbody className={styles.tbody}>
        {products.map((product: any) => {
            return <tr key={product.id}>
            <td className={styles.tdImage}><img src={product.image} alt={product.name}/></td>
                <td>{product.title}</td>
              <td>{product.stock}</td>
              <td>{product.sold}</td>
              <td>{product.price}</td>
              <td className={styles.btns}>
              <img src={Pencil} alt="editar"/>
              <img src={Trash} alt="excluir" onClick={() => handleDeleteProduct(product)} />
              </td>  
            </tr>          
        })}
        </tbody>    
    )
}