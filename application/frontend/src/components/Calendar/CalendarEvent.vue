<script setup lang="ts">
import { stores } from '@/stores/stores'
import type { languages } from '../GlobalTypes.vue'
import LanguageWrapper from '../Language/LanguageWrapper.vue'

const languageStore = stores.languages()

type calendarEventProps = {
  title: languages
}

const props = defineProps<calendarEventProps>()
</script>
<template>
  <div class="event" :sw="languageStore.libras">
    <LanguageWrapper class="title" :sign="props.title.libras" :portuguese="props.title.pt" />
  </div>
</template>
<style scoped lang="scss">
@import '../../assets/main.css';
.event {
  width: 100%;
  height: min-content;
  background-color: white;
  border-radius: 15px;
  padding: 0.5rem;

  &[sw='true'] {
    width: fit-content;
  }
}
</style>
