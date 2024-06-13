import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for build
  },
  define: {
    __DEFINES__: {}, // Replace with your actual definitions or default values
    __BASE__: '"/"', // or set to your base path if different
    __SERVER_HOST__: '""', // or set to your server host value if different
    __HMR_PROTOCOL__: '""', // Hot Module Replacement protocol
    __HMR_HOSTNAME__: '""', // Hot Module Replacement hostname
    __HMR_PORT__: '""', // Hot Module Replacement port
    __HMR_BASE__: '""', // Hot Module Replacement base
    __MODE__: '""', // Mode (development or production)
    __DEV__: '""', // Development mode flag
    __PROD__: '""', // Production mode flag
    __VITE_ENV__: '""', // Vite environment
  },
})
