/* eslint-disable @typescript-eslint/no-unused-vars */

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const BASE_URL = 'https://api.github.com'; // dev

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd(), '');
  const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_BASENAME,

    plugins: [
      react(),
      viteStaticCopy({
        targets: [{ src: 'node_modules/@hbwow/components/lib/pwsHtml/**/*', dest: 'pwsHtml' }],
      }),
      visualizer(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 8089,
      proxy: {
        '/githubApi': {
          target: BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/githubApi/, ''),
          // configure: (proxy, options) => {
          // proxy will be an instance of 'http-proxy'
          // },
        },
      },
    },
  };
});
