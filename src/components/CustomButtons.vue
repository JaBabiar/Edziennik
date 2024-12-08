<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  text: {
    type: String,
    default: 'Show More',
  },
  link: {
    type: String,
  },
})
</script>

<template>
  <div class="border-t border-slate-500 p-5 box-border flex justify-end">
    <RouterLink :to="link ?? ''">
      <div class="rounded-xl bg-sky-500 px-4 py-2 w-fit">
        <span> {{ text }} </span>
      </div>
    </RouterLink>
  </div>
</template>
