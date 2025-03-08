<template>
    <div class="filter-nav">
        <button :class="{active: current=== 'all'}" @click="updateFilter('all')">
            View All
        </button>
        <button @click="updateFilter('completed')" :class="{active: current=== 'completed'}">
            Completed
        </button>
        <button @click="updateFilter('ongoing')" :class="{active: current=== 'ongoing'}">
            Ongoing
        </button>
    </div>
</template>

<script setup>
    const props = defineProps(['current'])
    const emit = defineEmits(['filterChange'])
    function updateFilter(by){
        emit('filterChange',by)
    }
</script>

<style>
  .filter-nav button {
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
  }
  .filter-nav button.active {
    color: #555;
  }
  .filter-nav button.active{
    color: #555;
  }
</style>