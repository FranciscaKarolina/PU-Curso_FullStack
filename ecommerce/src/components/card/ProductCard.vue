<script lang="ts">
import type { Product } from '@/model/product.model'; 

export default {
  props: {
    product: {
      type: Object as () => Product,
      required: true
    }
  },
  methods: {
    add() {
      this.$emit('add-to-cart', this.product)
    }
  }
}
</script>

<template>
  <div class="card">
    <h2>{{ product.name }}</h2>
    <p>Preço: R$ {{ product.price }}</p>
    <p>Categoria: {{ product.category.title }}</p>

    <button @click="add">Adicionar</button>
  </div>
</template>