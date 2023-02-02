import { createContext } from 'react';
import useProductValue from '../hooks/useProductValue';
import { IStateProduct } from '../interfaces/Product/IStateProduct.type';
const ProductContext = createContext<IStateProduct | {}>({});

function ProductProvider(props: any) {
    const useProvider = useProductValue();

    return (
        <ProductContext.Provider value={useProvider}>
            {props.children}
        </ProductContext.Provider>
    );
}

export { ProductContext, ProductProvider };