<script setup lang="ts">
import { stores } from '@/stores/stores'
import LanguageWrapper from './Language/LanguageWrapper.vue'
import { ref } from 'vue'
import type { calendarEventType } from '@/stores/calendarEvents'
const activateEventStore = stores.createEvent()
const calendarEventStore = stores.calendarEvents()

let showDatePicker = ref<boolean>(false)
function openOrCloseDatePicker() {
  showDatePicker.value = !showDatePicker.value
}

let date = ref([new Date()])

let calendarEvent = ref<calendarEventType>({
  date: new Date(date.value[0]),
  events: [
    {
      pt: '',
      libras: '',
      eng: ''
    }
  ]
})

function submit() {
  calendarEventStore.saveCalendarEvent(calendarEvent.value)
  console.log(calendarEvent.value)
}
</script>
<template>
  <form class="container" @submit.prevent="submit()" v-if="activateEventStore.activated">
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
        <button type="submit" class="btn-save">
          <LanguageWrapper
            sign="M546x531S1bb48454x469S1bb40498x503S26602466x514S26616479x478S21b00513x482S21b00454x518S21500530x500"
            portuguese="Salvar"
          />
        </button>
      </ul>
    </nav>
    <v-row class="title">
      <h2>
        <LanguageWrapper
          sign="M529x541S24e38507x460S14c20506x500 M522x522S10e20507x492S10e28478x492S21600510x480S21600483x479"
          portuguese="Adicionar título"
        />
      </h2>
    </v-row>
    <!-- INPUT TITLE PT -->
    <v-row class="input">
      <v-col cols="3" class="title">
        <label for="title-pt">
          <LanguageWrapper
            sign="M522x519S15212478x481S22f04486x505S20e00510x493"
            portuguese="Português"
          />
        </label>
      </v-col>
      <v-col cols="9">
        <input
          class="input-title input portuguese"
          type="text"
          name=""
          placeholder=" Escreva aqui"
          id="title-pt"
          required
          v-model="calendarEvent.events[0].pt"
        />
      </v-col>
    </v-row>
    <!-- INPUT TITLE LIBRAS -->
    <v-row class="input">
      <v-col cols="3" class="title">
        <label for="title-libras">
          <LanguageWrapper
            sign="M542x516S14c0a459x493S14c10498x485S2480c526x488"
            portuguese="Libras"
          />
        </label>
      </v-col>
      <v-col cols="9">
        <input
          class="input-title input libras"
          type="text"
          name=""
          placeholder=" fsw"
          id="title-libras"
          required
          v-model="calendarEvent.events[0].libras"
        />
      </v-col>
    </v-row>
    <!---->
    <v-divider class="divider"></v-divider>
    <!-- INPUT ALL DAY -->
    <v-row class="input">
      <v-col cols="2" class="icon">
        <v-icon class="disabled">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-clock"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
            />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
        </v-icon>
      </v-col>
      <v-col cols="8" class="date disabled">
        <LanguageWrapper
          class="title"
          sign="M538x537S15a1a511x525S37a06463x530S37903485x489S15a11474x479S28b0a492x463"
          portuguese="Dia inteiro"
        />
      </v-col>
      <v-col cols="2">
        <v-switch hideDetails disabled></v-switch>
      </v-col>
    </v-row>
    <!-- INPUT DAY START -->
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <button type="button" @click="openOrCloseDatePicker()">{{ calendarEvent.date }}</button>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <!-- INPUT DAY END -->
    <v-row class="disabled">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <button class="disabled" disabled type="button" @click="showDatePicker = !showDatePicker">
          {{ calendarEvent.date }}
        </button>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <!-- TIMEZONE -->
    <v-row class="input">
      <v-col cols="2" class="icon">
        <v-icon class="disabled">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-globe-americas"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"
            />
          </svg>
        </v-icon>
      </v-col>
      <v-col cols="8" class="disabled">
        <button type="button">Horário Padrão de Brasília</button>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <!---->
    <v-overlay v-model="showDatePicker">
      <v-date-picker v-model="date" :onClick:save="openOrCloseDatePicker" />
    </v-overlay>
  </form>
</template>
<style scoped lang="scss">
.container {
  position: fixed;
  top: 0%;
  width: 100vw;
  height: 100vh;
  background-color: white;

  input {
    width: 95%;
  }

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

  .divider {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .title {
    place-content: center;
  }

  .input {
    .title {
      text-align: right;
    }

    .date {
      display: flex;
      align-items: center;
      .title {
        justify-content: left;
      }
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .disabled {
    color: gray;

    &:hover {
      cursor: auto;
    }
  }
}
</style>
