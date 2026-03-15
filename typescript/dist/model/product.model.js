"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    title;
    price;
    img;
    category;
    discount;
    constructor(title, price, img, category, discount) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.category = category;
        this.discount = discount;
    }
    priceWithDiscountApplied() {
        return this.price * (1 - this.discount);
    }
}
exports.Product = Product;
//# sourceMappingURL=product.model.js.map