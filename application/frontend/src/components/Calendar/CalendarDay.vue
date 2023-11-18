<script lang="ts" setup>
import { stores } from '@/stores/stores'
import LanguageDate from '../Language/LanguageDate.vue'

type calendarDayContainerProps = {
  date: Date
  showDayBall: boolean
}

const props = defineProps<calendarDayContainerProps>()
const languageStore = stores.languages()
const date_to_Date = new Date(props.date)
const dayNumber = date_to_Date.getDay()
</script>
<template>
  <div class="day" :sw="languageStore.libras">
    <div class="bar" :sw="languageStore.libras">
      <LanguageDate :day-number="dayNumber" abbreviated lower-case />
      <!---->
      <p class="number" :sw="languageStore.libras" v-if="showDayBall">{{ dayNumber }}</p>
    </div>
    <!---->
    <slot> </slot>
  </div>
</template>

<style scoped lang="scss">
.day {
  display: flex;
  width: 90%;
  margin: auto;
  margin-bottom: 0.5rem;

  &[sw='true'] {
    flex-direction: column;
  }

  .bar {
    text-align: center;
    width: 3.2rem;

    &[sw='true'] {
      display: flex;
      margin-bottom: 0.8rem;
      align-items: center;
      gap: 5px;
    }

    .name[sw='false'] {
      width: 3rem;
    }

    .name[sw='true'] {
      max-height: 35px;
      margin: 0%;
    }

    .number {
      font-weight: 600;
    }
  }
}

@media only screen and (min-width: 600px) {
  .day {
    display: flex;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
  }
}
</style>
