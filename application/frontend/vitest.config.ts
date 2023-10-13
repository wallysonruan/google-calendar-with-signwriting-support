import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      server: {
        deps: {
          inline: ['vuetify']
        }
      },
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
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
)
