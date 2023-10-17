<script setup lang="ts">
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue'
import CalendarYear from '@/components/Calendar/CalendarYear.vue'
import CalendarDay from '@/components/Calendar/CalendarDay.vue'
import { useClassesStore, type classItem, type activity } from '@/stores/classes'
import CalendarCourse from '@/components/Calendar/CalendarCourse.vue'
import CalendarClassItem from '@/components/Calendar/CalendarClassItem.vue'
import CalendarListActivities from '@/components/Calendar/CalendarListActivities.vue'
import type { languages } from '@/components/GlobalTypes.vue'
import SignWriting from '@/components/SignWriting.vue'
import { ref } from 'vue'

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

const show_alert = ref<boolean>(true)
</script>

<template>
  <div class="calendar">
    <v-alert
      type="info"
      title="Andamento do Projeto: Paralizado"
      closable
      class="alert"
      variant="elevated"
      v-model="show_alert"
    >
      <template v-slot:close>
        <div class="close-btn" @click.stop="show_alert = !show_alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
            />
          </svg>
        </div>
      </template>
      O desenvolvedor responsável está estudando o sistema por trás do SignPuddle a fim de melhorar
      a experiência desta aplicação.
      <v-divider class="divider" :thickness="3"></v-divider>
      <div class="sw">
        <!-- Projeto -->
        <SignWriting
          class="sign"
          :sign="'M523x535S21414478x519S14012487x466S20e00482x493S22c04507x493S15a20496x497'"
          :width="40"
          :height="60"
          :display="true"
        />
        <!-- Parado -->
        <SignWriting
          class="sign"
          :sign="'M523x520S37700498x495S37806477x498S20322492x481S20356508x491S20500486x502'"
          :width="40"
          :height="35"
          :display="true"
        />
        <!-- Por quê? -->
        <SignWriting
          class="sign"
          :sign="'M518x576S30c00482x483S34d10498x507S10041483x546S10049468x546S22800496x471S20600475x530'"
          :width="40"
          :height="65"
          :display="true"
        />
        <!-- Pessoa -->
        <SignWriting
          class="sign"
          :sign="'M529x518S30000482x483S1c502480x453S26506514x457S21100515x474'"
          :width="40"
          :height="50"
          :display="true"
        />
        <!-- Desenvolvedora -->
        <SignWriting
          class="sign"
          :sign="'M523x525S15a18477x498S19c02494x496S20600488x475'"
          :width="40"
          :height="40"
          :display="true"
        />
        <!-- Signwriting -->
        <SignWriting
          class="sign"
          :sign="'M516x549S15a36485x452S15a36485x495S2ea0a490x534S14c50492x500S1f750492x461'"
          :width="25"
          :height="80"
          :display="true"
        />
        <!-- Por trás -->
        <SignWriting
          class="sign"
          :sign="'M527x525S15a20499x475S15a22500x509S21414475x517S20600473x500'"
          :width="40"
          :height="37"
          :display="true"
        />
        <!-- Sistema -->
        <SignWriting
          class="sign"
          :sign="'M543x516S20320485x485S20320501x485S23c04520x488S23c1c458x489'"
          :width="60"
          :height="25"
          :display="true"
        />
        <!-- Estudar -->
        <SignWriting
          class="sign"
          :sign="'AS15a31S15a37S20600M525x515S15a37476x485S15a31486x492S20600503x488'"
          :width="40"
          :height="35"
          :display="true"
        />
        <!-- Futuro -->
        <SignWriting
          class="sign"
          :sign="'M517x531S1d210488x503S2b700484x470'"
          :width="30"
          :height="50"
          :display="true"
        />
        <!-- Website -->
        <SignWriting
          class="sign"
          :sign="'M533x516S18720468x485S29406489x500'"
          :width="40"
          :height="25"
          :display="true"
        />
        <!-- Melhor -->
        <SignWriting
          class="sign"
          :sign="'M524x599S33e00482x483S1f502476x564S1f502508x563S22b00508x526S22b10478x527S2fb04492x593'"
          :width="40"
          :height="70"
          :display="true"
        />
      </div>
    </v-alert>
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

  .alert {
    width: 100%;
    height: max-content;
    position: fixed;
    display: flex;
    justify-content: center;

    .close-btn:hover {
      cursor: pointer;
    }

    .divider {
      margin: 1.5rem 0;
    }

    .sw {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      height: 20rem;
      width: 15rem;

      .sign:not(:last-child) {
        margin-bottom: 0.7rem;
      }
    }
  }

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
