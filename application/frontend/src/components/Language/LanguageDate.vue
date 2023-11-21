<script lang="ts">
import type { languages } from '../GlobalTypes.vue'

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

type calendarDayContainerData = {
  name: languages
}

const name_of_the_week_days: Record<number, calendarDayContainerData> = {
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
</script>
<script setup lang="ts">
import LanguageWrapper from '../Language/LanguageWrapper.vue'

const props = defineProps<{
  year?: number
  monthNumber?: number
  dayNumber?: number
  abbreviated?: boolean
  upperCase?: boolean
  lowerCase?: boolean
  pascalCase?: boolean
}>()

const monthToShow = name_of_the_months[props.monthNumber!!]
const dayToShow = name_of_the_week_days[props.dayNumber!!]

if (props.abbreviated) {
  if (dayToShow) {
    dayToShow.name.pt = dayToShow.name.pt.slice(0, 3).concat('.')
  }

  if (monthToShow) {
    monthToShow.name.pt = monthToShow.name.pt.slice(0, 3).concat('.')
  }
}

if (props.upperCase) {
  if (dayToShow) {
    dayToShow.name.pt = dayToShow.name.pt.toUpperCase()
  }

  if (monthToShow) {
    monthToShow.name.pt = monthToShow.name.pt.toUpperCase()
  }
}

if (props.lowerCase) {
  if (dayToShow) {
    dayToShow.name.pt = dayToShow.name.pt.toLowerCase()
  }

  if (monthToShow) {
    monthToShow.name.pt = monthToShow.name.pt.toLowerCase()
  }
}
</script>
<template>
  <LanguageWrapper
    v-if="monthToShow"
    :sign="monthToShow.name.libras"
    :portuguese="monthToShow.name.pt"
  />
  <LanguageWrapper v-if="dayToShow" :sign="dayToShow.name.libras" :portuguese="dayToShow.name.pt" />
</template>
<style scoped lang="scss"></style>
