import { fileURLToPath, URL } from 'node:url'
// import { nodeResolve } from '@rollup/plugin-node-resolve'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('fsw-')
        }
      }
    }),
    vuetify({
      // https://stackoverflow.com/questions/72350551/combination-of-vue-3-vuetify-3-vue-test-utils-results-in-could-not-find-in
      autoImport: true
    }),
    // nodeResolve()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // base: process.env.REPOSITORY_NAME, // This will prevent the resources disappearing when they change from one GitHub repository to another
  base: '/sign-language-school-management/',
  build: {
    // emptyOutDir: true, // force destroy of bundled assets when outside of project dir
    // outDir: '../../', // delete everything, only the output will remain
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: 'assets/[name].js',
      }
    }
  }
})
