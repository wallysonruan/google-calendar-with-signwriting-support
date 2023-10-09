<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import CalendarActivity from '@/components/Calendar/CalendarActivity.vue'
const languageStore = useLanguageStore()

type course = {
  activity: boolean
}
const props = defineProps<course>()
</script>
<template>
  <div class="course" :sw="languageStore.signwriting">
    <div class="course__title custom-card" :sw="languageStore.signwriting">
      <img
        loading="lazy"
        src="../../assets/SEGUNDA_FEIRA.svg"
        width="40"
        alt=""
        v-show="languageStore.signwriting"
      />
      <img
        loading="lazy"
        src="../../assets/TRADUCAO.svg"
        width="40"
        alt=""
        v-show="languageStore.signwriting"
      />
      <!---->
      <p v-show="languageStore.portuguese">Curso de Tradução</p>
    </div>
    <!---->
    <div class="classes" :sw="languageStore.signwriting">
      <div class="classes__class" :sw="languageStore.signwriting">
        <div class="class__title custom-card" :sw="languageStore.signwriting">
          <img
            loading="lazy"
            src="../../assets/ATIVIDADE.svg"
            width="35"
            height="35"
            alt=""
            v-show="languageStore.signwriting"
          />
          <!---->
          <p class="class__title" v-show="languageStore.portuguese">Aula</p>
        </div>
        <!---->
        <div class="activities">
          <div class="activities-title">
            <img
              loading="lazy"
              src="../../assets/ATIVIDADE.svg"
              width="35"
              height="35"
              alt=""
              v-show="languageStore.signwriting"
            />
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
              <img
                loading="lazy"
                src="../../assets/TER-NAO.svg"
                width="23"
                height="55"
                alt=""
                v-show="languageStore.signwriting"
              />
              <!---->
              <p v-show="languageStore.portuguese">Nenhuma atividade encontrada.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import '../../assets/main.css';
.course {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.course[sw='true'] {
  flex-direction: row;
}

.course__title[sw='true'] {
  margin-right: 0.2rem;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 0.5rem;
  gap: 10px;
  width: fit-content;
}

.classes {
  width: 100%;
}

.classes[sw='true'] {
  width: 80%;
}

.classes__class {
  width: 100%;
  height: 100%;
  background-color: rgb(196, 194, 194);
  border-radius: 10px;
}

.classes__class[sw='true'] {
  display: flex;
  background-color: rgb(196, 194, 194);
  border-radius: 10px;
}

.class__title {
  width: 100%;
}

.class__title[sw='true'] {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  padding: 0.3rem;
  width: fit-content;
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

.activities__list[sw='true'] {
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

.activities__list-on[sw='false'] .activities__item:not(:last-of-type) {
  margin-bottom: 0.3rem;
}

@media only screen and (min-width: 600px) {
  .course {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .classes {
    width: 100%;
    max-width: 100%;
  }

  .classes[sw='true'] {
    width: 100%;
  }

  .activities {
    width: 100%;
  }
}
</style>
