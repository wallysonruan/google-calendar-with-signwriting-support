<script lang="ts" setup>
// https://www.signbank.org/signpuddle2.0/glyphogram.php?font=svg1&bound=t&text=
type day = {
  number: number
  activity?: boolean
}
const props = defineProps<day>()
</script>
<template>
  <div class="day">
    <div class="day__bar">
      <img class="day__name-sw" src="../../assets/signs_svg/SEGUNDA_FEIRA.svg" alt="" />
      <p class="day__number">{{ props.number }}</p>
    </div>
    <!---->
    <div class="course">
      <div class="course__title">
        <v-card class="sw-card course__title-sw">
          <img class="sw-img" src="../../assets/signs_svg/CURSO.svg" alt="" />
          <img class="sw-img" src="../../assets/signs_svg/TRADUCAO.svg" alt="" />
        </v-card>
      </div>
      <!---->
      <div class="classes">
        <div class="classes__class">
          <div class="class__title">
            <v-card class="sw-card class__title-sw">
              <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
            </v-card>
          </div>
          <!---->
          <div class="activities">
            <div class="activities-title">
              <div class="activities__title-sw">
                <img class="sw-img" src="../../assets/signs_svg/ATIVIDADE.svg" alt="" />
              </div>
            </div>
            <!---->
            <div class="activities__list">
              <div class="activities__list-on" v-if="props.activity">
                <div class="activities__list-sw">
                  <div class="activities__activity">
                    <v-card class="activities__activity-sw sw-card">
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
                  <div class="activities__activity">
                    <v-card class="activities__activity-sw sw-card">
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
                  <div class="activities__activity">
                    <v-card class="activities__activity-sw sw-card">
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
                </div>
              </div>
              <!---->
              <div class="activities__list-off" v-else>
                <div class="activities__list-sw">
                  <img class="sw-img" src="../../assets/signs_svg/TER-NAO.svg" alt="" />
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
  flex-direction: column;
}

.day__bar {
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
  /* background-color: blueviolet; */
}

.course__title {
  margin-right: 0.2rem;
}

.course__title-sw {
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 0.5rem;
  gap: 10px;
}

.classes {
  width: 300px;
}

.classes__class {
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

.activities__activity {
}

.activities__activity-sw {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: max-content;
  max-height: 350px;
  padding: 0.5rem;
  gap: 5px;
}

.activities__activity-sw .sw-img {
  width: 35px;
}
</style>
