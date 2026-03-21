<template> 
    <article>
        <h1>{{ product.title}}</h1>
        <p>{{ product.description }}</p>
        <p>R$:{{product.price.toFixed(2).replace(',', ',')}}</p>
        <p>total:{{ cart.total + 1}}</p>
    </article>
</template>
<script lang="ts">
import { Product } from '@/model/product.model';
import { defineComponent } from 'vue';

export default defineComponent({
    props:{
        product:{
            type:Object,
            default:new Product('Guitarra', '22 trastes' , 200, 0.05), 
        }
    }
})
</script>