<template>
    <h1>Ninja Reaction Timer</h1>
    <button @click ="start" :disabled="isPlaying">play</button>
    <Block v-if= "isPlaying" :delay="delay" @end="endGame"/>
    <Results v-if="showResults" :score="score"/>
</template>

<script setup>
    import {ref} from 'vue';
    import Block from '/src/components/Block.vue'
    import Results from '/src/components/Results.vue'
    const isPlaying = ref(false); // Equivalent to `isPlaying` in `data`
    const delay = ref(null); // Equivalent to `delay` in `data`
    const score = ref(null);
    const showResults = ref(false);
    function start(){
        delay.value = 2000 + Math.random() * 5000; // Update `delay`
        isPlaying.value = true // Update `isPlaying`
        showResults.value = false
    }
    function endGame(reactionTime){
        score.value = reactionTime
        isPlaying.value = false
        showResults.value = true
    }

</script>

<style scoped>
    #app{
        color:#444;
    }
</style>
