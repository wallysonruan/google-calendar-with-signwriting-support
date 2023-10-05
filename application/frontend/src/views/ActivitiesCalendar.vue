<script setup lang="ts">
import CalendarDay from '@/components/Calendar/CalendarDay.vue'

// const days = [2, 3, 4, 5, 6, 7, 8, 9]
const days = [
  {
    number: 2,
    activity: true,
    name: "seg"
  },
  {
    number: 3,
    activity: false,
    name: "ter"
  },
  {
    number: 4,
    activity: true,
    name: "qua"
  },
  {
    number: 5,
    activity: false,
    name: "qui"
  },
  {
    number: 6,
    activity: true,
    name: "sex"
  }
]
</script>

<template>
  <div class="calendar">
    <CalendarDay class="calendar-day" v-for="day in days" :number="day.number" :name="day.name" :activity="day.activity"
      :key="day.number" />
  </div>
</template>

<style scoped>
.calendar-day {
  margin-bottom: 1rem;
}
</style>
