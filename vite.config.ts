import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), eslint()],
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  },
})
