import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import react from "@astrojs/react";
import wasm from '@rollup/plugin-wasm';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), react()],
  vite: {
    plugins: [wasm()]
  }
});