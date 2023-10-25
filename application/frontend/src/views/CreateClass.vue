<script setup lang="ts">
import type { classItem } from '@/stores/classes'
import { ref } from 'vue'
import { stores } from '@/stores/stores'
import LanguageWrapper from '@/components/LanguageWrapper.vue'

const classStore = stores.classes()
const languageStore = stores.languages()
const classItemModel = ref<classItem>({
  date: new Date(),
  class_title: {
    pt: '',
    libras: '',
    eng: ''
  },
  course_title: {
    pt: '',
    libras: '',
    eng: ''
  },
  activities: [
    {
      title: {
        pt: '',
        libras: '',
        eng: ''
      }
    }
  ]
})
const loading = ref<boolean>(false)

function createClass(newClassItem: classItem) {
  loading.value = true
  classStore.saveClassToLocalStorage(newClassItem)
  loading.value = false
}

const rules = {
  required: {
    pt: (value: any) => isFilled(value) || 'Campo obrigatório.',
    libras: (value: any) => isFilled(value) || 'Campo obrigatório.',
    english: (value: any) => isFilled(value) || 'Mandatory field.'
  }
}

function isFilled(value: any): boolean {
  if (value) return true
  return false
}

function getAllInputs(): NodeListOf<HTMLInputElement> {
  return document.querySelectorAll('.input')
}

function areThereEmptyInputs(inputs: NodeListOf<HTMLInputElement>) {
  let thereAreEmptyInputs = false

  inputs.forEach((input) => {
    if (!isFilled(input.value)) {
      thereAreEmptyInputs = !thereAreEmptyInputs
    }
  })

  return thereAreEmptyInputs
}

function submit(classItem: classItem) {
  if (areThereEmptyInputs(getAllInputs())) {
    createClass(classItem)
  }
}
</script>
<template>
  <v-form class="form" @submit.prevent="submit(classItemModel)">
    <div class="inputs">
      <h2>
        <LanguageWrapper
          :sign="'M524x519S16d20489x483S26a06510x481S20e00476x497S2031a490x504 AS11520S26606M524x515S11520475x485S26606494x486'"
          :portuguese="'Nome do Curso'"
          :height="30"
          :width="30"
        />
      </h2>
      <!-- <label for="course_pt">Português</label> -->
      <v-text-field
        v-model="classItemModel.course_title.pt"
        class="input"
        id="course_pt"
        label="Português"
        :rules="[rules.required.pt]"
      ></v-text-field>
      <!-- <label for="course_libras">Libras</label> -->
      <v-text-field
        v-model="classItemModel.course_title.libras"
        class="input"
        id="course_libras"
        label="Libras"
        hint="Insira aqui a sequência FSW do sinal desejado."
        :rules="[rules.required.libras]"
      ></v-text-field>

      <h2>
        <LanguageWrapper
          :sign="'M524x516S15a39477x485S15a31490x493S20600502x485 AS11520S26606M524x515S11520475x485S26606494x486'"
          :portuguese="'Nome da Aula'"
          :height="30"
          :width="30"
        />
      </h2>
      <!-- <label for="class_pt">Português</label> -->
      <v-text-field
        v-model="classItemModel.class_title.pt"
        class="input"
        id="class_pt"
        label="Português"
        :rules="[rules.required.pt]"
      ></v-text-field>
      <!-- <label for="class_libras">Libras</label> -->
      <v-text-field
        v-model="classItemModel.class_title.libras"
        class="input"
        id="class_libras"
        label="Libras"
        hint="Insira aqui a sequência FSW do sinal desejado."
        :rules="[rules.required.libras]"
      ></v-text-field>

      <h2>
        <LanguageWrapper
          :sign="'M530x526S15a37471x474S1f751474x486S14c51490x500S27e0c507x489 AS11520S26606M524x515S11520475x485S26606494x486'"
          :portuguese="'Nome da Atividade'"
          :height="30"
          :width="30"
        />
      </h2>
      <!-- <label for="activity_pt">Português</label> -->
      <v-text-field
        v-model="classItemModel.activities[0].title.pt"
        class="input"
        id="activity_pt"
        label="Português"
        :rules="[rules.required.pt]"
      ></v-text-field>
      <!-- <label for="activity_libras">Libras</label> -->
      <v-text-field
        v-model="classItemModel.activities[0].title.libras"
        class="input"
        id="activity_libras"
        label="Libras"
        hint="Insira aqui a sequência FSW do sinal desejado."
        :rules="[rules.required.libras]"
      ></v-text-field>
    </div>
    <v-btn class="create-btn" :loading="loading" type="submit" :sw="languageStore.libras">
      <LanguageWrapper
        :sign="'M531x540S16d48470x494S1773e476x520S22b00515x486S15730471x460S21000492x498'"
        :portuguese="'Criar'"
        :height="40"
      />
    </v-btn>
  </v-form>
</template>
<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .inputs {
    width: 100%;
  }

  .create-btn {
    width: max-content;

    &[sw='true'] {
      height: fit-content;
    }
  }
}

@media only screen and (min-width: 600px) {
  form {
    margin-left: auto;
    margin-right: auto;
    width: 60%;

    .inputs {
      width: 100%;
    }
  }
}
</style>
