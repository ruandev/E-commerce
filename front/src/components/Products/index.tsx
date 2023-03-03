import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../api';
import useProduct from '../../hooks/Product/useProduct';
import useStorage from '../../hooks/Storage/useStorage';
import { IStateProduct } from '../../interfaces/IStateProduct.type';
import headers from '../../utils/Token';
import styles from "./styles.module.scss";
export default function Products() {
  const {setProductDetail}: IStateProduct = useProduct()
  const [allProducts, setAllProducts] = useState([])
  const navigate = useNavigate();
  const { storage } = useStorage()
  function handleProduct(product: any) {
    setProductDetail(product)
    navigate("/detalhamento-produto")
  }
  useEffect(() => {
    handleProducts()
  }, [])
  
  async function handleProducts() {
  try {
    const {data} = await api.get("/product/findAll", headers(storage?.token))
    setAllProducts(data)
  } catch (error) {
    console.log(error)
  }
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
