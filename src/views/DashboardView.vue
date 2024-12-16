<script setup>
import DashboardCards from '@/components/DashboardCards.vue'
const name = 'John'
</script>

<template>
  <div class="p-5">
    <h1 class="mb-5">Witaj, {{ name }}</h1>
    <DashboardCards />
  </div>
</template>
