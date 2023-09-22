import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
});
