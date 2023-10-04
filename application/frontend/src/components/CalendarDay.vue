<script lang="ts" setup>
// https://www.signbank.org/signpuddle2.0/glyphogram.php?font=svg1&bound=t&text=M34x37S15a37n25xn27S10e51n19xn16S2a40f6x4S20601n34xn3
    type day = {
        day: number
    }
    const props = defineProps<day>()
</script>
<template>
    <div class="day-container">
        <div class="day-bar">
            <div class="day-ball">
                <p>{{ props.day }}</p>
            </div>
        </div>
        <div class="course-container">
            <div class="course-title">
                <v-card class="sw-card course-title-sw">
                    <img class="sw-img" src="../assets/signs_svg/CURSO.svg" alt="">
                    <img class="sw-img" src="../assets/signs_svg/TRADUCAO.svg" alt="">
                </v-card>
            </div>
            <div class="classes-container">
                <div class="class-item">
                    <div class="class-title">
                        <v-card class="sw-card class-title-sw">
                            <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                        </v-card>
                    </div>
                    <div class="activities-container">
                        <div class="activities-title">
                            <div class="activity-item">
                                <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                            </div>
                        </div>
                        <div class="activities">
                            <div class="activity-item">
                                <v-card class="sw-card course-title-sw">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                </v-card>
                            </div>
                            <div class="activity-item">
                                <v-card class="sw-card course-title-sw">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                </v-card>
                            </div>
                            <div class="activity-item">
                                <v-card class="sw-card course-title-sw">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                </v-card>
                            </div>
                            <div class="activity-item">
                                <v-card class="sw-card course-title-sw">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                </v-card>
                            </div>
                            <div class="activity-item">
                                <v-card class="sw-card course-title-sw">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
                                    <img class="sw-img" src="../assets/signs_svg/ATIVIDADE.svg" alt="">
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
.sw-img {
    width: 40px;
}

.course-title-sw .sw-img {
    width: 35px;
}

.sw-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 0.3rem;
}

.day-container {
    display: flex;
    flex-direction: column;
}

.day-ball {
    width: 3rem;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: larger;
    font-weight: bolder;
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
    width: 100%;
}

.class-item {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: gray;
    border-radius: 10px;
}

.class-title-sw {
    height: 100%;
}

.activities-container {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 0.2rem;
    padding-bottom: 15px;
}

.activities {
    display: flex;
    gap: 3px;
}

.activities-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 0;
}
</style>