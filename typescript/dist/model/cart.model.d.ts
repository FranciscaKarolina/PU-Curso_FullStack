import { type Product } from "./product.model";
interface listProduct {
    product: Product;
    quantity: number;
}
export declare class Cart {
    listProduct: listProduct[];
    constructor(listProduct?: listProduct[]);
    addItem(product: Product, quantity: number): void;
    getTotalItems(): number;
    getFinalPrice(): number;
}
export {};
//# sourceMappingURL=cart.model.d.ts.map