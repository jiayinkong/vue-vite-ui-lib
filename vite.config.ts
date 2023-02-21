import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from './config/unocss';

const rollupOptions = {
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'Vue'
        }
    }
}

export const config = {
  plugins: [
    vue(),
    vueJsx(),
    Unocss()
],
build: {
    outDir: "./dist",
    rollupOptions,
    minify: false,
    lib: {
        entry: './src/entry.ts',
        name: 'VueViteUI',
        fileName: 'vue-vite-ui',
        formats: ['es', 'iife', 'umd']
    },
    cssCodeSplit: true
},
test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
        web: [/.[tj]sx$/]
    }
}
}

export default defineConfig(config as UserConfig);
