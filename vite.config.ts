import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://91.103.252.147:5432', // Бэкенд NestJS
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
    port: 3000, // Здесь указываем нужный порт
    watch:{
      usePolling:true
    },
    host:true,
    strictPort:true
  }
})
