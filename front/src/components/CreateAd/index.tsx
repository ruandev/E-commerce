import { FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Textarea } from '@chakra-ui/react';
import styles from "./styles.module.scss";
import UploadImage from "../../assets/addImage.svg";
import { useState } from 'react';
export default function CreateAt() {
  const [uploadImage, setUploadImage]: any = useState("")
  function handleUploadImage(e: any) {
   setUploadImage(e.target.files[0])
  }
  
  return (
    <main className={styles.main}>
      <section>
        <form>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='text' />
          </FormControl>
          <Select placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Textarea placeholder='Here is a sample placeholder' />
          <FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormLabel>Amount</FormLabel>
            <NumberInput max={50} min={10}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Imagem</FormLabel>
            <div className={styles.upload}>
            {uploadImage ? <img src={URL.createObjectURL(uploadImage)} width='100%' height='100%' alt="foto do produto" /> : <img src={ UploadImage} alt="adicione a foto do seu produto" />}
              <Input type='file' name="" className={styles.file_customizada} onChange={ handleUploadImage} />
            </div>
          </FormControl>
        </form>
      </section>
    </main>
  )
}

