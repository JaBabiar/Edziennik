import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios' // Import axios for API calls

// Import Views
import DashboardView from '@/views/DashboardView.vue'
import AssignmentsView from '@/views/AssignmentsView.vue'
import GradesView from '@/views/GradesView.vue'
import TeachersView from '@/views/TeachersView.vue'
import CoursesView from '@/views/CoursesView.vue'
import LoginView from '@/views/LoginView.vue'
import TeacherAssignmentsView from '@/views/TeacherAssignmentsView.vue'
import TeacherDashboardView from '@/views/TeacherDashboardView.vue'
import TeacherCoursesView from '@/views/TeacherCoursesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public route
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },

    // Student routes
    {
      path: '/',
      name: 'home',
      component: DashboardView,
      meta: { requiresAuth: true, roles: ['Student'] },
    },
    {
      path: '/Assignments',
      name: 'Assignments',
      component: AssignmentsView,
      meta: { requiresAuth: true, roles: ['Student'] },
    },
    {
      path: '/Grades',
      name: 'Grades',
      component: GradesView,
      meta: { requiresAuth: true, roles: ['Student'] },
    },
    {
      path: '/Teachers',
      name: 'Teachers',
      component: TeachersView,
      meta: { requiresAuth: true, roles: ['Student'] },
    },
    {
      path: '/Courses',
      name: 'Courses',
      component: CoursesView,
      meta: { requiresAuth: true, roles: ['Student'] },
    },

    // Teacher routes
    {
      path: '/Teacher/Dashboard',
      name: 'TeacherDashboard',
      component: TeacherDashboardView,
      meta: { requiresAuth: true, roles: ['Teacher'] },
    },
    {
      path: '/Teacher/Assignments',
      name: 'TeacherAssignments',
      component: TeacherAssignmentsView,
      meta: { requiresAuth: true, roles: ['Teacher'] },
    },
    {
      path: '/Teacher/Courses',
      name: 'TeacherCourses',
      component: TeacherCoursesView,
      meta: { requiresAuth: true, roles: ['Teacher'] },
    },
  ],
})

// Global Navigation Guard
router.beforeEach(async (to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    try {
      // Check the user's login and role status from the Symfony API
      const response = await axios.get('http://127.0.0.1:8000/api/check-session')
      const isLoggedIn = response.data.is_logged_in
      const userRole = response.data.role // Assume role is returned by the API

      if (isLoggedIn) {
        // Check if the route requires a specific role
        if (to.meta.roles && !to.meta.roles.includes(userRole)) {
          return next({ name: 'login' }) // Redirect to login if role doesn't match
        }
        return next() // Allow navigation if role matches
      } else {
        return next({ name: 'login' }) // Redirect to login if not logged in
      }
    } catch (error) {
      console.error('Error checking session:', error)
      return next({ name: 'login' }) // Redirect to login on API error
    }
  } else {
    next() // Proceed if route doesn't require authentication
  }
})

export default router

