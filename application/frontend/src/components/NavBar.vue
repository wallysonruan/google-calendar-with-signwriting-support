<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
const languageStore = useLanguageStore()

function isKeyDownTypeEnter(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    const switchElement = document.querySelector('#switch') as HTMLInputElement
    const currentStatus = switchElement?.checked

    if (currentStatus) {
      switchElement.checked = false
    } else {
      switchElement.checked = true
    }
    languageStore.showSignWriting()
  }
}
</script>
<template>
  <v-app-bar scroll-behavior="hide">
    <div class="nav">
      <label class="switch" tabindex="0" for="switch" @keydown="isKeyDownTypeEnter">
        <input id="switch" type="checkbox" @click="languageStore.showSignWriting" />
        <span class="slider round"></span>
      </label>
    </div>
  </v-app-bar>
</template>
<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: right;
  width: 100%;

  input[type='checkbox'] {
    visibility: hidden;
  }

  .switch {
    position: relative;
    width: 60px;
    height: 30px;
    margin-right: 0.5rem;
    background-color: rgb(159, 152, 152);
    border-radius: 50%/25px;

    &:hover {
      cursor: pointer;
    }

    &::before {
      position: absolute;
      content: 'PT';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 2px;
      border-radius: 50%;
    }

    &::after {
      position: absolute;
      content: 'SW';
      height: 26px;
      width: 26px;
      right: 3px;
      bottom: 2px;
      border-radius: 50%;
    }
  }

  .slider {
    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 2px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      z-index: 1;
    }

    &.round:before {
      border-radius: 50%;
    }
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
}
</style>
