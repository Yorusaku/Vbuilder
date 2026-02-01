/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 3001,
        proxy: {
            '/charts': {
                target: 'https://echarts.apache.org',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/charts/, '')
            }
        }
    },
    build: {
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (/(echarts|d3|zrender)/.test(id)) {
                        return 'charts'
                    }
                }
            }
        }
    }
})
