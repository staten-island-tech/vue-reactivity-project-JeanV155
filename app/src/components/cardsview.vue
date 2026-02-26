<template>
    <div>
        <h2>{{ filling.name }}</h2>
     
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