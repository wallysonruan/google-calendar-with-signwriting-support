<script lang="ts" setup></script>
<template>
    <div class="day-container">
        <div class="day-bar">
            <div class="day-ball">
                <p>2</p>
            </div>
        </div>
        <div class="course-container">
            <div class="course-title">
                <p>
                    COURSE TITLE
                </p>
            </div>
            <div class="classes-container">
                <div class="class-item">
                    <div class="class-title">
                        <p>
                            TITLE CLASS
                        </p>
                    </div>
                    <div class="activities-container">
                        <div class="activity-item">
                            <p>
                                ACTIVITY
                            </p>
                        </div>
                        <div class="activity-item">
                            <p>
                                ACTIVITY
                            </p>
                        </div>
                        <div class="activity-item">
                            <p>
                                ACTIVITY
                            </p>
                        </div>
                        <div class="activity-item">
                            <p>
                                ACTIVITY
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.day-container {
    display: flex;
    flex-direction: column;
}

.day-bar {
    background-color: burlywood;
}

.day-ball {
    width: 3rem;
    height: 3rem;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.course-container {
    display: flex;
    min-height: 200px;
    background-color: blueviolet;
}

.course-title {
    background-color: violet;
    width: 50%;
}

.classes-container {
    background-color: gray;
    width: 70%;
}

.class-item {
    display: flex;
    height: 100%;
}

.class-title {
    background-color: peru;
    width: 60%;
}

.activities-container {
    overflow-y: scroll;
    display: flex;
    width: auto;
    gap: 5px;
    background-color: turquoise;
}

.activity-item {
    background-color: azure;
}</style>