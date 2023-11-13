<template>
  <h1>MainPage</h1>
  {{ store.year }} {{ store.month }} {{ store.day }}
</template>

<script setup>
import { UseMain } from '../stores/mainStore'
const store = UseMain()
</script>
