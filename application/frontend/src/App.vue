<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBarDesktop from './components/NavBarDesktop.vue'
import NavigationDrawer from './components/NavigationDrawer.vue'
</script>
<template>
  <v-app>
    <v-layout>
      <NavBarDesktop />
      <NavigationDrawer />
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
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
