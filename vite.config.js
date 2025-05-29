import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Priyanshu-portfolio/',  // Add this line for GitHub Pages
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  optimizeDeps: {
    include: ['framer-motion']
  }
})