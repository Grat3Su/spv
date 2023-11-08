<script setup>
import { ref, reactive } from 'vue'
import FruitComponent from './components/FruitComponent.vue'
import FruitCart from './components/FruitCart.vue'

let data = [
  { name: 'Strawberry', price: 4000 },
  { name: 'Banana', price: 5000 },
  { name: 'Melon', price: 7000 },
  { name: 'Pineapple', price: 1000 },
  { name: 'apple', price: 4000 }
]

const fruitList = ref(data)
const disCount = ref(0.2)
const cart = reactive([])
const callParent = (fruit, discount) => {
  cart.push(fruit)
}
</script>

<template>
  <fruit-component
    v-bind:fruit-list="fruitList"
    :discount="disCount"
    v-on:call-parent="callParent"
  ></fruit-component>

  <h1>Cart</h1>
  <fruit-cart v-bind:cart="cart"></fruit-cart>
</template>

<script></script>

<style scoped></style>
