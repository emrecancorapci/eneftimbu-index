import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import i18n from "astro-i18n"

// https://astro.build/config
export default defineConfig({
  integrations: [i18n(),react(), tailwind()]
});