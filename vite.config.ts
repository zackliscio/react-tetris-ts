import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(process.cwd(), "src/main.tsx"),
      name: "react-tetris-ts",
      fileName: "main",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          ["react-dom"]: "react-dom",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
