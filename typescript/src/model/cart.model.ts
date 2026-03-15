import { type Product } from "./product.model"
interface listProduct{
    product: Product,
    quantity: number
}
export class Cart{
    constructor(public listProduct:listProduct[]=[]){

    }

    addItem(product:Product, quantity:number){
        this.listProduct.forEach((item)=>{
            if (item.product.title === product.title){
            const newItem = {
                product:item.product,
                quantity:item.quantity + quantity
            }
            return newItem
            }
            return item
        })
}
}