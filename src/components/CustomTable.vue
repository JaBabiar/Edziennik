<script setup>
defineProps({
  columns: {
    type: Array,
  },
  data: {
    type: Object,
  },
})
</script>

<template>
  <div class="bg-slate-800 overflow-hidden rounded-xl border border-slate-500">
    <table class="w-full border-collapse border-spacing-0">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="px-4 py-2 bg-slate-900 text-left text-xs font-medium text-slate-50 uppercase tracking-wider"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="px-4 py-2 text-slate-200">Testowy Test</td>
          <td class="px-4 py-2 text-slate-200">2</td>
        </tr>
        <tr>
          <td class="px-4 py-2 text-slate-200">Testowy Test</td>
          <td class="px-4 py-2 text-slate-200">2</td>
        </tr>
        <tr>
          <td class="px-4 py-2 text-slate-200">Testowy Test</td>
          <td class="px-4 py-2 text-slate-200">2</td>
        </tr>
        <tr>
          <td class="px-4 py-2 text-slate-200">Testowy Test</td>
          <td class="px-4 py-2 text-slate-200">2</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
