<script setup>
import AssignmentList from '@/components/AssignmentList.vue'
import { onMounted, ref } from 'vue'
import { getRequest } from '@/utils'

const data = ref(null)
const error = ref(null)
const isLoading = ref(true)

const selectedAssignment = ref(null)
let assignmentsArray = []

const handleSelectAssignment = (assignment) => {
  selectedAssignment.value = assignment
  console.log(assignment)
}

onMounted(async () => {
  const {
    data: responseData,
    error: responseError,
    isLoading: responseLoading,
  } = await getRequest('http://127.0.0.1:8000/api/class/1/assignments')

  data.value = responseData // Assign the response data
  error.value = responseError // Assign the error (if any)
  isLoading.value = responseLoading // Update the loading state

  assignmentsArray = data.value.assignments
})
</script>

<template>
  <div class="flex h-screen relative">
    <div class="w-full md:w-5/12 overflow-y-auto h-screen">
      <AssignmentList
        v-if="!isLoading"
        :assignments="assignmentsArray"
        @select-assignment="handleSelectAssignment"
      />
    </div>

    <div
      class="md:w-7/12 border-l border-slate-500 h-screen absolute right-0 top-0 overflow-y-auto hidden md:block"
    >
      <div
        v-if="!selectedAssignment"
        class="text-slate-700 bold font-mono flex justify-center items-center box-border h-full p-4 text-center"
      >
        <h3 class="text-slate-700">Select task to display it's details</h3>
      </div>

      <div v-if="selectedAssignment" class="p-4">
        <h2 class="font-bold">
          {{ selectedAssignment.name }}
        </h2>
        <p class="text-slate-500">
          {{ selectedAssignment.course }} - {{ selectedAssignment.className }}
        </p>
        <h3 v-if="selectedAssignment.description" class="font-bold">Description</h3>
        <p>
          {{ selectedAssignment.description ?? '' }}
        </p>
        <p>Due Date: {{ selectedAssignment.dueDate ?? '' }}</p>
      </div>
    </div>
  </div>
</template>
