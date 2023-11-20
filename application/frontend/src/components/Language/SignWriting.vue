<script setup lang="ts">
import { isType } from '@sutton-signwriting/core/fsw'

const props = defineProps<{
  fsw: string
  display: boolean
  maxHeight?: string
}>()

function containsSpacesOrCode(signsString: string): boolean {
  if (signsString.includes(' ')) {
    return true
  }

  if (signsString.includes('%20')) {
    return true
  }

  return false
}

function getSignsSeparatedBySpacesOrCodes(signsString: string): string[] {
  if (signsString.includes(' ')) {
    return signsString.split(' ')
  }

  if (signsString.includes('%20')) {
    return signsString.split('%20')
  }

  return [signsString]
}

const signs: string[] = containsSpacesOrCode(props.fsw)
  ? getSignsSeparatedBySpacesOrCodes(props.fsw)
  : [props.fsw]

const maxHeight = props.maxHeight ? props.maxHeight : '20'
</script>

<template>
  <div v-show="display" class="signwriting-container" :style="'max-height:' + maxHeight + 'rem;'">
    <div v-for="(sign, index) in signs" class="sign" v-bind:key="index">
      <fsw-sign :sign="sign" v-if="!isType(sign, 'punctuation')" />
      <fsw-symbol :symbol="sign" v-if="isType(sign, 'punctuation')" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.signwriting-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .sign {
    text-align: center;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    &:not(:last-child) {
      margin-bottom: 0.3rem;
    }
  }
}
</style>
