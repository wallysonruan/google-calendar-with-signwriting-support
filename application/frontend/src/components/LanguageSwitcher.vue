<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import SignWriting from './SignWriting.vue'
const languageStore = useLanguageStore()
</script>
<template>
  <div class="switcher">
    <p>PT</p>
    <v-switch class="switch" @click="languageStore.showSignWriting" hide-details> </v-switch>
    <SignWriting
      :display="true"
      :width="40"
      :height="20"
      fsw="M542x516S14c0a459x493S14c10498x485S2480c526x488"
    />
  </div>
</template>
<style scoped lang="scss">
.switcher {
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.5rem;

  .switch {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>
