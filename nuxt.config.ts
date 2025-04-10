import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/supabase',
    "@nuxtjs/robots",
    '@nuxtjs/sitemap',
    "nuxt-schema-org",
    "@nuxt/content",
  ],
  supabase: {
    redirect: false,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  routeRules: {
    // all routes (by default) will be revalidated every 60 seconds, in the background
    '/**': { isr: 60 },
    // this page will be generated on demand and then cached permanently
    '/static': { isr: true },
    // this page is statically generated at build time and cached permanently
    '/prerendered': { prerender: true },
    // this page will be always fresh
    '/dynamic': { isr: false },
  },
  
  
  
});