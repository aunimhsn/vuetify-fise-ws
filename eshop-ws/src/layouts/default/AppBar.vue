<script setup>
import { useCartStore } from '../../stores/cart.js'

const cartStore = useCartStore()
</script>
<template>
  <v-app-bar class="bg-indigo-darken-4">
    <div class="pa-2">Eshop</div>
    <template v-slot:append>  
      <v-btn icon="mdi-cart"></v-btn>
      Cart : {{ cartStore.count }}
    </template>
  </v-app-bar>
</template>


