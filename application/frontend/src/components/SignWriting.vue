<script setup lang="ts">
import { isType } from '@sutton-signwriting/core/fsw'

const props = defineProps<{
  fsw: string
  display: boolean
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
  let emptyArray: string[] = []

  if (typeof signsString === 'string') {
    if (signsString.includes(' ')) {
      return signsString.split(' ')
    }

    if (signsString.includes('%20')) {
      return signsString.split('%20')
    }
  }

  return emptyArray
}

const signs: string[] = containsSpacesOrCode(props.fsw)
  ? getSignsSeparatedBySpacesOrCodes(props.fsw)
  : [props.fsw]
</script>

<template>
  <div v-show="display" class="signwriting-container">
    <div v-for="sign in signs" class="sign">
      <fsw-sign :sign="sign" v-if="!isType(sign, 'punctuation')" />
      <fsw-symbol :symbol="sign" v-if="isType(sign, 'punctuation')" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.sign {
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 0.3rem;
  }
}
</style>
