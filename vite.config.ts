import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: ['zod']
  },
  build: {
    rollupOptions: {
      external: ['zod']
    }
  },
  define: {
    'process.env': process.env,
  },
  plugins: [react()],
})
