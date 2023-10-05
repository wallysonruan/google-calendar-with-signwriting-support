import { createRouter, createWebHistory } from 'vue-router'
import ActivitiesCalendar from '@/views/ActivitiesCalendar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ActivitiesCalendar
    }
  ]
})

export default router
