import { useContext } from 'react';
import { ProductToEditContext } from '../../context/ProductToEdit';


export default function useProductToEdit() {
    return useContext(ProductToEditContext);
}