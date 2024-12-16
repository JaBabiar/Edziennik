<script setup>
import { defineEmits, defineProps } from 'vue'

defineEmits(['toggle-category', 'select-lecture'])
defineProps(['data', 'activeCategory'])
</script>

<template>
  <div
    class="w-1/3 bg-slate-900 text-slate-50 h-full p-4 overflow-y-auto border-r border-slate-800"
  >
    <ul>
      <li v-for="(lectures, category) in data" :key="category">
        {{ console.log(lectures, 'cat: ', category) }}
        <div
          class="font-bold cursor-pointer mb-2 hover:text-slate-200"
          @click="$emit('toggle-category', category)"
        >
          {{ category }}
        </div>
        <ul v-if="activeCategory == category" class="pl-4">
          <li
            v-for="lecture in lectures"
            :key="lecture.id"
            class="cursor-pointer py-1 hover:text-slate-200"
            @click="$emit('select-lecture', lecture)"
          >
            {{ lecture.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
