<script setup>
defineProps({
  grade: {
    type: Object,
  },
})
</script>

<template>
  <div class="p-5 box-border border-t border-slate-500 relative">
    <p>
      <span class="px-3 py-1 bg-green-300 border-slate-900 border text-slate-900 rounded-md">
        {{ grade.grade }}
      </span>
      ->
      {{ grade.name }}
    </p>
    <span class="text-sm text-slate-500">{{ grade.course }}</span>
    <span class="text-sm text-slate-600 top-5 right-5 absolute">{{ grade.dateAdded }}</span>
  </div>
</template>
