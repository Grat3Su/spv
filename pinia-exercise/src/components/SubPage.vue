<template>
  <h1>Subpage</h1>
  {{ store.date }}
  <br />
  {{ store.formattedDate }}
</template>

<script setup>
import { useMainStore } from '@/stores/mainStore'
const store = useMainStore()
</script>
