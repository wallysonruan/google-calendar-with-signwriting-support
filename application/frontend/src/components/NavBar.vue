<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue'
</script>
<template>
  <v-bottom-navigation>
    <div class="nav">
      <v-btn>
        <RouterLink to="create-class"> Criar Aula </RouterLink>
      </v-btn>
      <v-btn>
        <RouterLink to="/"> Página Inicial </RouterLink>
      </v-btn>
      <LanguageSwitcher />
    </div>
  </v-bottom-navigation>
</template>
<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
}
</style>
