<script setup>
defineProps({
  assignment: {
    type: Object,
  },
})
</script>

<template>
  <div class="p-5 box-border border-t border-slate-500 relative">
    <p>{{ assignment.name }}</p>
    <span class="text-sm text-slate-500">{{ assignment.course }}</span>
    <span class="text-sm text-slate-600 top-5 right-5 absolute">{{ assignment.dueDate }}</span>
  </div>
</template>
