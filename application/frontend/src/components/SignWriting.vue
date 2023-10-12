<script lang="ts">
export const SIGNWRITING_SVG_BASE_URL: string =
  'https://www.signbank.org/signpuddle2.0/glyphogram.php?font=svg1&bound=t&text='
</script>
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

--------------------------------------------------------------------------------------------------------

10/09/2023: Re-started using this component, but only with FSW strings to be concatenated to a base url making it a
full url pointing to the SignPuddle API.
`

const props = defineProps<{
  sign: string
  width?: number
  height?: number
  display: boolean
}>()

let signs: string[] = []

if (props.sign.includes(' ')) {
  signs = props.sign.split(' ')
}

if (props.sign.includes('%20')) {
  signs = props.sign.split(' ')
}
</script>
<template>
  <img
    v-for="(sign, index) in signs"
    :src="SIGNWRITING_SVG_BASE_URL + sign"
    :key="index"
    alt=""
    :width="props.width"
    :height="props.height"
    v-show="props.display"
  />
</template>
<style scoped>
img {
  margin: 0.2rem;
}
</style>
