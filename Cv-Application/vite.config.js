import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CV-Application-17/', // Make sure this matches your repo name EXACTLY, including capital letters and trailing slash
})