import { Dispatch, SetStateAction } from 'react';
import { IProduct } from './IProduct.type';

export interface IStateProduct {
    setProductValue?: Dispatch<SetStateAction<{} | undefined>>;
    productValue?: IProduct | undefined;
}