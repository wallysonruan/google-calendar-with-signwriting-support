<script lang="ts" setup>
import { useLanguageStore } from '@/stores/language'
import CalendarCourse from './CalendarCourse.vue'
import type { languages } from '../GlobalTypes.vue'
type dayProps = {
  activity?: boolean
  month_name: string
  day_number: number
  year_number: number
}

type dayData = {
  name: languages
}

const day: Record<number, dayData> = {
  1: {
    name: {
      pt: 'Segunda-feira',
      libras: 'M544x518S30007482x483S10e21514x483S20600503x470',
      eng: 'Monday'
    }
  },
  2: {
    name: {
      pt: 'Terça-feira',
      libras: 'AS18621S30007S20600M544x517S30007482x482S18621518x479S20600502x466',
      eng: 'Tuesday'
    }
  },
  3: {
    name: {
      pt: 'Quarta-feira',
      libras: 'AS14421S30007S20600M547x518S30007482x483S14421518x474S20600495x468',
      eng: 'Wednesday'
    }
  },
  4: {
    name: {
      pt: 'Quinta-feira',
      libras: 'AS11021S30007S20600M548x518S30007482x483S11021519x476S20600495x470',
      eng: 'Thursday'
    }
  },
  5: {
    name: {
      pt: 'Sexta-feira',
      libras: 'M545x552S33b00482x483S10641507x506S26505522x539S26505532x529S20e00521x501',
      eng: 'Friday'
    }
  },
  6: {
    name: {
      pt: 'Sábado',
      libras: 'M518x535S33b00482x483S21800471x520S20310493x520',
      eng: 'Saturday'
    }
  },
  0: {
    name: {
      pt: 'Domingo',
      libras: 'M527x549S33b00482x483S10110511x501S2e500488x522',
      eng: 'Sunday'
    }
  }
}
const props = defineProps<dayProps>()
const languageStore = useLanguageStore()
const dayOfTheWeekNumber = new Date(
  props.month_name + ' ' + props.day_number + ', ' + props.year_number + ' 00:00:00'
).getDay()
const dayName = day[dayOfTheWeekNumber]
const SIGNWRITING_SVG_BASE_URL: string =
  'https://www.signbank.org/signpuddle2.0/glyphogram.php?font=svg1&bound=t&text='
</script>
<template>
  <div class="day" :sw="languageStore.signwriting">
    <div class="day__bar" :sw="languageStore.signwriting">
      <img
        class="day__name"
        :sw="languageStore.signwriting"
        loading="lazy"
        :src="SIGNWRITING_SVG_BASE_URL + dayName.name.libras"
        alt=""
        v-show="languageStore.signwriting"
      />
      <!---->
      <p v-show="languageStore.portuguese">{{ dayName.name.pt.slice(0, 3).toLowerCase() }}</p>
      <!---->
      <p class="day__number" :sw="languageStore.signwriting">{{ props.day_number }}</p>
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
  margin-bottom: 0.8rem;
  align-items: center;
  gap: 5px;
}

.day__name[sw='true'] {
  width: 35%;
  height: 45%;
  margin-right: 0.3rem;
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
