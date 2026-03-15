"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    listProduct;
    constructor(listProduct = []) {
        this.listProduct = listProduct;
    }
    addItem(product, quantity) {
        this.listProduct = [{ product, quantity }];
    }
}
exports.Cart = Cart;
//# sourceMappingURL=cart.model.js.map