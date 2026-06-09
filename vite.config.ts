import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vitejs.dev
export default defineConfig({
  plugins: [react(), cloudflare()],
  base: '/website/', // Matches your repository name for GitHub Pages
  server: {
    host: '0.0.0.0', // Keeps your local network binding active
  }
})