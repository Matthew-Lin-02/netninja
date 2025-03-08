<template>
    <div class ="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <span @click ="taskStore.deleteTask(task.id)" class="material-symbols-outlined">delete</span>
            <span @click ="taskStore.toggleFav(task.id)" :class="{active: task.isFav}"class="material-symbols-outlined">favorite</span>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useTaskStore } from '@/stores/TaskStore';

const props = defineProps(['task'])
const taskStore = useTaskStore()




</script>

<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>