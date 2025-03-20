import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 80, // Pastikan Vite berjalan di port 80
    host: "0.0.0.0", // Agar bisa diakses dari luar container
    strictPort: true, // Mencegah Vite mencari port lain
    hmr: {
      protocol: "ws", // Gunakan 'ws' jika tidak menggunakan HTTPS
      host: "localhost", // Host yang digunakan di luar Docker
      clientPort: 80, // Pastikan WebSocket berjalan di port 80
    },
  },
});
