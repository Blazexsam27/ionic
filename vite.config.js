import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

const env = loadEnv("", process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    host: true,
    port: 3000,
    strictPort: true,
    proxy: {
      "/api": {
        target: env.VITE_BASE_SERVER_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/global.scss";`,
      },
    },
  },
});
/*
server: {
    host: true,
    port: 3000,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
*/
