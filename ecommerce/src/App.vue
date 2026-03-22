<script lang="ts">
import ProductCard from './components/card/ProductCard.vue';
import type { Product } from './model/product.model'; 
import type { CartItem } from './model/cart.model'; 

export default {
  components: { ProductCard },

  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Notebook',
          price: 3000,
          category: { id: 1, title: 'Eletrônicos' }
        },
        {
          id: 2,
          name: 'Monitor',
          price: 1500,
          category: { id: 1, title: 'Eletrônicos' }
        }
      ] as Product[],

      cartItems: [] as CartItem[]
    }
  },

  methods: {
    addToCart(product: Product) {
      const item = this.cartItems.find(i => i.product.id === product.id)

      if (item) {
        item.quantity++
      } else {
        this.cartItems.push({
          product,
          quantity: 1
        })
      }
    }
  },

  computed: {
    totalItems(): number {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0)
    },

    totalPrice(): number {
      return this.cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      )
    }
  }
}
</script>

<template>
  <main>
    <h1>Produtos</h1>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
    />

    <hr />

    <h2>Carrinho</h2>
    <p>Total de itens: {{ totalItems }}</p>
    <p>Total: R$ {{ totalPrice }}</p>

    <ul>
      <li v-for="item in cartItems" :key="item.product.id">
        {{ item.product.name }} x {{ item.quantity }}
      </li>
    </ul>
  </main>
</template>