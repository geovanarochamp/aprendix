import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/aprendix/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.png"],
      manifestFilename: "manifest.webmanifest",
      manifest: false,
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
