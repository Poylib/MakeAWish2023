import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
}));
