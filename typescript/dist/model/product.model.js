"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    id;
    price;
    name;
    category;
    discount;
    constructor(id, price, name, category, discount) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.category = category;
        this.discount = discount;
    }
    priceWithDiscountApplied() {
        return this.price * (1 - this.discount);
    }
}
exports.Product = Product;
//# sourceMappingURL=product.model.js.map