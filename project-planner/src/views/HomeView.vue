<template>
    <div class="home">
        <FilterNav @filterChange="(by) => current = by" :current="current"/>
        <div v-if="projects.length">
            <div v-for="project in filteredProjects" :key="project.id">
                <SingleProject :project = "project" @delete ="handleDelete" 
                @complete = "handleComplete"/>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted,computed } from 'vue'
import SingleProject from '@/components/SingleProject.vue';
import FilterNav from '@/components/FilterNav.vue';
const current  = ref('all')
const projects = ref([])
const filteredProjects  = computed(() => {
    switch(current.value){
        case 'all':
            return projects.value
        case 'completed':
            return projects.value.filter(project => project.complete )
        case 'ongoing':
            return projects.value.filter(project => !project.complete)
    }
})
onMounted(()=>{
    fetch('http://localhost:3000/projects')
        .then(res=> res.json())
        .then(data=> projects.value = data)
        .catch(err => console.log(err.message))
})

function handleDelete(id){
    projects.value = projects.value.filter((project)=> {
        return project.id !== id
    })
}

function handleComplete(id){
    let p = projects.value.find(project => {
        return project.id === id
    })
    p.complete = !p.complete
}

</script>