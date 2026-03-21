<script lang="ts">
import { Product } from './model/product.model';

export default {
    data(){
        return{
            cart:{
                total:0
            },
            products: [
                new Product('Guitarra', '22 trastes' , 200, 0.05), 
                new Product('Guitarra', '22 trastes' , 200, 0.05),
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
}

</script>

<template>
    <main>
        


        <article>
            <h1>Carrinho</h1>
            <p>total:{{ cart.total + 1}}</p>
        </article>
        <button @click="addItem()">Adicionar</button>
        <button @click="decItem()">Decrementar</button>
    </main>
</template>  


<style></style>

