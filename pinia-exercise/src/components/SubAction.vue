<template>
  <h1>SubAction.vue</h1>
  <button @click="ChangeYear">Change year</button>
  <button @click="ChangeMonth">Change month</button>
  <button @click="ChangeDay">Change day</button>
  <input type="text" v-model.lazy="store.day" />
</template>

<script setup>
//store를 변경
import { useMainStore } from '@/stores/mainStore'
const store = useMainStore()
const ChangeYear = () => store.setYear('1998')
const ChangeMonth = () => store.setMonth('04')
</script>
