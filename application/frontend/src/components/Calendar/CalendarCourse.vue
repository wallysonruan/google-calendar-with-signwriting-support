<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import SignWriting from '../SignWriting.vue'
import type { languages } from '../GlobalTypes.vue'
const languageStore = useLanguageStore()

type calendarCourseProps = {
  title: languages
}
const props = defineProps<calendarCourseProps>()
</script>
<template>
  <div class="course" :sw="languageStore.signwriting">
    <div class="course__title custom-card" :sw="languageStore.signwriting">
      <SignWriting :sign="props.title.libras" :width="40" :display="languageStore.signwriting" />
      <!---->
      <p v-show="languageStore.portuguese">{{ props.title.pt }}</p>
    </div>
    <!---->
    <slot> </slot>
  </div>
</template>
<style scoped>
@import '../../assets/main.css';
.course {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.course[sw='true'] {
  flex-direction: row;
}

.course__title[sw='true'] {
  margin-right: 0.2rem;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 0.5rem;
  gap: 10px;
  width: fit-content;
}

@media only screen and (min-width: 600px) {
  .course {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>
