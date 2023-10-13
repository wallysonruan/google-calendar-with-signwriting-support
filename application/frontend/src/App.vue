<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <v-app>
    <v-main id="main">
      <RouterView />
    </v-main>
    <NavBar />
  </v-app>
</template>
<style>
body,
#app,
#main {
  display: flex;
  justify-content: center;
  background-color: gainsboro;
  width: 100%;
}
</style>
