<script setup>
import ProductList from './components/ProductList.vue'
import ProductCart from './components/ProductCart.vue'
import newComp from './components/newComp.vue'
import { ref, reactive } from 'vue'

let data = [
  { name: 'Tent', price: 40000 },
  { name: 'Tarp', price: 50000 },
  { name: 'Table', price: 70000 }
]
// let data = [
//   { name: 'Strawberry', price: 4000 },
//   { name: 'Banana', price: 5000 },
//   { name: 'Melon', price: 7000 },
//   { name: 'Pineapple', price: 1000 },
//   { name: 'apple', price: 4000 }
// ]

const productList = ref(data)
const discountRate = ref(0.2)
const productCart = reactive([])
const fromChild = (product, discountRate) => {
  console.log(discountRate)
  productCart.push(product)
}
</script>

<template>
  <h1>App</h1>
  <product-list
    v-bind:product-list="productList"
    :discount-rate="discountRate"
    v-on:call-parent="fromChild"
  ></product-list>
  <!-- <new-Comp v-bind:product-list="newComp"></new-Comp> -->
  <h1>Cart</h1>
  <product-cart v-bind:cart="productCart"></product-cart>
  <!-- <ul>
    <li v-for="(product, index) in cart" :key="index">{{ product.name }}, {{ product.price }}</li>
  </ul> -->
</template>

<style scoped></style>
