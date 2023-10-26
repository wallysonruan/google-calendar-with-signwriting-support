<script setup lang="ts">
import { ref } from 'vue'
import LanguageSwitcher from './Language/LanguageSwitcher.vue'
import LanguageWrapper from './Language/LanguageWrapper.vue'
import { stores } from '@/stores/stores'
const navBar = stores.navbar()
</script>
<template>
  <v-navigation-drawer class="drawer" v-model="navBar.drawer">
    <template v-slot:prepend>
      <v-list class="list">
        <v-list-item class="list-item">
          <LanguageWrapper
            sign="M522x527S15d48478x484S16d20498x494S26500498x473S21802514x478S21100487x513 M530x528S15a00486x501S18521503x493S2c400470x473"
            portuguese="Google Calendar"
          />
        </v-list-item>
        <v-divider :thickness="2"></v-divider>
        <v-list-item class="list-item">
          <template v-slot:prepend>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="item-icon bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path
                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
              />
            </svg>
          </template>
          <LanguageWrapper
            sign="M540x524S10021510x477S10029461x477S2ef00518x504S2ef10465x504"
            portuguese="Atualizar"
          />
        </v-list-item>
        <v-divider :thickness="2"></v-divider>
      </v-list>
    </template>
    <template v-slot:append>
      <v-divider :thickness="2"></v-divider>
      <div class="d-flex flex-column justify-center align-center">
        <LanguageSwitcher class="switcher" />
      </div>
    </template>
  </v-navigation-drawer>
</template>
<style scoped lang="scss">
.drawer {
}

.list {
  .list-item {
    .item-icon {
      margin-right: 10px;
    }
  }
}

.language-wrapper {
  display: inline-block;
}

@media only screen and (min-width: 600px) {
}
</style>
