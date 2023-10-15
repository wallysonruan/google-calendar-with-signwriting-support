<script setup lang="ts">
import { ref } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
const drawer = ref<boolean>(false)
</script>
<template>
  <v-navigation-drawer location="right" class="drawer" v-model="drawer">
    <LanguageSwitcher class="switcher" />
  </v-navigation-drawer>
  <v-btn class="menu-btn" icon>
    <v-icon color="secundary" @click.stop="drawer = !drawer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </v-icon>
  </v-btn>
</template>
<style scoped lang="scss">
.menu-btn {
  position: sticky;
  bottom: 40px;
  left: 80%;
}

.drawer {
  position: relative;

  .switcher {
    position: absolute;
    bottom: 20px;
    right: 10%;
  }
}

@media only screen and (min-width: 600px) {
  .menu-btn,
  .drawer {
    display: none;
  }
}
</style>
