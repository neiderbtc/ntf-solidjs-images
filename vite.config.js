import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/ntf-solidjs-images/',
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  server: {
    host: true
  }
});
