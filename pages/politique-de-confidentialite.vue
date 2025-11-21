<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(() =>
  queryCollection("content").path("/politique-de-confidentialite").first()
);

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogTitle: page.value.title,
  ogDescription: page.value.description,
  ogImage: page.value.image,
  ogUrl: 'https://azertycaps.fr/politique-de-confidentialite',
})

</script>
<template>
  <section class="">
    <div class="py-8 px-4 mx-auto  flex flex-col gap-8 w-full">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1
          class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-primary"
        >
           {{  page.title }}
        </h1>
      </div>
     
      <ContentRenderer :value="page" class="prose prose-base prose-gray max-w-full" />

    </div>
  </section>
</template>


