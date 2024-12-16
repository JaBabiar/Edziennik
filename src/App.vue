<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

const route = useRoute()
</script>

<template>
  <div v-if="route.path !== '/login'">
    <NavBar />

    <main class="md:ml-60 lg:ml-80 bg-slate-800">
      <RouterView />
    </main>
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>
