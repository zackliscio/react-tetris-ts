import path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(process.cwd(), 'src/main.tsx'),
      name: 'react-tetris-ts',
      // the proper extensions will be added
      fileName: 'main',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss('./tailwind.config.js')],
    },
  },
});
