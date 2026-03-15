import { Category } from "./category.model";

export class Product {
    constructor (public title:string, public price:number, public img:string, public category:Category){}
}