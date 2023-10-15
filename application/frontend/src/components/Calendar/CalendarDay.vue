<script lang="ts" setup>
import { useLanguageStore } from '@/stores/language'
import type { languages } from '../GlobalTypes.vue'
import LanguageWrapper from '../LanguageWrapper.vue'

type calendarDayProps = {
  date: Date
  showDayBall: boolean
}

type calendarDayData = {
  name: languages
}

const props = defineProps<calendarDayProps>()
const languageStore = useLanguageStore()
const SIGNWRITING_SVG_BASE_URL: string =
  'https://www.signbank.org/signpuddle2.0/glyphogram.php?font=svg1&bound=t&text='

const name_of_the_week_days: Record<number, calendarDayData> = {
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
const date_to_Date = new Date(props.date)
const dayName = name_of_the_week_days[date_to_Date.getDay()]
const dayNumber = date_to_Date.getUTCDate()
</script>
<template>
  <div class="day" :sw="languageStore.signwriting">
    <div class="bar" :sw="languageStore.signwriting">
      <LanguageWrapper
        class="name"
        :sw="languageStore.signwriting"
        :sign="dayName.name.libras"
        :width="28"
        :portuguese="dayName.name.pt.slice(0, 3).toLowerCase()"
        v-if="showDayBall"
      />
      <!---->
      <p class="number" :sw="languageStore.signwriting" v-if="showDayBall">{{ dayNumber }}</p>
    </div>
    <!---->
    <slot> </slot>
  </div>
</template>

<style scoped lang="scss">
.day {
  display: flex;
  width: 100%;
  padding: 1rem;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

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
      max-width: 30px;
      max-height: 35px;
      margin-right: 0.3rem;
    }

    .number {
      font-size: larger;
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
