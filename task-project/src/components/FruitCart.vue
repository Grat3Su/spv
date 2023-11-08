<template>
  <h1>Fruit</h1>
  <ul>
    <li v-for="(fruit, index) in cart" :key="index">{{ fruit.name }}, {{ fruit.price }}</li>
  </ul>
</template>

<script setup>
const props = defineProps(['cart'])
</script>
