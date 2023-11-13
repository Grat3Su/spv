import { ref } from 'vue'
import { defineStore } from 'pinia'

export const UseMain = defineStore('mainStore', () => {
  const year = ref('1998')
  const month = ref('04')
  const day = ref('01')

  return { year, month, day }
})
