<template>
    <div>
        <h1>{{ filling.name }}</h1><h2>{{ filling.traditional }}</h2><h3>{{ filling.price }}</h3>
        <img :src="filling.img" alt=""/>
        <button @click="buy"></button>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 300px
}
</style>