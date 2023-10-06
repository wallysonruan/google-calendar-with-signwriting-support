<script setup lang="ts">
import SignWriting from '../SignWriting.vue'
const props = defineProps<{
  show_sw: boolean
}>()
</script>
<template>
  <v-card class="activity" :sw="show_sw">
    <SignWriting
      :width="35"
      :height="35"
      src="src/assets/signs_svg/ATIVIDADE.svg"
      v-show="show_sw"
    />
    <SignWriting
      :width="35"
      :height="35"
      src="src/assets/signs_svg/ATIVIDADE.svg"
      v-show="show_sw"
    />
    <SignWriting
      :width="35"
      :height="35"
      src="src/assets/signs_svg/ATIVIDADE.svg"
      v-show="show_sw"
    />
    <SignWriting
      :width="35"
      :height="35"
      src="src/assets/signs_svg/ATIVIDADE.svg"
      v-show="show_sw"
    />
    <SignWriting
      :width="35"
      :height="35"
      src="src/assets/signs_svg/ATIVIDADE.svg"
      v-show="show_sw"
    />
    <SignWriting
      :width="35"
      :height="35"
      src="src/assets/signs_svg/ATIVIDADE.svg"
      v-show="show_sw"
    />
    <!---->
    <div v-show="!show_sw">
      <p>Atividade</p>
    </div>
  </v-card>
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
