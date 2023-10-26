<script setup lang="ts">
import LanguageSwitcher from './Language/LanguageSwitcher.vue'
import NavigationDrawer from './NavigationDrawer.vue'
import BtnCreateEvent from './BtnCreateEvent.vue'
import LanguageWrapper from './Language/LanguageWrapper.vue'
import { stores } from '@/stores/stores'

const languagesStore = stores.languages()
const navBar = stores.navbar()

function deleteAllClasses() {
  localStorage.removeItem('classes')
  console.log('Classes deleted.')
}
</script>
<template>
  <v-app-bar class="container">
    <template v-slot:prepend>
      <v-app-bar-nav-icon>
        <v-btn icon @click="navBar.showDrawer()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </v-btn>
      </v-app-bar-nav-icon>
    </template>
    <LanguageSwitcher />
  </v-app-bar>
  <NavigationDrawer />
  <BtnCreateEvent />
</template>
<style scoped lang="scss">
@media only screen and (min-width: 600px) {
  .container {
    display: block;
    padding: 0.5rem 0;

    .btn[sw='true'] {
      height: fit-content;
    }

    .router-link {
      display: flex;
      align-items: center;
    }
  }
}
</style>
