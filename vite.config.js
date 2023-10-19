import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    reactSvgPlugin(),
   ],
})
