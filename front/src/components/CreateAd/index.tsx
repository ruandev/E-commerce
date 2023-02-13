import { FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Textarea } from '@chakra-ui/react';
import styles from "./styles.module.scss";
export default function CreateAt() {
  return (
      <main className={styles.main}>
          <section>
          <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='text'/>
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
          </section>
    </main>
  )
}

