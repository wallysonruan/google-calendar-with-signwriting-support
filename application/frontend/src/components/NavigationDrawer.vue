<script setup lang="ts">
import LanguageWrapper from './Language/LanguageWrapper.vue'
import { stores } from '@/stores/stores'
const navBar = stores.navbar()
function cleanLocalStorage() {
  localStorage.clear()
}
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
        <v-list-item class="list-item" disabled>
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
        <v-list-item class="list-item" @click="cleanLocalStorage">
          <LanguageWrapper
            sign="M536x525S1dc28465x481S15d40496x485S2dc06523x476 M539x518S30007482x483S20600489x470S18d11510x485 M529x527S15a37479x476S1f751507x473S26603472x505S21100497x493"
            portuguese="Limpar localStorage"
          />
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
<style scoped lang="scss">
.list {
  .list-item {
    border-bottom: 1px rgb(140, 136, 136) solid;
    &:not(:last-child) {
      margin-bottom: 0.9rem;
    }
    .item-icon {
      margin-right: 10px;
    }
  }
}

.language-wrapper {
  display: inline-block;
}

@media only screen and (min-width: 600px) {
  // .drawer {
  //   // It's the only way of changing the drawer height. The default height is injected during
  //   // the component generation, which always override the custom CSS.
  //   position: static !important;
  // }
}
</style>
