<script setup lang="ts">
import { stores } from '@/stores/stores'
import SignWriting from '../SignWriting.vue'
const languageStore = stores.languages()
</script>
<template>
  <div class="switcher">
    <v-switch v-model="languageStore.libras" @click="languageStore.changeLanguage" hide-details>
      <template v-slot:prepend>
        <p class="portuguese">PT</p>
      </template>
      <template v-slot:append>
        <SignWriting class="libras" fsw="M542x516S14c0a459x493S14c10498x485S2480c526x488" display />
      </template>
    </v-switch>
  </div>
</template>
<style scoped lang="scss">
.switcher {
  margin-right: 0.5rem;
}
.portuguese,
.libras {
  font-size: small;
}
</style>
