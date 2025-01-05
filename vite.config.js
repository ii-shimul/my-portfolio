import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    mimeTypes: {
      "application/javascript": ["js", "mjs"],
    },
  },
  plugins: [react()],
});
