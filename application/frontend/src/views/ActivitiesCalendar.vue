<script setup lang="ts">
import CalendarDay from '@/components/Calendar/CalendarDay.vue'
const days = [
  {
    number: 2,
    activity: true,
    name: 'seg'
  },
  {
    number: 3,
    activity: false,
    name: 'ter'
  },
  {
    number: 4,
    activity: true,
    name: 'qua'
  },
  {
    number: 5,
    activity: false,
    name: 'qui'
  },
  {
    number: 6,
    activity: true,
    name: 'sex'
  }
]
</script>

<template>
  <div class="calendar">
    <CalendarDay
      class="calendar-day"
      v-for="day in days"
      :number="day.number"
      :name="day.name"
      :activity="day.activity"
      :key="day.number"
    />
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
