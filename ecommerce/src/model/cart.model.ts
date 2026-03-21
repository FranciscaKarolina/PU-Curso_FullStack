import type { Product } from "./product.model";
export class Cart{
    constructor(
        public list:Product[] = [],
        public total:number = 0,
    ){}
}