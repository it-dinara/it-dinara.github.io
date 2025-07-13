import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/makves-menu/dist",
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
              minify: false,
            },
          ],
        ],
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: "5173",
  },
});
