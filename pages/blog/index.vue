<script setup>

useHead({
  title: 'Blog - Keycaps Azerty - Conseils et Actualités sur les Claviers Mécaniques Français ISO',
  meta: [
    { name: 'description', content: 'Découvrez nos articles sur les keycaps Azerty, les claviers mécaniques français ISO, et des conseils pour personnaliser votre matériel informatique.' },
    { name: 'keywords', content: 'blog keycaps Azerty, articles clavier mécanique, blog claviers ISO, personnalisation clavier mécanique, news claviers mécaniques' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'azertycaps.fr' }
]
});


const { data: articles } = await useAsyncData('blog', () => queryCollection('blog').all())


</script>

<template>
  <section class="bg-white ">
    
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h1 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">Blog</h1>
      </div>
      <div class="grid gap-8 lg:grid-cols-2">
        <article v-for="article in articles" :key="article._path" class="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
          <div class="flex justify-between items-center mb-5 text-gray-500">
            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
             
              <svg class="mr-1 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"/>
            </svg>

               {{ article.categorie }}
            </span>
            <span class="text-sm">{{ new Date(article.date.split('-').reverse().join('-')).toLocaleDateString() }}</span>

          </div>
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900  cursor-pointer ">
            <NuxtLink class="fancy-link" :to="'blog/' + article.slug" >{{ article.title }}</NuxtLink>
          </h2>
          <p class="mb-5 font-light text-gray-500 ">{{ article.description }}</p>
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <img class="w-7 h-7 rounded-full" src="../../assets/blog/author.png" alt="William Gaonarc'h Avatar" />
              <span class="font-medium ">{{ article.author }}</span>
            </div>
            <NuxtLink :to="'blog/' + article.slug" class="cursor-pointer inline-flex items-center font-medium text-primary-600  hover:underline ">
              En savoir plus 
              <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
