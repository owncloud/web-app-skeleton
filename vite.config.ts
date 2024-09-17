import { defineConfig } from '@ownclouders/extension-sdk'

export default defineConfig({
  name: 'web-app-skeleton',
  server: {
    port: 9224
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'index.js'
      }
    }
  }
})
