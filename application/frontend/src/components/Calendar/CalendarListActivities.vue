<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import CalendarActivity from './CalendarActivity.vue'
import type { activity } from '@/stores/classes'
const languageStore = useLanguageStore()

type calendarListActivitiesProps = {
  activities: activity[]
}
const props = defineProps<calendarListActivitiesProps>()
</script>
<template>
  <div class="activities">
    <div class="title">
      <img
        loading="lazy"
        src="../../assets/ATIVIDADE.svg"
        width="35"
        height="35"
        alt=""
        v-show="languageStore.signwriting"
      />
      <!---->
      <p class="title" v-show="languageStore.portuguese">Atividade</p>
    </div>
    <!---->
    <div class="list">
      <div class="list-on" :sw="languageStore.signwriting" v-if="props.activities">
        <CalendarActivity
          v-for="(activity, index) in props.activities"
          :key="index"
          :title="activity.title"
          class="activity"
          :show_sw="languageStore.signwriting"
        />
      </div>
      <!---->
      <div class="list-off" v-else>
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

  .title {
    width: 100%;
    padding: 0.5rem 0;
  }

  .list {
    background-color: rgb(116, 105, 105);
    width: 100%;
    padding: 0.3rem;
    border-radius: 10px;
    overflow-x: scroll;

    &[sw='true'] {
      overflow-y: scroll;
    }
  }

  .list-on[sw='true'] {
    display: flex;
    width: fit-content;
    gap: 5px;

    &[sw='false'] .activity:not(:last-of-type) {
      margin-bottom: 0.3rem;
    }
  }

  .list-off {
    display: flex;
    justify-content: center;
  }
}

@media only screen and (min-width: 600px) {
  .activities {
    width: 100%;
  }
}
</style>
