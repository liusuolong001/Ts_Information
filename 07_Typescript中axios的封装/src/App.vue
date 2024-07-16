<template>
  <div class="wrapper">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getVueApi } from './api/vue'
import { getReactApiMethod } from './api/react'
const message = ref('TS')

onMounted(async () => {
  // const res = await getVueApi()
  // console.log(res)
  getReactApiMethod()
    .then((result) => {
      console.log('result', result)
    })
    .catch((err) => {})
})
</script>

<style scoped></style>
