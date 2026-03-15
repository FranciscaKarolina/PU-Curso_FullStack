"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_model_1 = require("./model/category.model");
const product_model_1 = require("./model/product.model");
const category = new category_model_1.Category("Instrument");
const product = new product_model_1.Product('Guitarra', 400, 'kjkjkjk', category, 0.2);
console.log("Produto nome", product.priceWithDiscountApplied());
//# sourceMappingURL=index.js.map