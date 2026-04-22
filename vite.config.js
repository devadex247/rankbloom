import { defineConfig } from 'vite'

export default defineConfig({
  // base: '/rank_bloom-web/',
  // Basic configuration for static site
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist'
  }
})