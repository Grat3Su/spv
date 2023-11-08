<template>
  <h1>Product List</h1>
  <ul>
    <li v-for="(product, index) in cart" :key="index">{{ product.name }}, {{ product.price }}</li>
  </ul>
</template>

<script setup>
const props = defineProps(['cart']) //object, list
</script>
