"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    listProduct;
    constructor(listProduct = []) {
        this.listProduct = listProduct;
    }
    addItem(product, quantity) {
        const existItem = this.listProduct.findIndex((item) => item.product.name === product.name) > -1;
        if (existItem) {
            this.listProduct = this.listProduct.map((item) => {
                if (item.product.name === product.name) {
                    return {
                        product,
                        quantity: item.quantity + quantity
                    };
                }
                return item;
            });
        }
        else {
            this.listProduct.push({ product, quantity });
        }
    }
    getTotalItems() {
        return this.listProduct.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    }
    getFinalPrice() {
        return this.listProduct.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }
}
exports.Cart = Cart;
//# sourceMappingURL=cart.model.js.map