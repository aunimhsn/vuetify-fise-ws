<script setup>
import { products } from '../data/products.json'
import ProductItem from './ProductItem.vue'


</script>


<template>

    <v-container>
        <v-row>
            <v-col 
                v-for="product in products"
                :key="product.id" 
                cols="12" 
                sm="4"
            >
                <ProductItem 
                    :name="product.name" 
                    :quantity="product.quantity" 
                    :price="product.price" 
                />
            </v-col>
        </v-row>
    </v-container>
</template>