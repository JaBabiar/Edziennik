<script setup>
import GradeBox from './GradeBox.vue'
defineProps({
  columns: {
    type: Object,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  {{ console.log(columns) }}
  <div class="bg-slate-800 overflow-hidden rounded-xl border border-slate-500">
    <table class="w-full border-collapse border-spacing-y-3">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="px-4 py-2 bg-slate-900 text-left text-xs font-medium text-slate-50 uppercase tracking-wider"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
          :key="row.przedmiot"
          class="my-5 border-b border-slate-500 last:border-b-0"
        >
          <td class="p-2">
            {{ console.table(row) }}
            {{ row.course }}
          </td>
          <td class="flex justify-start gap-2 p-2 flex-wrap">
            <GradeBox :grade="grade" v-for="grade in row.grades" :key="grade.id" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
