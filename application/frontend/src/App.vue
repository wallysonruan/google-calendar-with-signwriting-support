<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/CustomFooter.vue'
</script>

<template>
  <v-app>
    <NavBar />
    <v-main id="main">
      <RouterView />
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>
<style>
body,
#app,
#main {
  background-color: gainsboro;
}
</style>
