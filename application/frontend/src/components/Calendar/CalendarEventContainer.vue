<script setup lang="ts">
import { stores } from '@/stores/stores';
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
    width: 100%;

    &[sw='true'] {
      flex-direction: row;
      height: max-content;
    }
  }
</style>