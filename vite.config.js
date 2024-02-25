import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      features: "/src/features",
      pages: "/src/pages",
      styles: "/src/styles",
      routes: "/src/routes",
      shared: "/src/shared",
    },
  },
})
