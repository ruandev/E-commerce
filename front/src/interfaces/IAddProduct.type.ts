export interface IAddProduct {
    title: string,
    category_id: string,
    product_description:string,
    unt_price: number,
    stock: number,
    url_image: string | undefined,
    path_image: string | undefined
}