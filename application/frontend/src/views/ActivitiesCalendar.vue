<script setup lang="ts">
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue'
import CalendarYear from '@/components/Calendar/CalendarYear.vue'
import CalendarDay from '@/components/Calendar/CalendarDay.vue'
import { useClassesStore, type classItem, type activity } from '@/stores/classes'
import CalendarCourse from '@/components/Calendar/CalendarCourse.vue'
import CalendarClassItem from '@/components/Calendar/CalendarClassItem.vue'
import CalendarListActivities from '@/components/Calendar/CalendarListActivities.vue'
import type { languages } from '@/components/GlobalTypes.vue'

type Day = {
  date: Date
  course_title: languages
  class_title: languages
  activities: activity[]
}

type Month = {
  number: number
  days: Day[]
}

type YearClass = {
  year: number
  months: Month[]
}

const classesStore = useClassesStore()
const allClasses: classItem[] = classesStore.getClasses()

function convertBackendDataModelToFrontendDataModel(classesData: classItem[]): YearClass[] {
  const result: YearClass[] = []

  // Iterate through the input data
  classesData.forEach((classItem) => {
    const year = classItem.date.getFullYear()
    const month = classItem.date.getMonth() + 1 // Month is 0-based, so we add 1

    // Find the corresponding year in the result
    let yearObj = result.find((y) => y.year === year)

    if (!yearObj) {
      // If the year doesn't exist, create an object for it
      yearObj = {
        year: year,
        months: []
      }
      result.push(yearObj)
    }

    // Create an object for the month
    const monthObj: Month = {
      number: month,
      days: [
        {
          date: classItem.date.toISOString().slice(0, 10),
          course_title: classItem.course_title,
          class_title: classItem.class_title,
          activities: classItem.activities
        }
      ]
    }

    // Add the month to the corresponding year
    yearObj.months.push(monthObj)
  })

  return result
}

const classesToShow: YearClass[] = convertBackendDataModelToFrontendDataModel(allClasses)
</script>

<template>
  <div class="calendar">
    <CalendarYear v-for="(year, index) in classesToShow" :key="index" :year="year.year">
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
