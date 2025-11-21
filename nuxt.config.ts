import tailwindcss from "@tailwindcss/vite";
import { globby } from "globby";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
        
      },
      
    }
  },


  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/sitemap',
    "nuxt-schema-org",
    "@nuxt/content",
    "@nuxtjs/robots",
  ],
  supabase: {
    redirect: false,
  },
sitemap: {

    urls: async () => {
      // Récupère tous les fichiers markdown dans /content
      const files = await globby("content/**/*.md")

      return files.map((file) => {
        // Retirer "content" + extension .md
        let path = file
          .replace("content", "")
          .replace(/\.md$/, "");

        // Gestion des index.md
        if (path.endsWith("/index")) {
          path = path.replace("/index", "");
        }

        return path === "" ? "/" : path;
      })
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  

});