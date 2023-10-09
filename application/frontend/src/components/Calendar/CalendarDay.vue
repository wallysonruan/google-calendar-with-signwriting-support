<script lang="ts" setup>
import SignWriting from '../SignWriting.vue'
import CalendarActivity from '@/components/Calendar/CalendarActivity.vue'
import { useLanguageStore } from '@/stores/language'
import CalendarCourse from './CalendarCourse.vue'
// https://www.signbank.org/signpuddle2.0/glyphogram.php?font=svg1&bound=t&text=
type day = {
  number: number
  activity?: boolean
  name: string
}
const props = defineProps<day>()
const languageStore = useLanguageStore()
</script>
<template>
  <div class="day" :sw="languageStore.signwriting">
    <div class="day__bar" :sw="languageStore.signwriting">
      <img
        loading="lazy"
        src="../../assets/SEGUNDA_FEIRA.svg"
        width="30"
        height="26"
        alt=""
        v-show="languageStore.signwriting"
      />
      <!---->
      <p v-show="languageStore.portuguese">{{ props.name }}</p>
      <!---->
      <p class="day__number" :sw="languageStore.signwriting">{{ props.number }}</p>
    </div>
    <!---->
    <CalendarCourse activity />
  </div>
</template>
<style scoped>
.day {
  display: flex;
  width: 100%;
}

.day[sw='true'] {
  flex-direction: column;
}

.day__bar {
  text-align: center;
  width: 20%;
}

.day__bar[sw='true'] {
  display: flex;
  margin-bottom: 0.3rem;
  align-items: center;
  gap: 5px;
}

.day__number {
  font-size: larger;
  font-weight: 600;
}

@media only screen and (min-width: 600px) {
  .day {
    width: 80vw;
  }
}
</style>
