import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import WindiCSS from 'vite-plugin-windicss';

const rollupOptions = {
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'Vue'
        }
    }
}

export default defineConfig({
    plugins: [vue(), vueJsx(), WindiCSS()],
    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: './src/entry.ts',
            name: 'VueViteUI',
            fileName: 'vue-vite-ui',
            formats: ['es', 'iife', 'umd']
        },
        // cssCodeSplit: true
    }
})