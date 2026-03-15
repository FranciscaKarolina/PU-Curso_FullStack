import { Category } from "./model/category.model"
import {Product} from "./model/product.model"

const category = new Category("Instrument")
const product = new Product('Guitarra', 400, 'kjkjkjk', category, 0.2) 

console.log("Produto nome", product.priceWithDiscountApplied())