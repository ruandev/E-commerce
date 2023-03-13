import styles from "./styles.module.scss"
import X from "../../../assets/x.svg"
import { Button, CircularProgress, Toast } from '@chakra-ui/react'
import api from '../../../api'
import headers from '../../../utils/Token'
import useStorage from '../../../hooks/Storage/useStorage'
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
interface Props {
    setModalDeleteProduct: any
    productForDelete: any
    handleProducts: any
}
export default function DeleteProduct({ setModalDeleteProduct, productForDelete, handleProducts }: Props) {
    const { id } = productForDelete
    const { storage } = useStorage()
    const [circle, setCircle] = useState(false)
    const toast = useToast()
    function handleToast() {
        toast({
          title: 'Produto deletado com sucesso!',
          position: 'top-right',
          duration: 700,
          isClosable: true,
          status: 'success',
        })
      }
    async function handleDeleteProduct() {
        try {
        setCircle(true)
            await api.delete(`/product/delete/${id}`, headers(storage?.token))
            handleToast()
            handleProducts()
            setTimeout(() => {
            setModalDeleteProduct(false)
            }, 1000)
        } catch (error) {
        setCircle(false)
        console.log(error)
        }
        
    }
  return (
      <main className={styles.main}>
          <section>
              <img src={X} alt="x" onClick={() => setModalDeleteProduct(false)}/>
              <h1>Remover produto</h1>
              <p>Tem certeza que deseja remover esse produto do estoque? A ação não poderá ser desfeita.</p>
              <div>
                  <Button style={{background: " #B7005C", color: "#F3F3F3"}} onClick={handleDeleteProduct}>{circle ? <CircularProgress isIndeterminate color='green.400' thickness='10px' size='35px' />  : "Remover"}</Button>
                  <Button onClick={() => setModalDeleteProduct(false)}>Cancelar</Button>
              </div>
          </section>
    </main>
  )
}