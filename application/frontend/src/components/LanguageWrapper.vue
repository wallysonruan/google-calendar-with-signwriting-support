<script setup lang="ts">
import SignWriting from './SignWriting.vue'
import { useLanguageStore } from '@/stores/language'
const props = defineProps<{
  sign: string
  width?: number
  height?: number
  portuguese: string
}>()
</script>
<template>
  <div>
    <p v-if="useLanguageStore().portuguese">
      {{ props.portuguese }}
    </p>
    <SignWriting
      v-if="useLanguageStore().signwriting"
      :fsw="props.sign"
      :width="props.width"
      :height="props.height"
      :display="useLanguageStore().signwriting"
    />
  </div>
</template>
