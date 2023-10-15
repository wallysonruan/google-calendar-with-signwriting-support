<script setup lang="ts">
import type { classItem } from '@/stores/classes'
import { ref } from 'vue'
import { useClassesStore } from '@/stores/classes'

const classStore = useClassesStore()

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
  console.log('New class created and uploaded to Local Storage.')
  loading.value = false
}
</script>
<template>
  <v-form @submit.prevent="createClass(classItemModel)">
    <h2>Nome do Curso:</h2>
    <!-- <label for="course_pt">Português</label> -->
    <v-text-field
    v-model="classItemModel.course_title.pt"
    class="input"
    id="course_pt"
    label="Português"
    ></v-text-field>
    <!-- <label for="course_libras">Libras</label> -->
    <v-text-field
      v-model="classItemModel.course_title.libras"
      class="input"
      id="course_libras"
      label="Libras"
      hint="Insira aqui a sequência FSW do sinal desejado."
    ></v-text-field>

    <h2>Nome da Aula</h2>
    <!-- <label for="class_pt">Português</label> -->
    <v-text-field
      v-model="classItemModel.class_title.pt"
      class="input"
      id="class_pt"
      label="Português"
    ></v-text-field>
    <!-- <label for="class_libras">Libras</label> -->
    <v-text-field
      v-model="classItemModel.class_title.libras"
      class="input"
      id="class_libras"
      label="Libras"
      hint="Insira aqui a sequência FSW do sinal desejado."
    ></v-text-field>

    <h2>Nome da Atividade</h2>
    <!-- <label for="activity_pt">Português</label> -->
    <v-text-field
      v-model="classItemModel.activities[0].title.pt"
      class="input"
      id="activity_pt"
      label="Português"
    ></v-text-field>
    <!-- <label for="activity_libras">Libras</label> -->
    <v-text-field
      v-model="classItemModel.activities[0].title.libras"
      class="input"
      id="activity_libras"
      label="Libras"
      hint="Insira aqui a sequência FSW do sinal desejado."
    ></v-text-field>
    <v-btn :loading="loading" type="submit"> Criar </v-btn>
  </v-form>
</template>
<style scoped lang="scss">
form {
  width: 100%;

  .input {
    width: 100%;
  }
}
</style>
