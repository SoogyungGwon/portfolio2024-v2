import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/soo-portfolio/',
  build: {
    outDir: 'soo-portfolio'
  },
  plugins: [react()],
})
