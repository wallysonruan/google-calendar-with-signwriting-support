<script lang="ts">
type calendarMonthData = {
  name: languages
  total_days: number
}

export const name_of_the_months: Record<number, calendarMonthData> = {
  1: {
    name: {
      pt: 'Janeiro',
      libras: 'M513x530S19240488x511S2a30c490x470',
      eng: 'January'
    },
    total_days: 31
  },
  2: {
    name: {
      pt: 'Fevereiro',
      libras: 'M515x537S1d220486x464S27102499x497',
      eng: 'February'
    },
    total_days: 28
  },
  3: {
    name: {
      pt: 'Março',
      libras: 'M563x525S36a00482x477S15711512x506S2fc07545x493S37b07547x500S37b07547x495',
      eng: 'March'
    },
    total_days: 31
  },
  4: {
    name: {
      pt: 'Abril',
      libras: 'M542x523S36a00482x477S1f721511x500S22a07529x488',
      eng: 'April'
    },
    total_days: 30
  },
  5: {
    name: {
      pt: 'Maio',
      libras: 'M537x542S36a00482x477S20600515x505S1005f507x512',
      eng: 'May'
    },
    total_days: 31
  },
  6: {
    name: {
      pt: 'Junho',
      libras:
        'M530x541S11559475x476S11551496x476S20f00488x459S23100504x507S23118471x508S2fc04492x530',
      eng: 'June'
    },
    total_days: 30
  },
  7: {
    name: {
      pt: 'Julho',
      libras: 'M522x544S19220482x456S2a20c478x477S1dc20480x514S26506507x529',
      eng: 'July'
    },
    total_days: 31
  },
  8: {
    name: {
      pt: 'Agosto',
      libras: 'M530x526S36d00479x474S15d02487x488S23100489x509S21100517x503',
      eng: 'August'
    },
    total_days: 31
  },
  9: {
    name: {
      pt: 'Setembro',
      libras: 'M532x518S18051507x483S18051469x484S22120509x509S22120470x511',
      eng: 'September'
    },
    total_days: 30
  },
  10: {
    name: {
      pt: 'Outubro',
      libras: 'M510x526S17610493x475S2e230491x494',
      eng: 'October'
    },
    total_days: 31
  },
  11: {
    name: {
      pt: 'Novembro',
      libras: 'M514x523S22f04489x509S11950487x477',
      eng: 'November'
    },
    total_days: 30
  },
  12: {
    name: {
      pt: 'Dezembro',
      libras: 'AS16d3eS30004S22f04M540x541S30004482x482S16d3e488x523S22f04515x526',
      eng: 'December'
    },
    total_days: 31
  }
}
</script>
<script setup lang="ts">
import LanguageWrapper from '../Language/LanguageWrapper.vue'
import type { languages } from '../GlobalTypes.vue'

const props = defineProps<{
  year: number
  monthNumber: number
  showBanner: boolean
  isFirstMonth: boolean
}>()

// Date().getMonth() considers January as the month 0.
const current_month = new Date().getMonth() + 1
const monthToShow = props.monthNumber ? props.monthNumber + 1 : current_month
</script>

<template>
  <div class="month">
    <div height="100" class="banner" v-if="showBanner">
      <LanguageWrapper
        :sign="name_of_the_months[monthToShow].name.libras"
        :portuguese="name_of_the_months[monthToShow].name.pt"
      />
      <div class="year" v-if="isFirstMonth">
        {{ props.year }}
      </div>
    </div>
    <slot> </slot>
  </div>
</template>
<style scoped lang="scss">
.month {
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8rem;
    margin-bottom: 1rem;
    background-color: white;
    font-size: 1.5rem;

    .year {
      margin-left: 0.5rem;
    }
  }
}
</style>
