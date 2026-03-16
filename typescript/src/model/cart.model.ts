import { type Product } from "./product.model"
interface listProduct{
    product: Product,
    quantity: number
}
export class Cart{
    constructor(public listProduct:listProduct[]=[]){

    }

    addItem(product:Product, quantity:number){
        const existItem = this.listProduct.findIndex((item)=> item.product.name === product.name) > -1
        if(existItem){
            this.listProduct = this.listProduct.map((item)=>{
                if(item.product.name === product.name){
                    return {
                        product,
                        quantity:item.quantity + quantity
                    }
                }
                return item
            })
        }else{
            this.listProduct.push({product, quantity})
        }    
    }
    getTotalItems(): number{
        return this.listProduct.reduce((total, item)=>{
            return total + item.quantity
        }, 0)
    }
    getFinalPrice(): number{
        return this.listProduct.reduce((total, item) =>{
            return total + (item.product.price * item.quantity)
        }, 0)
    }
}