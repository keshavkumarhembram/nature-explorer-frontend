import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://nature-explorer-backend-412611.el.r.appspot.com/",
      // "/api": "http://localhost:3000/"
    }
  }
})
