<script setup>
defineProps({
  grade: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-red-200 text-slate-950 w-fit py-1 px-2 rounded-md">
    <p>
      {{ grade.grade }}<sup>{{ grade.weight }}</sup>
    </p>
  </div>
</template>
