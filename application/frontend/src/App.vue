<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/CustomFooter.vue'
</script>

<template>
  <v-app>
    <NavBar />
    <v-main>
      <RouterView />
      <Footer />
    </v-main>
  </v-app>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>
