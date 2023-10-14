<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue'
</script>
<template>
  <v-bottom-navigation>
    <div class="nav">
      <v-btn>
        <RouterLink to="create-activity"> Create Activity </RouterLink>
      </v-btn>
      <v-btn>
        <a href="/"> Home </a>
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
