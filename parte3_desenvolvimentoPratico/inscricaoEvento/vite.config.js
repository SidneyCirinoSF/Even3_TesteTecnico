import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite acesso na rede local
    allowedHosts: [
      '180b00f0aa41.ngrok-free.app', // Domínio do ngrok
      '.ngrok-free.app', // Permite qualquer subdomínio ngrok
    ],
  }
})
