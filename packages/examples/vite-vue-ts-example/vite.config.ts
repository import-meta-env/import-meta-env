import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import runtimeConfig from "@final-env/unplugin";
import createSharedViteConfig from "../shared-vite-config.mjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), runtimeConfig.vite({ example: ".env.example.public" })],
  ...createSharedViteConfig(),
});
