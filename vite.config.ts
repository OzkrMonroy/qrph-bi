import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }: any) => defineConfig({
  plugins: [react()],
  define: { "process.env": { ...loadEnv(mode, process.cwd()) } },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
