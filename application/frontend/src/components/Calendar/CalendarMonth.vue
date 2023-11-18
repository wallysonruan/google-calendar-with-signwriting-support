<script setup lang="ts">
import LanguageDate from '../Language/LanguageDate.vue'

const props = defineProps<{
  year: number
  monthNumber: number
  showBanner: boolean
  isFirstMonth: boolean
}>()

// Date().getMonth() considers January as the month 0.
const current_month = new Date().getMonth()
const monthToShow = props.monthNumber ? props.monthNumber : current_month
</script>

<template>
  <div class="month">
    <div height="100" class="banner" v-if="showBanner">
      <LanguageDate
      :month-number="monthToShow"
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
