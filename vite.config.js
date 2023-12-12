import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pleyer_songs: `${path.resolve(__dirname, "./public/music-player/sngs/")}`,
      player_imgs: `${path.resolve(__dirname, "./public/music-player/imgs/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      types: `${path.resolve(__dirname, "./src/@types")}`,
    },
  },
})
