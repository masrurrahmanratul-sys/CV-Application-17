import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Cv-Application/', // Make sure this matches your repo name EXACTLY, including capital letters and trailing slash
})