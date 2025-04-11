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
    <main class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
            
            <h1 class="mb-4 text-3xl text-center font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {{ mentionsLegales?.title }}
            </h1>
          </header>
          <div class="text-gray-700 lead">
            <ContentRenderer v-if="mentionsLegales" :value="mentionsLegales" />
          </div>

        </article>
      </div>
    </main>
  </template>
  

<style>


</style>