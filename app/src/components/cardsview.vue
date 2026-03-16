<template>
    <div>
        <h1>{{ filling.name }}</h1><h2>{{ filling.traditional }}</h2>
        <img :src="filling.img" alt=""/>
        <slot></slot>
    </div>

</template>

<script setup>
defineProps({
    filling:{
        type:Object,
        required: true,
    },
}) 



</script>

<style  scoped>
div{
    width: 22%; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
  padding-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

}
</style>