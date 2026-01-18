import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// USE THIS CONFIG FOR COOLIFY / resume.prophyt.com
// Rename this to vite.config.js when deploying to Coolify
export default defineConfig({
  plugins: [react()],
  base: '/',  // Root path for custom domain
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
