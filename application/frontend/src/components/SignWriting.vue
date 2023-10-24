<script setup lang="ts">
import { isType } from '@sutton-signwriting/core/fsw'

const props = defineProps<{
  fsw: string
  display: boolean
}>()
</script>

<template>
  <div v-show="display">
    <div v-for="sign in props.fsw.split(' ')" class="signs">
      <fsw-sign :sign="sign" v-if="!isType(sign, 'punctuation')" />
      <fsw-symbol :symbol="sign" v-if="isType(sign, 'punctuation')" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.signs {
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 0.3rem;
  }
}
</style>
