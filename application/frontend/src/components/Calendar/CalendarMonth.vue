<script setup lang="ts">
import CalendarDay from './CalendarDay.vue'

const props = defineProps<{}>()
</script>
<template>
  <CalendarDay class="calendar-day" :number="1" name="seg" activity />
</template>
<style scoped></style>
