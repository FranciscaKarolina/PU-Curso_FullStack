<script lang="ts">
import { Product } from './model/product.model';
import ProductCard from './components/card/ProductCard.vue';
import { Cart } from './model/cart.model';

export default {
    data(){
        return{
            cart: new Cart(),
            products: [
                new Product('Guitarra', '22 trastes' , 200, 0.05), 
                new Product('Guitarra2', '22 trastes' , 200, 0.05),
            ],           
        }
    },
    methods:{
        addItem(){
            this.cart.total += 1
        },
        decItem(){
            this.cart.total -= 1
        },
    },
    components:{ProductCard},
}

</script>

<template>
    <main>
        <div v-for="product in products">
            <ProductCard :product="product" />
        </div>
    </main>
    <div>
        <h1>Carrinho</h1>
        <div v-for="item in cart.list">
            <h3>{{ item.title }}</h3>
        </div>
        <p>total: {{ cart.total }}</p>
    </div>
</template>  


<style></style>

