<script setup lang="ts">
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue'
import CalendarYear from '@/components/Calendar/CalendarYear.vue'
import CalendarDay from '@/components/Calendar/CalendarDay.vue'
import CalendarEventContainer from '@/components/Calendar/CalendarEventContainer.vue'
import CalendarEvent from '@/components/Calendar/CalendarEvent.vue'
import { stores } from '@/stores/stores'
import CreateEvent from '@/components/CreateEvent.vue'
import type { YearClass, Month, Day } from '@/stores/calendarEvents'

const calendarEventsStore = stores.calendarEvents()
const calendarEventsToShow: YearClass[] = calendarEventsStore.getCalendarEvents()

function isThereEventToShow(eventsArray: YearClass[]): boolean {
  if (eventsArray != null) {
    if (eventsArray.length > 0) {
      return true
    }
  }
  return false
}

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

function isSameDayAsPreviousOne(days: Day[], index: number): boolean {
  // Check if it's the first day in the array.
  if (index === 0) {
    return false // Nothing to compare.
  }

  const currentDay = new Date(days[index].date)
  const previousDay = new Date(days[index - 1].date)

  // Always true if current and previous day are different.
  return currentDay.getDay() === previousDay.getDay()
}
</script>

<template>
  <div class="calendar">
    <div class="content" v-if="isThereEventToShow(calendarEventsToShow)">
      <CalendarYear v-for="(year, index) in calendarEventsToShow" :key="index">
        <CalendarMonth
          v-for="(month, monthIndex) in year.months"
          :key="monthIndex"
          :year="year.year"
          :month-number="month.number"
          :show-banner="!isSameMonthAsPrevious(year.months, monthIndex)"
          :is-first-month="monthIndex === 0"
        >
          <CalendarDay
            v-for="(day, index) in month.days"
            :key="index"
            :date="new Date(day.date)"
            :show-day-ball="!isSameDayAsPreviousOne(month.days, index)"
          >
            <CalendarEventContainer>
              <CalendarEvent v-for="(event, index) in day.events" :key="index" :title="event" />
            </CalendarEventContainer>
          </CalendarDay>
        </CalendarMonth>
      </CalendarYear>
    </div>
    <CreateEvent />
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
