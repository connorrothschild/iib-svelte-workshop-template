import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  vite: {
    server: {
      hmr: {
        protocol: "ws",
        clientPort: 443,
        strictPort: true,
        overlay: false
      }
    }
  }
});
