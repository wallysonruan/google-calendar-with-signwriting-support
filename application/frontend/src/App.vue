<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <v-app id="v-app">
    <v-main id="main">
      <RouterView />
    </v-main>
    <NavBar />
  </v-app>
</template>
<style>
html,
body,
#app,
#main,
#v-app {
  display: flex;
  justify-content: center;
  background-color: gainsboro;
  width: 100%;
}
</style>
