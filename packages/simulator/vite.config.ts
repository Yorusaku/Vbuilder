import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
            name: 'AppPreviewer',
            fileName: 'simulator'
        },
        rollupOptions: {
            external: ['vue', 'pinia', '@miaoma/blocks']
        }
    }
})
