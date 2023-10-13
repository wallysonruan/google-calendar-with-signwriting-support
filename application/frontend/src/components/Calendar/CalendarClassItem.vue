<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import SignWriting from '../SignWriting.vue'
import type { languages } from '../GlobalTypes.vue'
const languageStore = useLanguageStore()

type calendarClassItemProps = {
  title: languages
  have_day_bar: boolean
}
const props = defineProps<calendarClassItemProps>()
</script>
<template>
  <div class="classes" :sw="languageStore.signwriting" :free="have_day_bar">
    <div class="class" :sw="languageStore.signwriting">
      <div class="title custom-card" :sw="languageStore.signwriting">
        <SignWriting :sign="props.title.libras" :width="35" :display="languageStore.signwriting" />
        <!---->
        <p class="title" v-show="languageStore.portuguese">
          {{ props.title.pt }}
        </p>
      </div>
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
