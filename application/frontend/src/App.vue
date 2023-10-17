<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBarDesktop from './components/NavBarDesktop.vue'
import NavBarMobile from './components/NavBarMobile.vue'
</script>
<template>
  <v-app>
    <NavBarDesktop />
    <RouterView />
    <NavBarMobile />
  </v-app>
</template>
<style lang="scss">
a {
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
}
</style>
