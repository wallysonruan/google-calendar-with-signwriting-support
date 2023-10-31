<script setup lang="ts">
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue'
import CalendarYear from '@/components/Calendar/CalendarYear.vue'
import CalendarDay from '@/components/Calendar/CalendarDay.vue'
import { type calendarEventType } from '@/stores/calendarEvents'
import { stores } from '@/stores/stores'
import CalendarEvent from '@/components/Calendar/CalendarEvent.vue'
import type { languages } from '@/components/GlobalTypes.vue'

const calendarEventsStore = stores.calendarEvents()
const allCalendarEvents: calendarEventType[] | null = calendarEventsStore.getCalendarEvents()

type Day = {
  date: Date;
  events: languages[];
};

type Month = {
  number: number;
  days: Day[];
};

type YearClass = {
  year: number;
  months: Month[];
};

function convertBackendDataModelToFrontendDataModel(
  calendarEvents: calendarEventType[]
): YearClass[] {
  const result: YearClass[] = [];

  calendarEvents.forEach((event) => {
    const year = event.date.getFullYear();
    const month = event.date.getMonth() + 1; // Month is 0-based, so we add 1

    // Find the corresponding year in the result
    let yearObj = result.find((y) => y.year === year);

    if (!yearObj) {
      // If the year doesn't exist, create an object for it
      yearObj = {
        year: year,
        months: [],
      };
      result.push(yearObj);
    }

    // Find the corresponding month in the year
    let monthObj = yearObj.months.find((m) => m.number === month);

    if (!monthObj) {
      // If the month doesn't exist, create an object for it
      monthObj = {
        number: month,
        days: [],
      };
      yearObj.months.push(monthObj);
    }

    // Find the corresponding day in the month
    let dayObj = monthObj.days.find((d) => d.date.getDate() === event.date.getDate());

    if (!dayObj) {
      // If the day doesn't exist, create an object for it
      dayObj = {
        date: event.date,
        events: [],
      };
      monthObj.days.push(dayObj);
    }

    // Add the events to the day
    dayObj.events.push(...event.events);
  });

  return result;
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
          <CalendarDay
            v-for="(day, index) in month.days"
            :key="index"
            :date="new Date(day.date)"
            :show-day-ball="!isSameDayAsPreviousOne(month.days, index)"
          >
            <CalendarEvent
              v-for="(event, index) in day.events"
              :key="index"
              :title="event"
              :show-course-title="true"
            />
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
