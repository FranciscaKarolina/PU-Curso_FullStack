import { Category } from "./model/category.model"
import {Product} from "./model/product.model"
import { Cart } from "./model/cart.model"
import { User, Role} from "./model/user.model"

const category = new Category(1, "Instrument")

const product = new Product(1, 400, 'Guitarra', category, 0.2) 

const user = new User(1, "João", "joao@email.com", Role.ADMIN)

const cart = new Cart()
cart.addItem(product, 2)
cart.addItem(product, 2)

console.log("Itens no  carrinho:", cart.getTotalItems())
console.log("Preço final:", cart.getFinalPrice())



