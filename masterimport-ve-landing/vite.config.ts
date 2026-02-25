import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  // Para GitHub Pages con repositorio personal:
  // base: '/NOMBRE_DEL_REPO/',
  // 
  // Para dominio personalizado o usuario.github.io:
  base: './',
  
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
