<script setup lang="ts">
import { stores } from '@/stores/stores'
import type { languages } from '../GlobalTypes.vue'
import LanguageWrapper from '../Language/LanguageWrapper.vue'

const languageStore = stores.languages()

type calendarCourseProps = {
  title: languages
  showCourseTitle: boolean
}

const props = defineProps<calendarCourseProps>()
</script>
<template>
  <LanguageWrapper
    :sw="languageStore.libras"
    class="title custom-card"
    :sign="props.title.libras"
    :portuguese="props.title.pt"
  />
</template>
<style scoped lang="scss">
@import '../../assets/main.css';
.title {
  width: 100%;
  min-height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;

  &[sw='true'] {
    flex-direction: row;
    width: fit-content;
    padding: 0.5rem;
  }
}
</style>
