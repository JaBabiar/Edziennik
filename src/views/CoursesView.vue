<script setup>
import { ref, onMounted } from 'vue'
import Sidebar from '@/components/LectureSidebar.vue'
import Content from '@/components/LectureContent.vue'
import { getRequest } from '@/utils'

const data = ref({})
const error = ref(null)
const isLoading = ref(true)
const activeCategory = ref(null)
const activeLecture = ref(null)

onMounted(async () => {
  const {
    data: responseData,
    error: responseError,
    isLoading: responseLoading,
  } = await getRequest('http://127.0.0.1:8000/api/class/1/lectures')

  data.value = responseData
  error.value = responseError
  isLoading.value = responseLoading
})

const toggleCategory = (category) => {
  activeCategory.value = activeCategory.value === category ? null : category
}

const selectLecture = (lecture) => {
  activeLecture.value = lecture
}
</script>

<template>
  <div class="flex h-screen">
    <Sidebar
      :data="data"
      :activeCategory="activeCategory"
      @toggle-category="toggleCategory"
      @select-lecture="selectLecture"
    />
    <Content :lecture="activeLecture" />
  </div>
</template>
