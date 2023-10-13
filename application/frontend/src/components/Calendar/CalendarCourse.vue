<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import SignWriting from '../SignWriting.vue'
import type { languages } from '../GlobalTypes.vue'
const languageStore = useLanguageStore()

type calendarCourseProps = {
  title: languages
  showCourseTitle: boolean
}
const props = defineProps<calendarCourseProps>()
</script>
<template>
  <div class="course" :sw="languageStore.signwriting">
    <div class="title custom-card" :sw="languageStore.signwriting" v-if="showCourseTitle">
      <SignWriting :sign="props.title.libras" :width="40" :display="languageStore.signwriting" />
      <!---->
      <p v-show="languageStore.portuguese">{{ props.title.pt }}</p>
    </div>
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
  }

  .title[sw='true'] {
    margin-right: 0.2rem;
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 0.5rem;
    gap: 10px;
    width: fit-content;
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
