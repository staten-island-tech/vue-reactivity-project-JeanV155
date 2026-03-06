<template>
  <div>
<h2> dumpling maker </h2>
<div class=".container"></div>
<img src="" alt="">
  </div>
  <fillingcard v-for="filling in fillings " :key="filling.name" :filling = "filling">
    <button @click="cartAdd(filling.price)">{{ filling.price }} USD</button>
  </fillingcard>
 
  <h3> your order </h3>
  <ul>
    <li v-for="value in source"</li>
  </ul>
</template>

<script setup>

import fillingcard from '@/components/cardsview.vue'
import { ref, render, toDisplayString } from 'vue'
const fillings = [
  {name: 'lamb', traditional: 'very', price: 5}
  ,{name: 'beef', traditional: 'very', price: 7}
  ,{name: 'chicken', traditional: 'very', price: 10 }
  ,{name: 'peppers', traditional: 'very', price: 2 }
  ,{name: 'soup', traditional: 'kinda', price: 4}
  ,{name: 'tofu', traditional: 'kinda', price: 1}
  ,{name: 'pork', traditional: 'very', price:8}
  ,{name: 'spinach', traditional: 'kinda', price: 1}
  ,{name: 'cherry', traditional: 'not really', price: 1}
  ,{name: 'shrimp', traditional: 'kinda', price: 6 }
]








</script>

<style scoped>
.card-img {
  width: 100%;
  height: 200px;           
  object-fit: cover;     
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>