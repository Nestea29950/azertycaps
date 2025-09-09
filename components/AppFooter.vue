<script setup>
</script>
<template>
  <footer class="bg-white rounded-lg m-4 ">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-gray-700 sm:text-center"
        >© 2025
        <a href="https://williamgaonarch.fr/" class="hover:underline">William™</a>.
        Tous droits réservés.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700 sm:mt-0 gap-4"
      >
      <li>
            <NuxtLink to="/" class="hover:underline">
                Accueil
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/contact" class="hover:underline">
                Contact
            </NuxtLink>
        </li>
        <li>
            <a href="/sitemap.xml" class="hover:underline">
                Plan du site
            </a>
        </li>
        <li>
            <NuxtLink to="/mentions-legales" class="hover:underline">
              Mentions légales
            </NuxtLink>
        </li>
        
        
      </ul>
    </div>
  </footer>
</template>

