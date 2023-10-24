<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import CalendarActivity from './CalendarActivity.vue'
import LanguageWrapper from '../LanguageWrapper.vue'
import type { activity } from '@/stores/classes'
const languageStore = useLanguageStore()

type calendarListActivitiesProps = {
  activities: activity[]
}
const props = defineProps<calendarListActivitiesProps>()
</script>
<template>
  <div class="activities">
    <LanguageWrapper
      class="title"
      :sw="languageStore.signwriting"
      :sign="'M530x526S15a37471x474S1f751474x486S14c51490x500S27e0c507x489'"
      :width="35"
      :height="35"
      :portuguese="'Atividade'"
    />
    <!---->
    <div class="list">
      <div class="list-on" :sw="languageStore.signwriting" v-if="props.activities.length > 0">
        <CalendarActivity
          v-for="(activity, index) in props.activities"
          :key="index"
          :title="activity.title"
          :show_sw="languageStore.signwriting"
        />
      </div>
      <!---->
      <LanguageWrapper
        v-else
        class="list-off"
        :sw="languageStore.signwriting"
        :sign="'M520x607S30126482x476S1dc40496x537S2a530494x574S30c30489x495S34110492x512'"
        :width="25"
        :height="65"
        :portuguese="'Nenhuma atividade encontrada.'"
      />
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
    height: 100%;
    border-radius: 10px;
    overflow: auto;
  }

  .list-on {
    height: 100%;
    padding: 0.3rem;
    max-height: 15rem;

    &[sw='true'] {
      display: flex;
      width: fit-content;
      max-height: 20rem;
      max-width: 10px;
      /* Puts a stop to the list, making the parent become scrollable */
      gap: 5px;
    }

    &[sw='false'] .activity:not(:last-of-type) {
      margin-bottom: 0.3rem;
    }
  }

  .list-off {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    ::-webkit-scrollbar {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #999;
      border-radius: 6px;
    }
  }
}

@media only screen and (min-width: 600px) {
  .activities {
    width: 100%;
  }
}
</style>
