import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    react(), 
    image({
    serviceEntryPoint: "@astrojs/image/sharp"
    }), 
    mdx(), 
    sitemap(), 
    astroI18next()]
});