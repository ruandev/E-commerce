import { useState } from 'react';
export default function useProductValue() {
    const [productDetail, setProductDetail] = useState({})
    return {
        productDetail,
        setProductDetail
    };
}