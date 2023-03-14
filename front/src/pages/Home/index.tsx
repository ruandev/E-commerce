
import { useEffect, useState } from 'react'
import api from '../../api'
import HeaderHome from '../../components/HeaderHome'
import Products from '../../components/Products'
import headers from '../../utils/Token'
import styles from "./styles.module.scss"
import useStorage from '../../hooks/Storage/useStorage'
export default function Home() {
  const {storage} = useStorage()
  const [query, setQuery] = useState("")
  const [allProducts, setAllProducts] = useState([])
  async function handleProducts() {
		try {
		  const { data } = await api.get(`/product/findAll?title=${query}`, headers(storage?.token))
      setAllProducts(data)
      setQuery("")
		} catch (error) {
		  console.log(error)
		}
  }
  useEffect(() => {
    handleProducts()
  },[])
  return (
    <>
      <HeaderHome setQuery={setQuery} query={query} handleProducts={handleProducts}/>	
      <main className={styles.main}>
      <Products allProducts={allProducts} />
      </main>
      </>
  )
}

