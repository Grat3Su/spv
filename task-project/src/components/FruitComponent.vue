<template>
  <h1>Fruit</h1>
  <table>
    <thead>
      <th>과일명</th>
      <th>가격</th>
      <th>할인가</th>
    </thead>
    <tbody>
      <tr v-for="(fruit, index) in fruitList" v-bind:key="index">
        <td>{{ fruit.name }}</td>
        <td>{{ fruit.price }}</td>
        <td>{{ fruit.price - discount * fruit.price }}</td>
        <td><button @click="addCart(fruit, discount)">addCart</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps(['fruitList', 'discount'])
const emit = defineEmits(['call-parent'])
const addCart = (fruit, discount) => {
  console.log(fruit)
  console.log(discount)
  emit('call-parent', fruit, discount)
}
</script>
