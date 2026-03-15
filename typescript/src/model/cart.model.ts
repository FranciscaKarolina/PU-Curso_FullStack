import { type Product } from "./product.model"
interface listProduct{
    product: Product,
    quantity: number
}
export class Cart{
    constructor(public listProduct:listProduct[]=[]){
        
    }

    addItem(product:Product, quantity:number){
        this.listProduct = [{product, quantity}]
    }
}