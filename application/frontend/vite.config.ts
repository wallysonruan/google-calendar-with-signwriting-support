import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // base: process.env.REPOSITORY_NAME, // This will prevent the resources disappearing when they change from one GitHub repository to another
  base: '/sign-language-school-management/',
  build: {
    emptyOutDir: true, // force destroy of bundled assets when outside of project dir
    outDir: '../../', // delete everything, only the output will remain
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: 'assets/[name].js'
      }
    }
  },
  test: {
    coverage: {
      provider: 'v8',
      reportsDirectory: './src/components/__tests__/unit/coverage',
      // https://github.com/vitest-dev/vitest/issues/2674
      all: true,
      include: [
        '**/components/**/**.vue',
        '**/components/Calendar/*.vue',
        '**/stores/*.ts',
        '**/views/*.vue'
      ]
    }
  }
})
