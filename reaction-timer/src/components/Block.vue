<template>
    <div class="block" v-if="showBlock" @click = "stopTimer">
        click me
    </div>
</template>

<script setup>
    import {ref,  onMounted} from 'vue';
    const showBlock = ref(false);
    const emit = defineEmits(['end'])
    var timer = ref(null);
    var reactionTime = ref(0);
    const props = defineProps({
        delay: {
            type: Number, // Expect a String
        },
    });
    function startTimer(){
        timer = setInterval(() => {
            reactionTime.value += 10;
        }, 10)
    }
    function stopTimer(){
        clearInterval(timer)
        emit('end', reactionTime.value)
    }



    onMounted(() => {
        setTimeout(() => {
            showBlock.value = true;
            startTimer();
        }, props.delay);
        
    })
</script>

<style scoped>
    .block{
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding:100px;
        margin: 40px auto;
    }
</style>