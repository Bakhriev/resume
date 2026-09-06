import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePluginSvgSpritemap("./public/icons/*.svg"),
  ],
});
