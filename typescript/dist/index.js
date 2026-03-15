"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_model_1 = require("./model/category.model");
const product_model_1 = require("./model/product.model");
const cart_model_1 = require("./model/cart.model");
const category = new category_model_1.Category("Instrument");
const product = new product_model_1.Product('Guitarra', 400, 'kjkjkjk', category, 0.2);
const cart = new cart_model_1.Cart();
cart.addItem(product, 2);
cart.addItem(product, 1);
console.log(cart.listProduct);
//# sourceMappingURL=index.js.map