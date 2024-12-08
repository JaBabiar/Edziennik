<script setup>
import { ref } from 'vue'
import DashboardCard from './DashboardCard.vue'
import AssignmentTile from './AssignmentTile.vue'
import GradeTile from './GradeTile.vue'
import CustomButtons from './CustomButtons.vue'

const assignments = ref([])
const grades = ref([])
const generateAssignment = () => {
  return {
    name: `Assignment ${Math.floor(Math.random() * 10) + 1}`,
    dueDate: '2024-12-10', // Adjust the due date as needed
    course: 'Random Course',
    eventType: 'test',
  }
}

for (let i = 0; i < 3; i++) {
  assignments.value.push(generateAssignment())
}

const generateGrades = () => {
  return {
    name: `Assignment ${Math.floor(Math.random() * (6 - 1 + 1) + 1)}`,
    dateAdded: '2024-12-10', // Adjust the due date as needed
    course: 'Random Course',
    gradeType: 'test',
    weight: Math.floor(Math.random() * (3 - 1 + 1) + 1),
    grade: Math.floor(Math.random() * (6 - 1 + 1) + 1),
  }
}

for (let i = 0; i < 3; i++) {
  grades.value.push(generateGrades())
}
</script>

<template>
  <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
    <!-- Assignments --->
    <DashboardCard title="Assignments">
      <AssignmentTile
        :assignment="assignment"
        v-for="assignment in assignments"
        :key="assignment"
      />
      <CustomButtons link="/assignments" />
    </DashboardCard>
    <!-- Grades --->
    <DashboardCard title="Grades">
      <GradeTile :grade="grade" v-for="grade in grades" :key="grade" />
      <CustomButtons link="/grades" />
    </DashboardCard>
    <!-- Courses --->
    <DashboardCard title="Courses">
      <CustomButtons link="/courses" />
    </DashboardCard>
  </div>
</template>
