import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use process.env to access environment variables in vite.config.ts
const PORT = process.env.VITE_PORT ? parseInt(process.env.VITE_PORT) : 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
    host: true, // Allows external access
  },
});
