import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({ count: 0 }),
    actions: {
      increment() {
        this.count++
      }
    }
})