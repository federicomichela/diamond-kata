import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist', // Ensure this matches your desired output directory
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
});