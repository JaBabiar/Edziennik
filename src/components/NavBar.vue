<script setup>
import { RouterLink, useRoute } from 'vue-router'

const isActive = (currentRoute) => {
  let route = useRoute()
  return route.path === currentRoute
}
</script>

<template>
  <nav
    class="hidden w-60 fixed top-0 left-0 flex-col display h-screen items-center justify-start bg-slate-900 text-slate-50 shadow-blue-gray-900/5 md:flex lg:w-80"
  >
    <div class="p-5 border-b-slate-700 border-b w-full box-border">Logo</div>

    <div class="p-5 flex flex-col w-full">
      <!-- Dashboard -->
      <RouterLink
        :class="[
          'block w-full rounded-md p-2 text-center transition-colors text-xl mb-2',
          isActive('/') ? 'bg-sky-950 hover:bg-sky-950' : '',
        ]"
        to="/"
      >
        <span>Dashboard</span>
      </RouterLink>
      <!-- Assignments -->
      <RouterLink
        :class="[
          'block w-full rounded-md p-2 text-center transition-colors text-xl mb-2',
          isActive('/assignments') ? 'bg-sky-950' : 'hover:bg-sky-950',
        ]"
        to="/assignments"
      >
        <span>Assignments</span>
      </RouterLink>
      <!-- Grades -->
      <RouterLink
        :class="[
          'block w-full rounded-md p-2 text-center transition-colors text-xl mb-2',
          isActive('/grades') ? 'bg-sky-950 hover:bg-sky-950' : 'hover:bg-sky-950',
        ]"
        to="/grades"
      >
        <span>Grades</span>
      </RouterLink>
      <!-- Teachers -->
      <RouterLink
        :class="[
          'block w-full rounded-md p-2 text-center transition-colors text-xl mb-2',
          isActive('/teachers') ? 'bg-sky-950 hover:bg-sky-950' : 'hover:bg-sky-950',
        ]"
        to="/teachers"
      >
        <span>Teachers</span>
      </RouterLink>
      <!-- Courses -->
      <RouterLink
        :class="[
          'block w-full rounded-md p-2 text-center transition-colors text-xl mb-2',
          isActive('/courses') ? 'bg-sky-950 hover:bg-sky-950' : 'hover:bg-sky-950',
        ]"
        to="/courses"
      >
        <span>Courses</span>
      </RouterLink>
    </div>
  </nav>
</template>
