<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import type { languages } from '../GlobalTypes.vue'
import LanguageWrapper from '@/components/LanguageWrapper.vue'

type calendarClassItemProps = {
  title: languages
  have_day_bar: boolean
}

const languageStore = useLanguageStore()
const props = defineProps<calendarClassItemProps>()
</script>
<template>
  <div class="classes" :sw="languageStore.signwriting" :free="have_day_bar">
    <div class="class" :sw="languageStore.signwriting">
      <LanguageWrapper
        :sw="languageStore.signwriting"
        class="title custom-card"
        :sign="props.title.libras"
        :width="35"
        :portuguese="props.title.pt"
      />
      <!---->
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../../assets/main.css';
.classes {
  width: 100%;

  &[sw='true'] {
    max-width: 83%;
  }
  .class {
    width: 100%;
    height: 100%;
    background-color: rgb(196, 194, 194);
    border-radius: 10px;

    &[sw='true'] {
      display: flex;
      background-color: rgb(196, 194, 194);
      border-radius: 10px;
    }
  }
  .title {
    width: 100%;

    &[sw='true'] {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      height: 100%;
      padding: 0.3rem;
      width: fit-content;
    }
  }
}

@media only screen and (min-width: 600px) {
  .classes {
    width: 100%;
    max-width: 100%;

    &[sw='true'] {
      max-width: 100%;

      &[free='false'] {
        max-width: 92.5%;
      }
    }
  }
}
</style>
