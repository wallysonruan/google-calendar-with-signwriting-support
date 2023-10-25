<script setup lang="ts">
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue'
import CalendarYear from '@/components/Calendar/CalendarYear.vue'
import CalendarDay from '@/components/Calendar/CalendarDay.vue'
import { type classItem, type activity } from '@/stores/classes'
import { stores } from '@/stores/stores'
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

const classesStore = stores.classes()
const allClasses: classItem[] | null = classesStore.getClasses()

function convertBackendDataModelToFrontendDataModel(classesData: classItem[]): YearClass[] {
  const result: YearClass[] = []

  // Iterate through the input data
  classesData.forEach((classItem) => {
    const year = new Date(classItem.date).getFullYear()
    const month = new Date(classItem.date).getMonth() + 1 // Month is 0-based, so we add 1

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
          date: classItem.date,
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

const classesToShow: YearClass[] = convertBackendDataModelToFrontendDataModel(
  allClasses as classItem[]
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
      <CalendarYear v-for="(year, index) in classesToShow" :key="index" :year="year.year">
        <CalendarMonth
          v-for="(month, monthIndex) in year.months"
          :key="monthIndex"
          :month-number="month.number"
          :show-banner="!isSameMonthAsPrevious(year.months, monthIndex)"
        >
          <CalendarDay
            v-for="(day, index) in month.days"
            :key="index"
            :date="new Date(day.date)"
            :show-day-ball="!isSameDateAsPreviousOne(year.months, monthIndex)"
          >
            <CalendarCourse
              :title="day.course_title"
              :show-course-title="
                !isSameDateAndCourseAsPreviousOne(
                  isSameDateAsPreviousOne(year.months, monthIndex),
                  year.months,
                  monthIndex
                )
              "
            >
              <CalendarClassItem
                :title="day.class_title"
                :have_day_bar="
                  !isSameDateAndCourseAsPreviousOne(
                    isSameDateAsPreviousOne(year.months, monthIndex),
                    year.months,
                    monthIndex
                  )
                "
              >
                <CalendarListActivities :activities="day.activities" />
              </CalendarClassItem>
            </CalendarCourse>
          </CalendarDay>
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
