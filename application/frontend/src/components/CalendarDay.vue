<script lang="ts" setup>
import { SIGNS } from '@/assets/signs';
type day = {
    day: number
}
const props = defineProps<day>()
</script>
<template>
    <div class="day-container">
        <div class="day-bar">
            <div class="day-ball">
                <p>{{props.day}}</p>
            </div>
        </div>
        <div class="course-container">
            <div class="course-title">
                <v-card class="sw-card course-title-sw">
                    <div v-html="SIGNS.CURSO.SVG"></div>
                </v-card>
            </div>
            <div class="classes-container">
                <div class="class-item">
                    <div class="class-title">
                        <v-card class="sw-card class-title-sw">
                            <div v-html="SIGNS.ATIVIDADE.SVG"></div>
                            <div v-html="SIGNS.ATIVIDADE.SVG"></div>
                        </v-card>
                    </div>
                    <div class="activities-container">
                        <div class="activities-title" v-html="SIGNS.ATIVIDADE.SVG"></div>
                        <div class="activities">
                            <div class="activity-item">
                                <v-card class="sw-card course-title-sw">
                                    <div v-html="SIGNS.ATIVIDADE.SVG"></div>
                                    <div v-html="SIGNS.ATIVIDADE.SVG"></div>
                                </v-card>
                            </div>
                            <div class="activity-item">
                                <v-card class="sw-card course-title-sw">
                                    <div v-html="SIGNS.ATIVIDADE.SVG"></div>
                                    <div v-html="SIGNS.ATIVIDADE.SVG"></div>
                                </v-card>
                            </div>
                            <div class="activity-item">
                                <v-card class="sw-card course-title-sw">
                                    <div v-html="SIGNS.ATIVIDADE.SVG"></div>
                                    <div v-html="SIGNS.ATIVIDADE.SVG"></div>
                                </v-card>
                            </div>
                            <div class="activity-item">
                                <v-card class="sw-card course-title-sw">
                                    <div v-html="SIGNS.ATIVIDADE.SVG"></div>
                                    <div v-html="SIGNS.ATIVIDADE.SVG"></div>
                                </v-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.sw-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.3rem;
}

.day-container {
    display: flex;
    flex-direction: column;
}

.day-bar {
    /* background-color: burlywood; */
}

.day-ball {
    width: 3rem;
    height: 3rem;
    background-color: rgb(46, 43, 43);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
}

.course-container {
    display: flex;
    /* background-color: blueviolet; */
}

.course-title-sw {
    padding: 0.5rem;
    /* background-color: navajowhite; */
    height: fit-content;
}

.classes-container {
    background-color: gray;
    width: 70%;
    padding-bottom: 0.2rem;
}

.class-item {
    display: flex;
    height: 100%;
}

.class-title {
    /* background-color: peru; */
}

.class-title-sw {
    height: 100%;
}

.activities-container {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    /* background-color: turquoise; */
}

.activities {
    display: flex;
    gap: 3px;
}

.activity-item {
    /* background-color: azure; */
}
</style>