<script setup lang="ts">
import { ref } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
const drawer = ref<boolean>(false)
</script>
<template>
  <v-toolbar class="nav">
    <div class="nav">
      <v-btn>
        <RouterLink to="create-class"> Criar Aula </RouterLink>
      </v-btn>
      <v-btn>
        <RouterLink to="/"> Página Inicial </RouterLink>
      </v-btn>
      <LanguageSwitcher />
    </div>
  </v-toolbar>
</template>
<style scoped lang="scss">
.nav {
  display: none;
}

@media only screen and (min-width: 600px) {
  .nav {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
  }
}
</style>
