<script setup lang="ts">
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue'
import CalendarYear from '@/components/Calendar/CalendarYear.vue'
import CalendarDayContainer from '@/components/Calendar/CalendarDayContainer.vue'
import { type calendarEventType } from '@/stores/calendarEvents'
import { stores } from '@/stores/stores'
import CalendarDay from '@/components/Calendar/CalendarDay.vue'
import type { languages } from '@/components/GlobalTypes.vue'

type Day = {
  date: Date
  course_title: languages
  class_title: languages
}

type Month = {
  number: number
  days: Day[]
}

type YearClass = {
  year: number
  months: Month[]
}

const calendarEventsStore = stores.calendarEvents()
const allCalendarEvents: calendarEventType[] | null = calendarEventsStore.getCalendarEvents()

function convertBackendDataModelToFrontendDataModel(
  calendarEvents: calendarEventType[]
): YearClass[] {
  const result: YearClass[] = []

  // Iterate through the input data
  calendarEvents.forEach((calendarEventType) => {
    const year = new Date(calendarEventType.date).getFullYear()
    const month = new Date(calendarEventType.date).getMonth() + 1 // Month is 0-based, so we add 1

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
          date: calendarEventType.date,
          course_title: calendarEventType.course_title,
          class_title: calendarEventType.class_title
        }
      ]
    }

    // Add the month to the corresponding year
    yearObj.months.push(monthObj)
  })

  return result
}

const calendarEventsToShow: YearClass[] = convertBackendDataModelToFrontendDataModel(
  allCalendarEvents as calendarEventType[]
)

function isSameMonthAsPrevious(monthsArray: Month[], index: number): boolean {
  // Check if it's the first month in the array.
  if (index === 0) {
    return false // Nothing to compare; the first month is always considered the same.
  }

  const currentMonth = monthsArray[index].number
  const previousMonth = monthsArray[index - 1].number

  if (currentMonth != previousMonth) {
    return false
  }
  return true
}

function isSameDateAsPreviousOne(monthsArray: Month[], index: number): boolean {
  // Check if it's the first month in the array.
  if (index === 0) {
    return false // Nothing to compare.
  }

  const currentDay = new Date(monthsArray[index].days[0].date)
  const previousDay = new Date(monthsArray[index - 1].days[0].date)

  // Always true if current and previous day are different.
  return currentDay.getDay() === previousDay.getDay()
}

function isSameDateAndCourseAsPreviousOne(
  isSameDate: boolean,
  monthsArray: Month[],
  index: number
): boolean {
  // Check if it's the first month in the array.
  if (index === 0) {
    return false // Nothing to compare.
  }

  const previousCourseTitle: string = monthsArray[index - 1].days[0].course_title.pt
  const currentCourseTitle: string = monthsArray[index].days[0].course_title.pt
  const isSameCourse: boolean = currentCourseTitle == previousCourseTitle

  return isSameDate && isSameCourse
}
</script>

<template>
  <div class="calendar">
    <div class="content">
      <CalendarYear v-for="(year, index) in calendarEventsToShow" :key="index">
        <CalendarMonth
          v-for="(month, monthIndex) in year.months"
          :key="monthIndex"
          :year="year.year"
          :month-number="month.number"
          :show-banner="!isSameMonthAsPrevious(year.months, monthIndex)"
          :is-first-month="monthIndex === 0"
        >
          <CalendarDayContainer
            v-for="(day, index) in month.days"
            :key="index"
            :date="new Date(day.date)"
            :show-day-ball="!isSameDateAsPreviousOne(year.months, monthIndex)"
          >
            <CalendarDay
              :title="day.course_title"
              :show-course-title="
                !isSameDateAndCourseAsPreviousOne(
                  isSameDateAsPreviousOne(year.months, monthIndex),
                  year.months,
                  monthIndex
                )
              "
            >
            </CalendarDay>
          </CalendarDayContainer>
        </CalendarMonth>
      </CalendarYear>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calendar {
  width: 100%;
  height: 100%;
  background-color: gainsboro;

  .content {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .calendar {
    .content {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin: auto;
      background-color: gainsboro;
    }
  }
}
</style>
