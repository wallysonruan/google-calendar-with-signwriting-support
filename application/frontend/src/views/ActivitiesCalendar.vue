<script setup lang="ts">
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue'
import CalendarYear from '@/components/Calendar/CalendarYear.vue'
import CalendarDay from '@/components/Calendar/CalendarDay.vue'
import { useClassesStore } from '@/stores/classes'
import CalendarCourse from '@/components/Calendar/CalendarCourse.vue'
import CalendarClassItem from '@/components/Calendar/CalendarClassItem.vue'
import CalendarListActivities from '@/components/Calendar/CalendarListActivities.vue'

const classesStore = useClassesStore()
const teste = classesStore.classes
</script>

<template>
  <div class="calendar">
    <CalendarYear v-for="(year, index) in teste" :key="index" :year="year.year">
      <CalendarMonth
        v-for="(month, index) in year.months"
        :key="index"
        :month-number="month.number"
      >
        <CalendarDay v-for="(day, index) in month.days" :key="index" :date="day.date">
          <CalendarCourse :title="day.course_title">
            <CalendarClassItem :title="day.class_title">
              <CalendarListActivities :activities="day.activities" />
            </CalendarClassItem>
          </CalendarCourse>
        </CalendarDay>
      </CalendarMonth>
    </CalendarYear>
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
