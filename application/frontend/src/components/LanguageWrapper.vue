<script setup lang="ts">
import SignWriting from './SignWriting.vue'
import { stores } from '@/stores/stores'
const props = defineProps<{
  sign: string
  width?: number
  height?: number
  portuguese: string
}>()
</script>
<template>
  <div>
    <p v-if="stores.languages().portuguese">
      {{ props.portuguese }}
    </p>
    <SignWriting
      v-if="stores.languages().libras"
      :fsw="props.sign"
      :width="props.width"
      :height="props.height"
      :display="stores.languages().libras"
    />
  </div>
</template>
