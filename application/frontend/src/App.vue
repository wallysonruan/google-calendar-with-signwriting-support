<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>
<template>
  <v-app>
    <v-layout>
      <NavBar />
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
