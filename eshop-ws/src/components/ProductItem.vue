<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart.js'

const props = defineProps(['name', 'quantity', 'price'])
const cartStore = useCartStore()

let quantityLimit = props.quantity
function addToCart() {
  if (quantityLimit) {
    cartStore.increment()
    quantityLimit--
  }
}

</script>
<template>
  <v-card class="pa-2">
    <div>{{ name }}</div>
    <div>Quantity : {{ quantity }}</div>
    <div>Price : {{ price }}€</div>

    <!-- <div>Compteur : {{ cartStore.count }}</div> -->

    <v-card-actions>
      <v-btn 
        v-if="quantity" 
        icon="mdi-plus" 
        class="bg-indigo-darken-4" 
        @click="addToCart()">
      </v-btn>
      <v-btn v-if="!quantity" icon="mdi-close" class="bg-grey" disabled></v-btn>
    </v-card-actions>
  </v-card>
</template>

