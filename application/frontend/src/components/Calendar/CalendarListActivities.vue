<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import CalendarActivity from './CalendarActivity.vue'
import type { activity } from '@/stores/classes'
const languageStore = useLanguageStore()

type course = {
  activities: activity[]
}
const props = defineProps<course>()
</script>
<template>
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
      <div class="activities__list-on" :sw="languageStore.signwriting" v-if="props.activities">
        <CalendarActivity
          v-for="(activity, index) in props.activities"
          :key="index"
          :title="activity.title"
          class="activities__item"
          :show_sw="languageStore.signwriting"
        />
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
</template>
<style scoped>
@import '../../assets/main.css';

.activities {
  display: flex;
  width: 100%;
  flex-direction: column;
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
  .activities {
    width: 100%;
  }
}
</style>
