<script setup>

const route = useRoute()
const articleId = route.params.id 

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('blog')
    .where('slug', '==', articleId)
    .first()
})
console.log(data.value)

</script>

<template>
  <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white  antialiased">
    <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
        <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 ">
                      <img class="mr-4 w-16 h-16 rounded-full" src="../../assets/blog/author.png" :alt=" data.author">
                      <div>
                          <p href="#" rel="author" class="text-xl font-bold text-gray-800 ">{{ data.author}}</p>
                          <p class="text-base text-gray-500 ">Auteur</p>
                          <p class="text-base text-gray-500 "><time pubdate datetime="2022-02-08" title="February 8th, 2022">{{ new Date(data.date.split('-').reverse().join('-')).toLocaleDateString() }}</time></p>
                      </div>
                  </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-800 lg:mb-6 lg:text-4xl custom_underline w-fit">{{ data.title }}</h1>
          </header>
          <div class="lead">
            <ContentRenderer v-if="data" :value="data" />
          </div>
      </article>
    </div>
  </main>
</template>


<style>


</style>