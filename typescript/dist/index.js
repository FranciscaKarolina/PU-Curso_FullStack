"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_model_1 = require("./model/category.model");
const product_model_1 = require("./model/product.model");
const cart_model_1 = require("./model/cart.model");
const user_model_1 = require("./model/user.model");
const category = new category_model_1.Category(1, "Instrument");
const product = new product_model_1.Product(1, 400, 'Guitarra', category, 0.2);
const user = new user_model_1.User(1, "João", "joao@email.com", user_model_1.Role.ADMIN);
const cart = new cart_model_1.Cart();
cart.addItem(product, 2);
cart.addItem(product, 2);
console.log("Itens no  carrinho:", cart.getTotalItems());
console.log("Preço final:", cart.getFinalPrice());
//# sourceMappingURL=index.js.map