export interface Category {
  id: number
  title: string
}

export interface Product {
  id: number
  name: string
  price: number
  category: Category
}