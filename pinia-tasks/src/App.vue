<template>
    <main>

        <!-- heading  -->
        <header>
            <img src="@/assets/pinia-logo.svg" alt="pinia-logo">
            <h1>Pinia Tasks</h1>
        </header>

        <!-- new Task form -->
        <div class="new-task-form">
            <TaskForm />
        </div>
        <!-- filter -->
         <nav class ="filter">
            <button @click="filter = 'all'">all tasks</button>
            <button @click="filter = 'favs'">favs</button>
         </nav>

        <!-- loading -->
         <div class="loading" v-if="loading">Loading tasks...</div>
        <!-- task list -->
         <div class="task-list" v-if = "filter === 'all'">
            <p>You have {{ totalCount }} tasks left to do</p>
            <div v-for="task in tasks">
                <TaskDetails :task="task"/>
            </div>
         </div>

         <div class="task-list" v-if="filter==='favs'">
            <p>You have {{ favCount }} favs left to do</p>
            <div v-for="task in favs">
                <TaskDetails :task="task"/>
            </div>
         </div>

         <button @click = "taskStore.$reset">reset state</button>
    </main>
</template>

<script setup lang="ts">
import TaskForm from './components/TaskForm.vue'
import {useTaskStore} from '@/stores/TaskStore'
import TaskDetails from '@/components/TaskDetails.vue'
import {ref} from 'vue'
import { storeToRefs } from 'pinia'

const taskStore = useTaskStore()
taskStore.getTasks()
const filter = ref('all')

const {tasks, loading, favs, totalCount, favCount} = storeToRefs(taskStore)

</script>