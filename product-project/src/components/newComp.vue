<template>
  <h1>제품</h1>

  <table>
    <thead>
      <th>제품</th>
      <th>가격</th>
    </thead>
    <tbody>
      <tr v-for="(product, index) in productList" v-bind:key="index">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps(['productList'])
</script>
