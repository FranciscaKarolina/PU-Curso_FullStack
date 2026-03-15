import { Category } from "./category.model";
export declare class Product {
    title: string;
    price: number;
    img: string;
    category: Category;
    discount: number;
    constructor(title: string, price: number, img: string, category: Category, discount: number);
    priceWithDiscountApplied(): number;
}
//# sourceMappingURL=product.model.d.ts.map