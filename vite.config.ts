import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import macrosPlugin from 'vite-plugin-babel-macros'

// import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), eslint()],
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  },
})
