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
  <div class="course" :sw="languageStore.libras">
    <LanguageWrapper
      class="title custom-card"
      :sw="languageStore.libras"
      :sign="props.title.libras"
      :width="40"
      :portuguese="props.title.pt"
    />
    <!---->
    <slot> </slot>
  </div>
</template>
<style scoped lang="scss">
@import '../../assets/main.css';
.course {
  display: flex;
  flex-direction: column;
  width: 100%;

  &[sw='true'] {
    flex-direction: row;
    justify-content: end;
  }

  .title[sw='true'] {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 0.2rem;
    padding: 0.5rem;
  }
}

@media only screen and (min-width: 600px) {
  .course {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>
