import { Dispatch, SetStateAction } from 'react';
import { IProduct } from './IProduct.type';

export interface IStateProduct {
    setProductDetail?: any;
    productDetail?: IProduct | undefined;
}