import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'


export default defineConfig({
    root: './demo',
    build: {
        outDir: './dist',
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'PrimeGeneric',
            formats: ['es', 'umd'],
            fileName: (format) => `${'semantic-prime'}.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                }
            }
        },
    },
    plugins: [
        vue(),
    ],

})
