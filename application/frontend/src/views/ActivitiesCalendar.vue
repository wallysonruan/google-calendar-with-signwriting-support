<script setup lang="ts">
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue'
import { useCourseStore } from '@/stores/course'
const courses = useCourseStore()

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
</script>

<template>
  <div class="calendar">
    <CalendarMonth v-for="month in months" :month-number="month" />
  </div>
</template>

<style scoped>
.calendar-day {
  margin-bottom: 1rem;
}

@media only screen and (min-width: 600px) {
  .calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
