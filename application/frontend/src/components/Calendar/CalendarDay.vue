<script lang="ts" setup>
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
      <img class="day__name-sw" src="../../assets/signs_svg/SEGUNDA_FEIRA.svg" alt=""
        v-show="languageStore.signwriting" />
      <p class="day__name-pt" v-show="languageStore.portuguese">{{ props.name }}</p>
      <p class="day__number" :sw="languageStore.signwriting">{{ props.number }}</p>
    </div>
    <!---->
    <div class="course" :sw="languageStore.signwriting">
      <div class="course__title" :sw="languageStore.signwriting">
        <v-card class="sw-card course__title-sw" v-show="languageStore.signwriting">
          <img class="sw-img" src="../../assets/signs_svg/CURSO.svg" alt="" />
          <img class="sw-img" src="../../assets/signs_svg/TRADUCAO.svg" alt="" />
        </v-card>
        <v-card>
          <p class="course__title" :sw="languageStore.signwriting" v-show="languageStore.portuguese">Curso de Tradução</p>
        </v-card>
      </div>
      <!---->
      <div class="classes">
        <div class="classes__class" :sw="languageStore.signwriting">
          <div class="class__title">
            <v-card class="sw-card class__title-sw" v-show="languageStore.signwriting">
              <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
            </v-card>
            <p class="class__title" v-show="languageStore.portuguese">Aula</p>
          </div>
          <!---->
          <div class="activities">
            <div class="activities-title">
              <div class="activities__title-sw" v-show="languageStore.signwriting">
                <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
              </div>
              <p class="activities__title" v-show="languageStore.portuguese">Atividade</p>
            </div>
            <!---->
            <div class="activities__list">
              <div class="activities__list-on" v-if="props.activity">
                <div class="activities__list-sw" v-show="languageStore.signwriting">
                  <v-card class="activities__activity activities__activity-sw sw-card">
                    <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
                    <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
                    <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
                    <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
                    <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
                    <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
                    <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
                    <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
                    <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
                    <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
                    <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
                    <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
                  </v-card>
                </div>
                <div class="activities__list-pt" v-show="languageStore.portuguese">
                  <div class="activities__activity">
                    <v-card>
                      <p>Atividade</p>
                    </v-card>
                    <v-card>
                      <p>Atividade</p>
                    </v-card>
                    <v-card>
                      <p>Atividade</p>
                    </v-card>
                    <v-card>
                      <p>Atividade</p>
                    </v-card>
                  </div>
                </div>
              </div>
              <!---->
              <div class="activities__list-off" v-else>
                <div class="activities__list-sw sw" v-show="languageStore.signwriting">
                  <img class="sw-img" src="../../assets/signs_svg/TER-NAO.svg" alt="" />
                </div>
                <div class="activities__list-pt" v-show="languageStore.portuguese">
                  <p>Nenhuma atividade encontrada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Write a SW Wrapper */
/* Define constraints for all signs */
.sw-img {
  width: 40px;
}

.course__title-sw .sw-img {
  width: 35px;
}

/*  */

.day {
  display: flex;
}

.day[sw="true"] {
  flex-direction: column;
}

.day__bar {
  text-align: center;
  width: 3rem;
}

.day__bar[sw="true"] {
  display: flex;
  margin-bottom: 0.3rem;
  align-items: center;
  gap: 5px;
}

.day__name-sw {
  width: 30px;
  height: 26px;
}

.day__number {
  font-size: larger;
  font-weight: 600;
}

.course {
  display: flex;
  flex-direction: column;
}

.course[sw="true"] {
  display: flex;
  flex-direction: row;
}

.course__title[sw="true"] {
  margin-right: 0.2rem;
}

.course__title-sw {
  display: flex;
  flex-direction: column;
  align-content: center;
  height: fit-content;
  padding: 0.5rem;
  gap: 10px;
}

.classes {
  width: 300px;
}

.classes__class {
  width: 100%;
  height: 100%;
  background-color: rgb(196, 194, 194);
  border-radius: 10px;
}

.classes__class[sw="true"] {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(196, 194, 194);
  border-radius: 10px;
}

.class__title-sw {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  padding: 0.3rem;
}

.activities {
  display: flex;
  flex-direction: column;
  width: 100%;
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
}

.activities__list-sw {
  display: flex;
  overflow-y: scroll;
  gap: 5px;
}

.activities__list-off .activities__list-sw {
  display: flex;
  justify-content: center;
}

/* FIX BELOW */
.activities__list-off .activities__list-sw .sw-img {
  width: 20px;
}

.activities__activity {}

.activities__activity-sw {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: max-content;
  max-height: 250px;
  padding: 0.5rem;
  gap: 5px;
}

.activities__activity-sw .sw-img {
  width: 35px;
}
</style>
