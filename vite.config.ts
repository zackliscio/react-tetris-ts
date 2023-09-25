import path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react';
// import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import prefixer from 'postcss-prefix-selector';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // cssInjectedByJsPlugin(),
    dts({
      rollupTypes: true,
    }),
  ],
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
    modules: {
      generateScopedName: (name, filename) => {
        if (name === 'ttrs') return 'ttrs.ttrs';
        const file = path.basename(filename, '.css').split('.')[0];
        const result = ('_' + file + '_' + name).replace('.', '-');
        return result;
      },
    },
    postcss: {
      plugins: [
        tailwindcss('./tailwind.config.js'),
        prefixer({
          prefix: '.ttrs',
          transform(prefix, selector, prefixedSelector, filePath) {
            // console.log('TRANSFORMING', filePath);

            if (selector.match(/^(html|body)/)) {
              return selector.replace(/^([^\s]*)/, `$1 ${prefix}`);
            }

            if (filePath.match(/node_modules/)) {
              return selector; // Do not prefix styles imported from node_modules
            }

            return prefixedSelector;
          },
        }),
        autoprefixer({}),
      ],
    },
  },
});
