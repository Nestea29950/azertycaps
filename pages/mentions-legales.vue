<script setup >
const { data: mentionsLegales } = await useAsyncData('mentionsLegales', () =>
  queryCollection('content').path('/mentions-legales').first()
);

useSeoMeta({
  title: mentionsLegales.value?.title,
  description: mentionsLegales.value?.description
});
</script>

<template>
    <main class="pt-4   bg-white dark:bg-gray-900 antialiased">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
            
            <h1 class="mb-4 text-3xl text-center font-extrabold leading-tight text-gray-700 lg:mb-6 lg:text-4xl dark:text-white">
              {{ mentionsLegales?.title }}
            </h1>
          </header>
          <div class="text-gray-700">
            <ContentRenderer v-if="mentionsLegales" :value="mentionsLegales" />
          </div>

        </article>
      </div>
    </main>
  </template>
  

<style>
/* Peut être dans un fichier global, ou dans ton composant */
.format {
  white-space: pre-line;
}

</style>