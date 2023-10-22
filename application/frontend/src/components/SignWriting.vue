<script lang="ts">
export const SIGNWRITING_SVG_BASE_URL: string =
  'https://www.signbank.org/signpuddle2.0/glyphogram.php?font=svg1&bound=t&text='
</script>
<script setup lang="ts">
import { ssw } from '../components/Signwriting/SuttonSignWriting.js'
;`Ignore the error message. The module above is declared to Typescript in the files Signwriting.d.ts and tsconfig.app.json`
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
  display: boolean
}>()
</script>
<template>
  <div v-show="display" v-html="ssw.paragraph(sign)"></div>
</template>
<style scoped>
.signwriting {
  display: flex;
  flex-direction: column;
}
</style>
