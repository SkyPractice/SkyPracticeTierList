import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This is the default, but good to confirm
  },
  base: '/SkyPracticeTierList', // Replace with your repository name
});