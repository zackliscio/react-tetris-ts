import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import path from "path";
import prefixer from "postcss-prefix-selector";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin(), dts()],
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
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    modules: {
      generateScopedName: (name, filename) => {
        if (name === "react-tetris-ts") return "react-tetris-ts.react-tetris-ts";
        const file = path.basename(filename, ".css").split(".")[0];
        const result = ("_" + file + "_" + name).replace(".", "-");
        return result;
      },
    },
    postcss: {
      plugins: [
        tailwindcss("./tailwind.config.js"),
        prefixer({
          prefix: `.react-tetris-ts`,
          transform(prefix: string, selector: string, prefixedSelector: string, filePath: string) {
            if (selector.match(/^(html|body)/)) {
              return selector.replace(/^([^\s]*)/, `$1 ${prefix}`);
            }

            if (filePath.match(/node_modules/)) {
              return selector;
            }

            return prefixedSelector;
          },
        }),
        autoprefixer({}),
      ],
    },
  },
});
