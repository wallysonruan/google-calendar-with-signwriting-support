<script setup lang="ts">
import type { languages } from '../GlobalTypes.vue'
import SignWriting from '../SignWriting.vue'
const props = defineProps<{
  show_sw: boolean
  title: languages
}>()

const SIGNWRITING_SVG_BASE_URL: string =
  'https://www.signbank.org/signpuddle2.0/glyphogram.php?font=svg1&bound=t&text='
</script>
<template>
  <div class="activity custom-card" :sw="show_sw">
    <img
      :src="SIGNWRITING_SVG_BASE_URL + props.title.libras"
      width="35"
      height="35"
      alt=""
      v-show="show_sw"
    />
    <!---->
    <div v-show="!show_sw">
      <p>{{ props.title.pt }}</p>
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
