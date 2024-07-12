<!--
 * @Description: 
 * @Author: liusuolong001
 * @Date: 2024-07-12 15:51:28
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-12 19:47:24
-->
<script setup>
import { ref, onMounted } from 'vue'
import { getVueApiMethod } from '@/api/vue'
import { getReactApiMethod } from '@/api/react'
const message = ref('message')

onMounted(() => {
  /* vue BaseUrl */
  getVueApiMethod()
    .then((result) => {
      console.log('resultVue', result)
    })
    .catch((err) => {})

  /* react BaseUrl */
  getReactApiMethod()
    .then((result) => {
      console.log('resultReact', result)
    })
    .catch((err) => {})
})
</script>

<template>
  <div>{{message}}</div>
</template>

<style scoped>
</style>
