import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve:{
    alias:[
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
    ],
  },
  plugins: [react()],
})
