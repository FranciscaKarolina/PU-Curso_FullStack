<script lang="ts">

export default {
    data(){
        return{
            cart:{
                total:0
            },
            product:{
                title: "Guitarra",
                description:"22 trastes em aço",
                price:20,
                discount:0.2
            }

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
            <h1>{{ product.title}}</h1>
            <p>{{ product.description }}</p>
            <p>R$:{{product.price.toFixed(2).replace(',', ',')}}</p>
            <p>total:{{ cart.total + 1}}</p>
        </article>
        <button @click="addItem()">Adicionar</button>
        <button @click="decItem()">Decrementar</button>




        <article>
            <h1>Carrinho</h1>
            <p>total:{{ cart.total + 1}}</p>
        </article>
        <button @click="addItem()">Adicionar</button>
        <button @click="decItem()">Decrementar</button>
    </main>
</template>  


<style></style>

