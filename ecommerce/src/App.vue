<script lang="ts">
import { Product } from './model/product.model';
import ProductCard from './components/card/ProductCard.vue';

export default {
    data(){
        return{
            cart:{
                total:0
            },
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
</template>  


<style></style>

