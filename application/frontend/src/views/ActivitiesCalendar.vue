<script setup lang="ts">
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue'
import { useCourseStore } from '@/stores/course'
const courses = useCourseStore()
</script>

<template>
  <div class="calendar">
    <CalendarMonth v-for="month in 12" :key="month" :month-number="month" />
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
