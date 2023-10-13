<script setup lang="ts">
const props = defineProps<{
  year: number
}>()
</script>

<template>
  <div class="calendarYear">
    <div height="100" class="banner">
      <span>{{ props.year }}</span>
    </div>
    <slot> </slot>
  </div>
</template>
<style scoped lang="scss">
.calendarYear {
  width: 100%;
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    background-color: rgb(178, 170, 170);
  }
}
</style>
