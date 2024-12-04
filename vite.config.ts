import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
 plugins: [react()],
 optimizeDeps: {
   exclude: ['lucide-react'],
 },
 resolve: {
  alias: {
    'react-toastify': 'react-toastify',
  },
},
 build: {
   rollupOptions: {
     external: ['react-toastify'],
   }
  }
});