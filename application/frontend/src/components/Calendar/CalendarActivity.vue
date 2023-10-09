<script setup lang="ts">
import SignWriting from '../SignWriting.vue'
const props = defineProps<{
  show_sw: boolean
}>()
</script>
<template>
  <div class="activity custom-card" :sw="show_sw">
    <img src="../../assets/ATIVIDADE.svg" width="35" height="35" alt="" v-show="show_sw" />
    <img src="../../assets/ATIVIDADE.svg" width="35" height="35" alt="" v-show="show_sw" />
    <img src="../../assets/ATIVIDADE.svg" width="35" height="35" alt="" v-show="show_sw" />
    <img src="../../assets/ATIVIDADE.svg" width="35" height="35" alt="" v-show="show_sw" />
    <img src="../../assets/ATIVIDADE.svg" width="35" height="35" alt="" v-show="show_sw" />
    <img src="../../assets/ATIVIDADE.svg" width="35" height="35" alt="" v-show="show_sw" />
    <img src="../../assets/ATIVIDADE.svg" width="35" height="35" alt="" v-show="show_sw" />
    <img src="../../assets/ATIVIDADE.svg" width="35" height="35" alt="" v-show="show_sw" />
    <!---->
    <div v-show="!show_sw">
      <p>Atividade</p>
    </div>
  </div>
</template>
<style scoped>
.activity {
  display: flex;
}

.activity[sw='true'] {
  flex-direction: column;
  flex-wrap: wrap;
  width: max-content;
  max-height: 250px;
  padding: 0.5rem;
}
</style>
