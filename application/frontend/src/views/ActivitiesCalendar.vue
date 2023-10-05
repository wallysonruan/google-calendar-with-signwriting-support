<script setup lang="ts">
import CalendarDay from '@/components/Calendar/CalendarDay.vue'

// const days = [2, 3, 4, 5, 6, 7, 8, 9]
const days = [
  {
    number: 2,
    activity: true
  },
  {
    number: 3,
    activity: false
  },
  {
    number: 4,
    activity: true
  },
  {
    number: 5,
    activity: true
  },
  {
    number: 6,
    activity: true
  },
  {
    number: 7,
    activity: true
  }
]
</script>

<template>
  <div class="calendar">
    <CalendarDay
      class="calendar-day"
      v-for="day in days"
      :number="day.number"
      v-bind:key="day.number"
      :activity="day.activity"
    />
  </div>
</template>

<style scoped>
.calendar-day {
  margin-bottom: 1rem;
}
</style>
