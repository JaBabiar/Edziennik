<script setup>
defineProps({
  title: {
    type: String,
    default: 'Card',
  },
})
</script>

<template>
  <div class="border border-slate-500 rounded-xl">
    <h3 class="p-5">{{ title }}</h3>
    <div>
      <slot> </slot>
    </div>
  </div>
</template>
