<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/CustomFooter.vue'
</script>

<template>
  <v-app class="root">
    <!-- <NavBar /> -->
    <v-layout>
      <RouterView/>
    </v-layout>
    <Footer />
  </v-app>
</template>

<style scoped>
.root {
  background-color: gainsboro;
}
@media (min-width: 1024px) {
}
</style>
