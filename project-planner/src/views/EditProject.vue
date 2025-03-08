<template>
    <form @submit.prevent="handleSubmit">
        <label for="">Title:</label>
        <input type="text" v-model="title" required>
        <label for="">Details:</label>
        <textarea v-model="details" required></textarea>
        <button @click = "handleSubmit">Update Project</button>
    </form>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import router from '/src/router/index.js'
    const props = defineProps(['id'])
    const title = ref('')
    const details = ref('')
    const uri = ref('http://localhost:3000/projects/' + props.id)

    onMounted(()=>{
        fetch(uri.value)
            .then(res => res.json())
            .then(data=>{
                title.value = data.title
                details.value = data.details
            })
    })

    function handleSubmit(){
        fetch(uri.value,{
            method: 'PATCH',
            headers: {'Conent-Type': 'application/json'},
            body: JSON.stringify({ title: title.value, details: details.value,})
        }).then(() => {
            router.push('/')
        }).catch((err) => console.log(err))
    }
</script>

<style scoped>

</style>