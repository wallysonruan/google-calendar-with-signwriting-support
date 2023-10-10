<script setup lang="ts">
import type { activity } from '@/components/Calendar/CalendarDay.vue'
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue'

const activities: activity[] = [
  {
    date: new Date('2023-07-10'),
    course: {
      libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4',
      pt: 'Curso de Tradução',
      eng: ''
    },
    className: {
      libras: 'M24x19S16d20n11xn17S26a0610xn19S20e00n24xn3S2031an10x4',
      pt: 'Aula de Português',
      eng: ''
    },
    title: {
      libras:
        'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526 AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
      pt: 'Atividade 1',
      eng: ''
    }
  }
]
</script>

<template>
  <div class="calendar">
    <CalendarMonth
      v-for="(activity, index) in activities"
      :key="index"
      :month-number="activity.date.getMonth()"
      :activities="activities"
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
