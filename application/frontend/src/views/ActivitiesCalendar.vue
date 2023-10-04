<script setup lang="ts">
import CalendarDay from '@/components/CalendarDay.vue';

const days = [2,3,4,5,6,7,8,9]
</script>

<template>
  <div class="calendar">
    <CalendarDay v-for="day in days" :day="day"/>
  </div>
</template>

<style scoped>
</style>