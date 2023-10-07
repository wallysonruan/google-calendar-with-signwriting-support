<script setup lang="ts">
;`
I had to stop using this component because I found out that a relative file path can not be passed as
variable. Either RollUp or WebPack can not or will choose to not try to find the file.

RollUp only includes files to the final bundle when it sees that the code is requiring the file. As in:

  <img src="path/to/file">

So, when the path is not working, as in the context of creating a wrapper component, such as this, and
passing the path as string, RollUp will not include said file to the final bundle.

I'm considering this as some sort of tech debt to be sorted once I learn more about it.

- https://modern-web.dev/docs/building/rollup-plugin-import-meta-assets/
- https://stackoverflow.com/questions/57349167/vue-js-dynamic-image-src-with-webpack-require-not-working
`

const props = defineProps<{
  src: string
  width?: number
  height?: number
}>()
</script>
<template>
  <img :src="props.src" alt="" :width="props.width" :height="props.height" />
</template>
<style scoped>
img {
  margin: 0.2rem;
}
</style>
