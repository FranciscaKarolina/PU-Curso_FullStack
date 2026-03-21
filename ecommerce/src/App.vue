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
        addItem(product:Product){
            const existItem = this.cart.list.some((item)=>item.product.title === product.title)
            if(existItem){
                this.cart.list.map((item)=>{
                    if(item.product.title === product.title){
                        item.quantity +=1
                        return item
                    }else{
                        item
                    }
                })
                 this.cart.total += 1
            }else{
                this.cart.list.push({product, quantity:1})
                this.cart.total += 1
                 }
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
            <ProductCard :product="product" @on-click="addItem"/>
        </div>
    </main>
    <div>
        <h1>Carrinho</h1>
        <div v-for="item in cart.list">
            <h1>{{ item.product.title }}</h1>
            <p>{{ item.quantity }}</p>
        </div>
        <p>total: {{ cart.total }}</p>
    </div>
</template>  


<style></style>

