<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <v-app>
    <NavBar />
    <v-layout>
      <RouterView />
    </v-layout>
      <Footer />
  </v-app>
</template>

<style scoped>
@media (min-width: 1024px) {

}
</style>
