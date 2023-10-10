<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
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
@media only screen and (min-width: 600px) {
  #main {
    margin-top: 2rem;
  }
}
</style>
<style>
body,
#app,
#main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: gainsboro;
  width: 100%;
}
</style>
