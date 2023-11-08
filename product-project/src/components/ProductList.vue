<template>
  <h1>Product List</h1>
  <table>
    <thead>
      <th>제품명</th>
      <th>가격</th>
      <th>할인률</th>
      <th>카트에 담기</th>
    </thead>
    <tbody>
      <tr v-for="(product, index) in productList" v-bind:key="index">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.price - discountRate * product.price }}</td>
        <td><button @click="addCart(product, discountRate)">addCart</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps(['productList', 'discountRate']) //object, list
const emit = defineEmits(['call-parent'])
const addCart = (product, discountRate) => {
  //이벤트 발생(emit)
  emit('call-parent', product, discountRate)
}
</script>
