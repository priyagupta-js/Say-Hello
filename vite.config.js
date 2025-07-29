import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content:[
"./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  plugins: [tailwindcss(),],
})
