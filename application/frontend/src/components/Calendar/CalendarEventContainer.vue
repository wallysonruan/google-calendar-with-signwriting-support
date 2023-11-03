<script setup lang="ts">
import { stores } from '@/stores/stores'
const languageStore = stores.languages()
</script>
<template>
  <div class="container">
    <div class="events" :sw="languageStore.libras">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 100%;
  overflow: auto;
  .events {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;

    &[sw='true'] {
      width: max-content;
      flex-direction: row;
      height: max-content;
    }
  }
}
</style>
