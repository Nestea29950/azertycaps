<script setup>

const route = useRoute()
const articleId = route.params.id 

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('blog')
    .where('slug', '==', articleId)
    .first()
})


</script>

<template>
  <main class="antialiased w-content lg:w-content-lg xl:w-content-xl mx-auto">
   
      <article class="prose prose-base prose-gray mx-auto">
        <header class="mb-4 lg:mb-6 not-format">
          <address class="flex items-center gap-4 not-italic">
            <div class="inline-flex items-center text-sm text-text gap-4">
              <img
                class="w-16 h-16 rounded-full"
                src="../../assets/images/logo.svg"
                alt="William Gaonarc'h"
              />
              <div>
                <a
                  href="/"
                  rel="author"
                  title="portfolio de William Gaonarc'h"
                  class="text-xl font-bold text-text"
                  >William Gaonarc'h</a
                >
                <p class="text-base text-text mt-0 mb-0">Développeur Fullstack</p>
                <p class="text-base text-text mt-0 mb-0">
                  <time
                    pubdate
                    :datetime="data.date"
                    :title="data.date"
                    >{{ data.date }}</time
                  >
                </p>
              </div>
            </div>
          </address>
        </header>
        <ContentRenderer class="prose prose-base prose-gray" :value="data" />
      </article>
   
  </main>
</template>
