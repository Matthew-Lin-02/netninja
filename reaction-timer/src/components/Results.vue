<template>
    <p>Reaction time: {{ score }} ms</p>
    <p class = "rank">{{ rank }}</p>
</template>

<script setup>
    const props = defineProps({
        score: {
            type: Number,
        },
    });
    import {ref, onMounted} from 'vue';
    var rank = ref(null)

    onMounted(()=>{
        if(props.score < 250){
            rank.value = 'Ninja Fingers'
        }else if (props.score < 400){
            rank.value = 'Rapid Reflexes'
        }else {
            rank.value = 'Snail pace...'
        }
    });
</script>

<style>
    .rank{
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>