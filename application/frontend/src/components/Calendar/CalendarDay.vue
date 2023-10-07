<script lang="ts" setup>
import SignWriting from '../SignWriting.vue'
import CalendarActivity from '@/components/Calendar/CalendarActivity.vue'
import { useLanguageStore } from '@/stores/language'
// https://www.signbank.org/signpuddle2.0/glyphogram.php?font=svg1&bound=t&text=
type day = {
  number: number
  activity?: boolean
  name: string
}
const props = defineProps<day>()
const languageStore = useLanguageStore()
</script>
<template>
  <div class="day" :sw="languageStore.signwriting">
    <div class="day__bar" :sw="languageStore.signwriting">
      <SignWriting src="src/assets/SEGUNDA_FEIRA.svg" :width="30" :height="26"
        v-show="languageStore.signwriting" />
      <!---->
      <p v-show="languageStore.portuguese">{{ props.name }}</p>
      <!---->
      <p class="day__number" :sw="languageStore.signwriting">{{ props.number }}</p>
    </div>
    <!---->
    <div class="course" :sw="languageStore.signwriting">
      <v-card class="course__title" :sw="languageStore.signwriting">
        <SignWriting src="src/assets/CURSO.svg" :width="40" v-show="languageStore.signwriting" />
        <SignWriting src="src/assets/TRADUCAO.svg" :width="40" v-show="languageStore.signwriting" />
        <!---->
        <p v-show="languageStore.portuguese">Curso de Tradução</p>
      </v-card>
      <!---->
      <div class="classes">
        <div class="classes__class" :sw="languageStore.signwriting">
          <v-card class="class__title" :sw="languageStore.signwriting">
            <SignWriting src="src/assets/ATIVIDADE.svg" :width="35" :height="35"
              v-show="languageStore.signwriting" />
            <!---->
            <p class="class__title" v-show="languageStore.portuguese">Aula</p>
          </v-card>
          <!---->
          <div class="activities">
            <div class="activities-title">
              <SignWriting src="src/assets/ATIVIDADE.svg" :width="35" :height="35"
                v-show="languageStore.signwriting" />
              <!---->
              <p class="activities__title" v-show="languageStore.portuguese">Atividade</p>
            </div>
            <!---->
            <div class="activities__list">
              <div class="activities__list-on" :sw="languageStore.signwriting" v-if="props.activity">
                <CalendarActivity class="activities__item" :show_sw="languageStore.signwriting" />
                <CalendarActivity class="activities__item" :show_sw="languageStore.signwriting" />
                <CalendarActivity class="activities__item" :show_sw="languageStore.signwriting" />
              </div>
              <!---->
              <div class="activities__list-off" v-else>
                <SignWriting src="src/assets/TER-NAO.svg" :width="23" :height="55"
                  v-show="languageStore.signwriting" />
                <!---->
                <p v-show="languageStore.portuguese">Nenhuma atividade encontrada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.day {
  display: flex;
}

.day[sw='true'] {
  flex-direction: column;
}

.day__bar {
  text-align: center;
  width: 3rem;
}

.day__bar[sw='true'] {
  display: flex;
  margin-bottom: 0.3rem;
  align-items: center;
  gap: 5px;
}

.day__number {
  font-size: larger;
  font-weight: 600;
}

.course {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.course[sw='true'] {
  flex-direction: row;
}

.course__title[sw='true'] {
  margin-right: 0.2rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  height: fit-content;
  padding: 0.5rem;
  gap: 10px;
  width: fit-content;
}

.classes {
  width: 300px;
  max-width: 17rem;
}

.classes__class {
  width: 100%;
  height: 100%;
  background-color: rgb(196, 194, 194);
  border-radius: 10px;
}

.classes__class[sw='true'] {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(196, 194, 194);
  border-radius: 10px;
}

.class__title[sw='true'] {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  padding: 0.3rem;
}

.activities {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0.2rem;
  overflow: hidden;
}

.activities-title {
  width: 100%;
  padding: 0.5rem 0;
}

.activities__list {
  background-color: rgb(116, 105, 105);
  width: 100%;
  padding: 0.3rem;
  border-radius: 10px;
  overflow-x: scroll;
}

.activities__list[sw="true"] {
  overflow-y: scroll;
}

.activities__list-on[sw='true'] {
  display: flex;
  width: fit-content;
  gap: 5px;
}

.activities__list-off {
  display: flex;
  justify-content: center;
}

@media only screen and (min-width: 600px) {
  .day {
    width: 80vw;
  }

  .course {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .classes {
    width: 100%;
    max-width: 100%;
  }

  .activities {
    width: 100%;
  }
}
</style>
