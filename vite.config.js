import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If your repo is https://github.com/yourname/my-landing,
// set base to '/my-landing/'.
// If it's yourname.github.io, use base: '/' instead.
export default defineConfig({
  plugins: [react()],
  base: '/landing-page-demo/',
  build: { outDir: 'docs' }
});

