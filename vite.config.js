import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Permite que el servidor sea accesible desde la red local
    port: 3000,  // El puerto que estás utilizando
  },
})
