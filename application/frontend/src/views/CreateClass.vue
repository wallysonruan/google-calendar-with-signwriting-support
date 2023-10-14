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

async function create(newClassItem: classItem) {
  const data = await classStore.getClassesFromLocalStorage()
  data.push(newClassItem)
  await classStore.saveClassToLocalStorage(data)
}
</script>
<template>
  <div>
    <h2>Nome do Curso:</h2>
    <label for="course_pt">Português</label>
    <input
      type="text"
      id="course_pt"
      v-model="classItemModel.course_title.pt"
      class="input"
      placeholder="Digite aqui"
    />
    <br />
    <label for="course_libras">Libras</label>
    <input
      type="text"
      id="course_libras"
      v-model="classItemModel.course_title.libras"
      class="input"
      placeholder="Digite aqui"
    />
    <br />
    <label for="course_eng">English</label>
    <input
      type="text"
      id="course_eng"
      v-model="classItemModel.course_title.eng"
      class="input"
      placeholder="Digite aqui"
    />

    <h2>Nome da Aula</h2>
    <label for="class_pt">Português</label>
    <input
      type="text"
      id="class_pt"
      v-model="classItemModel.class_title.pt"
      class="input"
      placeholder="Digite aqui"
    />
    <br />
    <label for="class_libras">Libras</label>
    <input
      type="text"
      id="class_libras"
      v-model="classItemModel.class_title.libras"
      class="input"
      placeholder="Digite aqui"
    />
    <br />
    <label for="class_eng">English</label>
    <input
      type="text"
      id="class_eng"
      v-model="classItemModel.class_title.eng"
      class="input"
      placeholder="Digite aqui"
    />

    <h2>Nome da Atividade</h2>
    <label for="activity_pt">Português</label>
    <input
      type="text"
      id="activity_pt"
      v-model="classItemModel.activities[0].title.pt"
      class="input"
      placeholder="Digite aqui"
    />
    <br />
    <label for="activity_libras">Libras</label>
    <input
      type="text"
      id="activity_libras"
      v-model="classItemModel.activities[0].title.libras"
      class="input"
      placeholder="Digite aqui"
    />
    <br />
    <label for="activity_eng">English</label>
    <input
      type="text"
      id="activity_eng"
      v-model="classItemModel.activities[0].title.eng"
      class="input"
      placeholder="Digite aqui"
    />
    <button type="button" @click="create(classItemModel)">Create</button>
  </div>
</template>
<style scoped lang="scss">
.form {
  width: 100%;

  .input {
    width: 100%;
  }
}
</style>
