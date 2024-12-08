<script setup>
import { limit } from '@/utils.js'
defineProps({
  assignments: Object,
})
</script>

<template>
  <div
    class="w-full p-5 border-b border-slate-500 hover:bg-slate-700 box-border relative"
    v-for="assignment in assignments"
    :key="assignment.name"
    @click="$emit('select-assignment', assignment)"
  >
    <p>{{ assignment.name }}</p>
    <span class="text-slate-500 text-sm"> {{ limit(assignment.description, 24) }}</span>
    <span class="absolute text-slate-500 right-5 top-5 text-sm"> {{ assignment.dueDate }}</span>
  </div>
</template>
