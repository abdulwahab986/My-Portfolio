import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "client"), // Vite ko bata raha hai ke frontend client folder mein hai
  build: {
    outDir: path.resolve(__dirname, "dist"), // Build root folder ke 'dist' mein jayegi
    emptyOutDir: true,import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client", // Frontend files yahan hain
  build: {
    outDir: "../dist", // Build root folder ke 'dist' mein jayegi
    emptyOutDir: true,
  }
});
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
});