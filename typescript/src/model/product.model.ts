import { Category } from "./category.model";

export class Product {
    constructor (public id:number, public price:number, public name:string, public category:Category, public discount:number){}

    priceWithDiscountApplied():number{
        return this.price *(1 - this.discount)

    }
}