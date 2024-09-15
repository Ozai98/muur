// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  srcDir: 'src',
  modules: ['@pinia/nuxt'],
});
