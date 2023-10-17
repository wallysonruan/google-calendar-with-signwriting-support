<script setup lang="ts">
import type { languages } from '../GlobalTypes.vue'
import SignWriting from '../SignWriting.vue'
const props = defineProps<{
  show_sw: boolean
  title: languages
}>()
</script>
<template>
  <div class="activity custom-card" :sw="show_sw">
    <SignWriting :sign="props.title.libras" :width="35" :height="35" :display="props.show_sw" />
    <!---->
    <div v-show="!show_sw">
      <p>{{ props.title.pt }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.activity {
  display: flex;

  &[sw='true'] {
    width: max-content;
    padding: 0.5rem;
  }
}
</style>
