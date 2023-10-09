<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import CalendarDay from './CalendarDay.vue'
import type { languages } from '../GlobalTypes.vue'

const SIGNWRITING_SVG_BASE_URL: string =
  'https://www.signbank.org/signpuddle2.0/glyphogram.php?font=svg1&bound=t&text='
const language = useLanguageStore()
const props = defineProps<{
  monthNumber?: number
}>()

type monthData = {
  name: languages
  total_days: number
}

const month: Record<number, monthData> = {
  1: {
    name: {
      pt: 'Janeiro',
      libras: 'M513x530S19240488x511S2a30c490x470'
    },
    total_days: 31
  },
  2: {
    name: {
      pt: 'Fevereiro',
      libras: 'M515x537S1d220486x464S27102499x497'
    },
    total_days: 28
  },
  3: {
    name: {
      pt: 'Março',
      libras: 'M563x525S36a00482x477S15711512x506S2fc07545x493S37b07547x500S37b07547x495'
    },
    total_days: 31
  },
  4: {
    name: {
      pt: 'Abril',
      libras: 'M542x523S36a00482x477S1f721511x500S22a07529x488'
    },
    total_days: 30
  },
  5: {
    name: {
      pt: 'Maio',
      libras: 'M537x542S36a00482x477S20600515x505S1005f507x512'
    },
    total_days: 31
  },
  6: {
    name: {
      pt: 'Junho',
      libras:
        'M530x541S11559475x476S11551496x476S20f00488x459S23100504x507S23118471x508S2fc04492x530'
    },
    total_days: 30
  },
  7: {
    name: {
      pt: 'Julho',
      libras: 'M522x544S19220482x456S2a20c478x477S1dc20480x514S26506507x529'
    },
    total_days: 31
  },
  8: {
    name: {
      pt: 'Agosto',
      libras: 'M530x526S36d00479x474S15d02487x488S23100489x509S21100517x503'
    },
    total_days: 31
  },
  9: {
    name: {
      pt: 'Setembro',
      libras: 'M532x518S18051507x483S18051469x484S22120509x509S22120470x511'
    },
    total_days: 30
  },
  10: {
    name: {
      pt: 'Outubro',
      libras: 'M510x526S17610493x475S2e230491x494'
    },
    total_days: 31
  },
  11: {
    name: {
      pt: 'Novembro',
      libras: 'M514x523S22f04489x509S11950487x477'
    },
    total_days: 30
  },
  12: {
    name: {
      pt: 'Dezembro',
      libras: 'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526'
    },
    total_days: 31
  }
}
// Date().getMonth() considers January as the month 0.
const current_month = new Date().getMonth() + 1
const monthToShow = props.monthNumber ? props.monthNumber : current_month
</script>
<template>
  <div>
    <div height="100" class="banner">
      <span v-show="language.portuguese">{{ month[monthToShow].name.pt }}</span>
      <img
        v-show="language.signwriting"
        :src="SIGNWRITING_SVG_BASE_URL + month[monthToShow].name.libras"
        alt=""
        loading="lazy"
      />
    </div>
    <div>
      <CalendarDay
        v-for="day in month[monthToShow].total_days"
        :key="day"
        class="calendar__day"
        :number="day"
        name="seg"
        activity
      />
    </div>
  </div>
</template>
<style scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  margin-bottom: 2rem;
  background-color: white;
}

.calendar__day {
  margin-bottom: 1.5rem;
}
</style>
