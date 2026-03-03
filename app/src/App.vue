<template>
  <div>
<h2> dumpling maker </h2>
<div class=".container"></div>
<img src="" alt="">
  </div>
  <fillingcard v-for="filling in fillings " :key="filling.name" :filling = "filling">
    <button @click="cartAdd">{{ filling.price }}</button>
  </fillingcard>
  
</template>

<script setup>

import fillingcard from '@/components/cardsview.vue'

const fillings = [
  {name: 'lamb', traditional: 'very', price: '5 USD',}
  ,{name: 'beef', traditional: 'very', price: '7 USD'}
  ,{name: 'chicken', traditional: 'very', price: '10 USD'}
  ,{name: 'peppers', traditional: 'very', price: '2 USD'}
  ,{name: 'soup', traditional: 'kinda', price: '4 USD'}
  ,{name: 'tofu', traditional: 'kinda', price: '1 USD'}
  ,{name: 'pork', traditional: 'very', price:'8 USD'}
  ,{name: 'spinach', traditional: 'kinda', price: '1 USD'}
  ,{name: 'cherry', traditional: 'not really', price: '1 USD'}
  ,{name: 'shrimp', traditional: 'kinda', price: '6 USD'}
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