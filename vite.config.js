import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const isProduction = process.env.NODE_ENV === "production";

const proxyTarget = isProduction
  ? "https://real-estate-backend-qitz.onrender.com"
  : "http://localhost:8000";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: proxyTarget,
        changeOrigin: true,
        secure: isProduction,
      },
    },
  },
  plugins: [react()],
});
