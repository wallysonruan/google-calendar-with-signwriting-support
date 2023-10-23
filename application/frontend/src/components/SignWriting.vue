<script setup lang="ts">
const props = defineProps<{
  sign: string
  display: boolean
}>()
</script>
<template>
  <div v-show="display">
    <fsw-sign :sign="sign"></fsw-sign>
  </div>
</template>