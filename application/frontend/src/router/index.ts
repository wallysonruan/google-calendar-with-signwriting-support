import { createRouter, createWebHistory } from 'vue-router'
import ActivitiesCalendar from '@/views/ActivitiesCalendar.vue'
import CreateClass from '@/views/CreateClass.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ActivitiesCalendar
    },
    {
      path: '/create-class',
      name: 'createClass',
      component: CreateClass
    }
  ]
})

export default router
