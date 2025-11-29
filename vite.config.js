import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/softfixer/",
  plugins: [tailwindcss()],
});
