import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cv-application/', // <-- REPLACE 'cv-application' with your EXACT GitHub repository name!
})