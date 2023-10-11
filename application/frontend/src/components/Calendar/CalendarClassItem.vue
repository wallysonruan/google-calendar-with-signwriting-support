<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import SignWriting from '../SignWriting.vue'
import type { languages } from '../GlobalTypes.vue'
const languageStore = useLanguageStore()

type calendarClassItemProps = {
  title: languages
}
const props = defineProps<calendarClassItemProps>()
</script>
<template>
  <div class="classes" :sw="languageStore.signwriting">
    <div class="classes__class" :sw="languageStore.signwriting">
      <div class="class__title custom-card" :sw="languageStore.signwriting">
        <SignWriting :sign="props.title.libras" :width="35" :display="languageStore.signwriting" />
        <!---->
        <p class="class__title" v-show="languageStore.portuguese">
          {{ props.title.pt }}
        </p>
      </div>
      <!---->
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
@import '../../assets/main.css';
.classes {
  width: 100%;
}

.classes[sw='true'] {
  max-width: 85%;
}

.classes__class {
  width: 100%;
  height: 100%;
  background-color: rgb(196, 194, 194);
  border-radius: 10px;
}

.classes__class[sw='true'] {
  display: flex;
  background-color: rgb(196, 194, 194);
  border-radius: 10px;
}

.class__title {
  width: 100%;
}

.class__title[sw='true'] {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  padding: 0.3rem;
  width: fit-content;
}

@media only screen and (min-width: 600px) {
  .classes {
    width: 100%;
    max-width: 100%;
  }

  .classes[sw='true'] {
    width: 100%;
  }
}
</style>
