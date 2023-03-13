import { useState } from 'react';
export default function useValue() {
    const [productToEdit, setProductToEdit] = useState(false)

    return {
        productToEdit, setProductToEdit
    };
}