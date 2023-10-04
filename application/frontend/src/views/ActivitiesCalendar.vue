<script setup lang="ts">
import CalendarDay from '@/components/CalendarDay.vue'

const days = [2, 3, 4, 5, 6, 7, 8, 9]
</script>

<template>
  <div class="calendar">
    <CalendarDay class="calendar-day" :number="2" />
  </div>
</template>

<style scoped>
.calendar-day {
  margin-bottom: 1rem;
}
</style>
