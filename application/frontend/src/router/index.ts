import { createRouter, createWebHistory } from 'vue-router'
import Calendar from '@/views/CalendarMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Calendar
    }
  ]
})

export default router
