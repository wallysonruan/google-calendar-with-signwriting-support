<script setup lang="ts">
const props = defineProps<{
  src: string
  width?: number
  height?: number
}>()
</script>
<template>
  <img :src="props.src" alt="" :width="props.width" :height="props.height" />
</template>
<style scoped>
img {
  margin: 0.2rem;
}
</style>
