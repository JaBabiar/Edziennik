<script setup>
import { defineProps } from 'vue'
defineProps(['lecture'])
</script>

<template>
  <div class="w-2/3 bg-slate-800 text-slate-200 h-full p-6 overflow-y-auto">
    <div v-if="lecture">
      <h2 class="text-xl font-bold mb-4">{{ lecture.name }}</h2>
      <p class="mb-2">{{ lecture.description }}</p>
      <p><strong>Created At:</strong> {{ lecture.createdAt.date }}</p>
      <p><strong>Updated At:</strong> {{ lecture.updatedAt.date }}</p>
    </div>
    <div v-else class="text-slate-400">Select a lecture to view details.</div>
  </div>
</template>
