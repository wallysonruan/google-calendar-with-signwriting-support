<script setup lang="ts">
const props = defineProps<{
  year: number
}>()
</script>

<template>
  <div>
    <div height="100" class="banner">
      <span>{{ props.year }}</span>
    </div>
    <slot> </slot>
  </div>
</template>
<style scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  margin-bottom: 1rem;
  background-color: white;
}
</style>
