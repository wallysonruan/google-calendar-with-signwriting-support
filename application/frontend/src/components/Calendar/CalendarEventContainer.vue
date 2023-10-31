<script setup lang="ts">
import { stores } from '@/stores/stores'
const languageStore = stores.languages()
</script>
<template>
  <div class="events" :sw="languageStore.libras">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.events {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  &[sw='true'] {
    flex-direction: row;
    justify-content: end;
    height: max-content;
  }
}
</style>
