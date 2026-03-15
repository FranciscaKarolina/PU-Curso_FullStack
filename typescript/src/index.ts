import { Category } from "./model/category.model"
import {Product} from "./model/product.model"

const category = new Category("Instrument")
const product = new Product('Guitarra', 400, 'kjkjkjk', category) 

console.log("Produto nome", product.category.title)