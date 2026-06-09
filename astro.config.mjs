// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Site é estático e envia zero JS por padrão (Astro islands desativadas aqui).
// Tailwind v4 entra como plugin do Vite — sem config file separado.
export default defineConfig({
  site: "https://cineprodutora.com.br",
  vite: {
    plugins: [tailwindcss()],
  },
});
