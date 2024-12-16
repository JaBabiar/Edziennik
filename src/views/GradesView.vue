<script setup>
import CustomTable from '@/components/GradesTable.vue'
import { getRequest } from '@/utils'
import { onMounted, ref } from 'vue'

const columns = ref([
  { key: 'Przedmioty', label: 'Przedmioty' },
  { key: 'Oceny', label: 'Oceny' },
])
const rows = ref([])
const data = ref(null)
const error = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  const { data: responseData, error: responseError } = await getRequest(
    'http://127.0.0.1:8000/api/student/7/getGrades',
  )

  data.value = responseData
  error.value = responseError

  if (responseData) {
    // Transform API response into rows for the table
    rows.value = Object.keys(responseData).map((courseName) => {
      const grades = responseData[courseName]

      return {
        course: courseName,
        grades: grades || '-',
      }
    })
  }

  isLoading.value = false
})
</script>

<template>
  <div class="p-4">
    <CustomTable :columns="columns" :rows="rows" v-if="!isLoading" />
    <div v-else>Loading...</div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>
