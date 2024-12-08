import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import AssignmentsView from '@/views/AssignmentsView.vue'
import GradesView from '@/views/GradesView.vue'
import TeachersView from '@/views/TeachersView.vue'
import CoursesView from '@/views/CoursesView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/',
      name: 'home',
      component: DashboardView,
    },
    {
      path: '/Assignments',
      name: 'Assignments',
      component: AssignmentsView,
    },
    {
      path: '/Grades',
      name: 'Grades',
      component: GradesView,
    },
    {
      path: '/Teachers',
      name: 'Teachers',
      component: TeachersView,
    },
    {
      path: '/Courses',
      name: 'Courses',
      component: CoursesView,
    },
  ],
})

export default router
