import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.join(__dirname, "src/app"),
      "@pages": path.join(__dirname, "src/pages"),
      "@widgets": path.join(__dirname, "src/widgets"),
      "@shared": path.join(__dirname, "src/shared"),
    },
  },
})
