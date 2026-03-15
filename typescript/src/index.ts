import { Category } from "./model/category.model"
import {Product} from "./model/product.model"
import { Cart } from "./model/cart.model"

const category = new Category("Instrument")
const product = new Product('Guitarra', 400, 'kjkjkjk', category, 0.2) 
const cart = new Cart()
cart.addItem(product, 2)
cart.addItem(product, 1)

console.log(cart.listProduct)

