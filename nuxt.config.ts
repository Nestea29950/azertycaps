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
  

});