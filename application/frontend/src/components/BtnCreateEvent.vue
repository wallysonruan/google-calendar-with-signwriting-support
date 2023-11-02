<script setup lang="ts">
import { ref } from 'vue'
import LanguageWrapperVue from './Language/LanguageWrapper.vue'
import { stores } from '@/stores/stores'

const activateOverlay = ref<boolean>(false)
const languageStore = stores.languages()
const activateEventStore = stores.createEvent()
</script>
<template>
  <div class="container">
    <v-btn
      class="btn"
      icon
      aria-label="Create"
      @click="activateOverlay = !activateOverlay"
      :disabled="activateOverlay"
    >
      <!-- disabled -->
      <v-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
      </v-icon>
    </v-btn>
    <!---->
    <div v-if="activateOverlay">
      <v-btn
        class="btn create-event"
        icon
        aria-label="Create Event"
        @click="activateEventStore.activateCreateEvent()"
      >
        <v-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-calendar-event"
            viewBox="0 0 16 16"
          >
            <path
              d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
            />
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
            />
          </svg>
        </v-icon>
        <div class="title-container">
          <LanguageWrapperVue
            sign="M529x541S24e38507x460S14c20506x500"
            portuguese="Evento"
            class="title"
            :sw="languageStore.libras"
          />
        </div>
      </v-btn>
    </div>
    <!---->
    <v-overlay
      class="overlay"
      v-model="activateOverlay"
      location-strategy="connected"
      scroll-strategy="block"
    >
    </v-overlay>
  </div>
</template>
<style scoped lang="scss">
.container {
  .btn {
    position: fixed;
    bottom: 40px;
    left: 80%;
    border-radius: 25%;
  }

  .title-container {
    position: relative;
    text-transform: capitalize;

    .title {
      position: absolute;
      top: -9px;
      right: 45px;

      &[sw='true'] {
        font-size: larger;
        top: -30px;
      }
    }
  }

  .create-event {
    z-index: 2001;
  }
}

.overlay {
  opacity: 0.7 !important; // It's the only way of disabling the default behavior.
  background-color: white;
}

@media only screen and (min-width: 600px) {
  .container > * {
    display: none;
  }
}
</style>
