<script setup>
import AssignmentList from '@/components/AssignmentList.vue'
import { ref } from 'vue'

const assignments = ref([])

const selectedAssignment = ref(null)

const generateAssignment = () => {
  return {
    name: `Assignment ${Math.floor(Math.random() * 10) + 1}`,
    dueDate: '2024-12-10', // Adjust the due date as needed
    course: 'Random Course',
    eventType: 'test',
    description:
      'Description is very long and honesty idk if you will be able to see it as a wghoe',
  }
}

for (let i = 0; i < 80; i++) {
  assignments.value.push(generateAssignment())
}

const handleSelectAssignment = (assignment) => {
  selectedAssignment.value = assignment
}
</script>

<template>
  <div class="flex h-screen relative">
    <div class="w-full md:w-5/12 overflow-y-auto h-screen">
      <AssignmentList :assignments="assignments" @select-assignment="handleSelectAssignment" />
    </div>

    <div
      class="md:w-7/12 border-l border-slate-500 h-screen absolute right-0 top-0 overflow-y-auto hidden md:block"
    >
      <div class="p-4">
        <h2 class="font-bold">
          {{ selectedAssignment?.name || 'Right Box Placeholder' }}
        </h2>
        <div v-if="selectedAssignment">
          <p class="text-slate-500">{{ selectedAssignment.course }}</p>
          <h3 v-if="selectedAssignment.description" class="font-bold">Description</h3>
          <p>{{ selectedAssignment.description ?? '' }}</p>
          <p>Due Date: {{ selectedAssignment.dueDate ?? '' }}</p>
        </div>
        <p v-else>Select an assignment to view details.</p>
      </div>
    </div>
  </div>
</template>
