<script setup lang="ts">
import LanguageWrapper from './Language/LanguageWrapper.vue'
import { stores } from '@/stores/stores'
const activateEventStore = stores.createEvent()
</script>
<template>
  <div class="container" v-if="activateEventStore.activated">
    <nav>
      <ul>
        <button @click="activateEventStore.activateCreateEvent()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </ul>
      <ul>
        <button class="btn-save">
          <LanguageWrapper
            sign="M546x531S1bb48454x469S1bb40498x503S26602466x514S26616479x478S21b00513x482S21b00454x518S21500530x500"
            portuguese="Salvar"
          />
        </button>
      </ul>
    </nav>
    <br />
    <v-list>
      <v-list-item>
        <div class="input-title">
          <LanguageWrapper
            sign="M529x541S24e38507x460S14c20506x500 M522x522S10e20507x492S10e28478x492S21600510x480S21600483x479"
            portuguese="Adicionar título"
          />
          <input type="text" name="" id="event-title" />
        </div>
      </v-list-item>
      <!--  -->
      <v-divider></v-divider>
      <!--  -->
    </v-list>
  </div>
</template>
<style scoped lang="scss">
.container {
  position: fixed;
  top: 0%;
  width: 100vw;
  height: 100vh;
  background-color: white;

  nav {
    padding: 0.7rem;
    display: flex;
    justify-content: space-between;

    .btn-save {
      background-color: #154c79;
      border-radius: 20%/50%;
      padding: 0.3rem 0.9rem;
      color: white;
    }
  }
  .input-title {
    font-size: large;
  }
}
</style>