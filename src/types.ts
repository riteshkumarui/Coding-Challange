import { Product } from "./components/products/types";

export type ProductResponse = {
    id: string,
    name: string,
    categoryType: string,
    groups: Array<Product>,
    totalPages: number,
    categories: Array<any>
}