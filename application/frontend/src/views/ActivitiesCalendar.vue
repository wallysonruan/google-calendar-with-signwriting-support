<script setup lang="ts">
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue'
import { useClassesStore } from '@/stores/classes'

const classesStore = useClassesStore()
const classes = classesStore.classes
</script>

<template>
  <div class="calendar">
    <CalendarMonth
      v-for="(classItem, index) in classes"
      :key="index"
      :month-number="classItem.date.getMonth()"
      :classes="classes"
    />
  </div>
</template>

<style scoped>
@media only screen and (min-width: 600px) {
  .calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
