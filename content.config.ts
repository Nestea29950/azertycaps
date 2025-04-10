import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page', 
      source: 'blog/*.md',
      schema: z.object({
        date: z.string(),
        categorie: z.string(),
        author: z.string(),
        idarticle: z.string(),
      })
    }),
    content: defineCollection({
      type: 'page',  
      source: '**/*.md',
    })
  }
})
