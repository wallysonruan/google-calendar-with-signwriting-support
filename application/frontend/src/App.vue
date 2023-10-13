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

@media only screen and (min-width: 600px) {
  /* Overriding v-main style */
  #main {
    margin-top: 0px !important;
  }
}
</style>
