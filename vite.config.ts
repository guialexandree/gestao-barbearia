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
      external: ['zod'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  define: {
    'process.env': process.env,
  },
  plugins: [react()],
})
