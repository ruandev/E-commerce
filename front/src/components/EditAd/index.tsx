import { Button, CircularProgress, FormControl, FormLabel, Input, Select, Textarea } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import UploadImage from "../../assets/addImage.svg";
import useDiscardChanges from "../../hooks/DiscardChanges/useDiscardChanges";
import useStorage from '../../hooks/Storage/useStorage';
import { IAddProduct } from '../../interfaces/IAddProduct.type';
import headers from '../../utils/Token';
import DiscardChanges from "../Modals/DiscardChanges";
import Published from "../Modals/Published";
import styles from "./styles.module.scss";
import useProductToEdit from '../../hooks/ProductToEdit/useProductToEdit';
export default function EditAt() {
  const {productToEdit} = useProductToEdit()
  const [form, setForm] = useState<any> ({
    title: productToEdit.title,
    category_id: productToEdit.category_id,
    product_description: productToEdit.product_description,
    unt_price: Number( productToEdit.unt_price),
    stock: Number(productToEdit.stock),
    url_image: productToEdit.url_image,
    path_image: productToEdit.path_image,
    path_image_delete: productToEdit.path_image
  })

  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const {storage} = useStorage()
  const {modalDiscardChanges, setModalDiscardChanges}: any = useDiscardChanges()
  const [file, setFile] = useState<any>("")
  const [modalPublished, setModalPublished] = useState(false)
  const [phrase, setPhrase] = useState({})
  const [circle, setCircle] = useState(false)
  async function handleCategories() {
    try {
      const { data } = await api.get('/categories', headers(storage?.token))
      setCategories(data)
    } catch (error) {
      return error
    }
  }
  useEffect(() => {
    handleCategories()
  },[])
  function handleInputs(e: any) { 
    setForm({ ...form, [e.target.name]: e.target.value})
  }
  async function handleUploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const { data } = await api.post(`/product/upload/${storage?.user.id}`, formData, headers(storage?.token, file))
     return data
    } catch (error) {
      console.log(error)
      return error
    }
    
  }
  

 async function handleSubmit(e: any) { 
   e.preventDefault()
   try {
     setCircle(true)
     const image = await handleUploadImage(file)
     form.url_image = image.url
     form.path_image = image.path
     form.stock = Number(form.stock)
     form.unt_price = Number(form.unt_price)
     console.log(form)
     setForm(form)
      await api.patch(`/product/update/${productToEdit.id}`, form, headers(storage?.token))
      setPhrase({
        h1: "O anúncio foi publicado",
       p: "O anúncio está ativo e o produto disponível para venda"
     })
     setModalPublished(true)
     setTimeout(() => {
       navigate("/minha-loja")
     }, 1000)
    
   } catch (error) {
      setCircle(false)
      console.log(error)
    }
  }
  return (
    <main className={styles.main}>
      <section>
        {modalDiscardChanges && <DiscardChanges />}
        {modalPublished && <Published setModalPublished={setModalPublished} phrase={phrase} />}
        <form onSubmit={handleSubmit}>
        <h1>Adicionar novo produto</h1>
          <div className={styles.titleAndCategory}>
          <FormControl className={styles.title}>
            <FormLabel>Título</FormLabel>
            <Input type='text' placeholder='Nome do produto' name="title" onChange={handleInputs} value={form.title} />
          </FormControl>
          <FormControl className={styles.select}> 
          <FormLabel>Categoria</FormLabel>
              <Select required name="category_id" onChange={handleInputs} value={form.category_id}>
                <option value="" disabled selected>Selecione...</option>
                {categories.map((categorie: any) => {
                  return <option key={categorie.id} value={categorie.id}>{categorie.description}</option>
                })}
            </Select>
            </FormControl>
          </div>
          <FormControl>
          <FormLabel>Descrição do produto</FormLabel>
            <Textarea placeholder='Ex.: Camiseta branca, Tamanho G' className={styles.textField} name="product_description" onChange={handleInputs} value={form.product_description} />
            </FormControl>
          <div className={styles.priceAndStock}>
            <FormControl>
              <FormLabel className={styles.price} >Preço</FormLabel>
              <Input type='number' placeholder='R$' name="unt_price" onChange={handleInputs} value={form.unt_price} />
            </FormControl>
          <FormControl>
              <FormLabel className={styles.stock}>Estoque</FormLabel>
              <Input placeholder='Ex: 10' type='number' name="stock" onChange={handleInputs} value={form.stock}  />
            </FormControl>
          </div>
          <p>* Aconselhamos adicionar fotos com o tamanho minímo de 115 x 115px para melhor resolução!</p>
          <FormControl>
            <FormLabel>Adicionar foto</FormLabel>
            <div className={styles.upload}>
            {file ? <img src={URL.createObjectURL(file)} width='100%' height='100%' alt="foto do produto" /> : <img src={form.url_image} alt="adicione a foto do seu produto" />}
              <Input type='file' name="" className={styles.inputFile} onChange={(e: any) =>  setFile(e.target.files[0])
             } />
            </div>
          </FormControl>
          <div className={styles.btns}>
          <Button style={{ color: "#fff", background: "#B7005C" }} type="submit">{circle ? <CircularProgress isIndeterminate color='green.400' thickness='10px' size='35px' /> : "Publicar anúncio"}</Button>
          <Button className={styles.btnCancel} onClick={() => setModalDiscardChanges(true)}>Cancelar</Button>
          </div>
        </form>
      </section>
    </main>
  )
}

