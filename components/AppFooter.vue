<script lang="ts" setup>
import { ref } from 'vue';
import linkedinsvg from '@/assets/images/linkedin-161-svgrepo-com.svg';
import instagramsvg from '@/assets/images/instagram-svgrepo-com.svg';
import githubsvg from '@/assets/images/github-svgrepo-com.svg';

const items_accessible = ref([
  { label: 'Mentions légales', link: '/mentions-legales' },
  { label: 'Plan du site', link: '/sitemap.xml' },
  { label: 'Politique de confidentialité', link: '/politique-de-confidentialite' },
]);

const items_socials = ref([
  { label: 'Github', link: 'https://github.com/Nestea29950', svgPath: githubsvg },
]);

const items_footer = ref([
  { label: 'Blog', link: '/blog' },
  { label: 'Contact', link: '/contact' },
]);
</script>

<template>
  <div class="pt-18 flex flex-col items-center mx-auto p-4 text-primary">
    <!-- Logo + Réseaux -->
    <div class="flex flex-col sm:flex-row w-full justify-around gap-4">
      <div class="flex justify-center items-center sm:flex-1 gap-4">
        <a href="/" class="flex items-center space-x-3">
          <img src="../assets/images/logo.svg" class="w-18" alt="logo portfolio">
        </a>

        <ul class="flex flex-row gap-4">
          <li v-for="social in items_socials" :key="social.label">
            <a :href="social.link" :title="social.label" target="_blank" rel="noopener" class="flex items-center gap-2 hover:underline">
              <img v-if="social.svgPath" :src="social.svgPath" :alt="'logo ' + social.label" class="w-6 h-6" />
             
            </a>
          </li>
        </ul>
      </div>

      

      <!-- Footer links -->
      <div class="flex flex-col sm:flex-row items-center justify-center sm:flex-1">
        <ul class="grid grid-cols-2 gap-x-12 text-center sm:text-left">
          <li v-for="item in items_footer" :key="item.label">
            <a :href="item.link" class="hover:underline">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Accessible links -->
    <div class="w-full p-4 text-center">
      <ul class="flex flex-col sm:flex-row justify-center gap-4 font-medium">
        <li v-for="item in items_accessible" :key="item.label">
          <a :href="item.link" class="hover:underline">{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
