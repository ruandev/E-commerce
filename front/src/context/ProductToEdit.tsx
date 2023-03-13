import { createContext } from 'react';
import useProductToEditValue from '../hooks/ProductToEdit/useValue';
// import { IStateProductToEdit } from '../interfaces/ProductToEdit/IStateProductToEdit.type';
const ProductToEditContext = createContext<any | {}>({});

function ProductToEditProvider(props: any) {
    const useProvider = useProductToEditValue();

    return (
        <ProductToEditContext.Provider value={useProvider}>
            {props.children}
        </ProductToEditContext.Provider>
    );
}

export { ProductToEditContext, ProductToEditProvider };