<template>
    <form @submit.prevent="handleSubmit">
        <input 
        type="text"
        placeholder="I need to..."
        v-model = "newTask"
        >
        <button>Add</button>
    </form>
</template>

<script setup lang="ts">
    import { useTaskStore} from '@/stores/TaskStore'
    import type { Task } from '@/stores/TaskStore'
    import {ref} from 'vue'
    const newTask = ref('')
    const taskStore = useTaskStore()

    function handleSubmit():void{
        if (newTask.value.length > 0){
            const task: Task = {
                title: newTask.value,
                isFav:false,
                id: Math.floor(Math.random()*10000)
            }
            taskStore.addTask(task)
        }
        newTask.value = ''
    }

</script>

<style scoped>

</style>