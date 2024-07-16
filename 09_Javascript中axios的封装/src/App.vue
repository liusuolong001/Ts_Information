<!--
 * @Description: 
 * @Author: liusuolong001
 * @Date: 2024-07-12 15:51:28
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-16 09:40:15
-->
<script setup>
import { ref, onMounted } from 'vue'
import { getVueApiMethod } from '@/api/vue'
import { getReactApiMethod } from '@/api/react'
const message = ref('message')

onMounted(async () => {
  /* vue BaseUrl */
  const resultVue = await getVueApiMethod()
  console.log('resultVue', resultVue)

  /* react BaseUrl */
  const resultReact = await getReactApiMethod()
  console.log('resultReact', resultReact)
})
</script>

<template>
  <div>{{message}}</div>
</template>

<style scoped>
</style>
