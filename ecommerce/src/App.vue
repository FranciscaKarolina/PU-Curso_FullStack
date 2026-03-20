<script lang="ts">

export default {
    data(){
        return{
            cart:{
                total:0
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
            <h1>Carrinho</h1>
            <p>total:{{ cart.total + 1}}</p>
        </article>
        <button @click="addItem()">Adicionar</button>
        <button @click="decItem()">Decrementar</button>
    </main>
</template>  


<style></style>

