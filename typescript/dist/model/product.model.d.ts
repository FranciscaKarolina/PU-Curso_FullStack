import { Category } from "./category.model";
export declare class Product {
    id: number;
    price: number;
    name: string;
    category: Category;
    discount: number;
    constructor(id: number, price: number, name: string, category: Category, discount: number);
    priceWithDiscountApplied(): number;
}
//# sourceMappingURL=product.model.d.ts.map